import * as React from 'react';
import styled from "styled-components";
import {useCallback, useEffect, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {mapAtoms} from "../recoil/atoms/mapAtoms";
import {get} from 'lodash';
import "./styles/map.css";
import axios from 'axios';
import Marker from '../ic_marker.png';

axios.defaults.baseURL = 'https://dapi.kakao.com'
axios.defaults.headers.common['Authorization'] = `KakaoAK ${process.env.REACT_APP_KAKAO_LOCAL_KEY}`;
axios.defaults.headers.common['X-Requested-With'] = 'curl';

const {kakao} = window

const KaKaoMap = () => {
    const location = useRecoilValue(mapAtoms.locationState);
    const keywordFromRN = useRecoilValue(mapAtoms.keywordState);
    const [map, setCurrentMap] = useState();
    const [placeData, setPlaceData] = useState();

    // const keyword = get(keywordFromRN, 'keyword');
    const keyword = '맛집';
    const latitude = get(location, 'latitude');
    const longitude = get(location, 'longitude');
    const page = get(location, 'page');
    let markers = [];
    let activeOverlay;
    useEffect(() => {
        if (map) {
            const clearOverlay = () => {
                activeOverlay && activeOverlay.setMap(null);
                if (window.ReactNativeWebView) {
                    window.ReactNativeWebView.postMessage(
                        JSON.stringify({
                            type: 'selectedPlace',
                            message: null,
                        })
                    )
                }
            }
            kakao.maps.event.addListener(map, 'click', clearOverlay);

            return () => {
                kakao.maps.event.remove();
            }
        }
    },[map, activeOverlay])

    useEffect(() => {
        let container = document.getElementById('map');
        if (kakao) {
            let options = {
                center: new kakao.maps.LatLng(latitude, longitude),
                level: 3,
            }
            setCurrentMap(new kakao.maps.Map(container, options));
        }
    }, [kakao])

    useEffect(() => {
        console.log(location)
        console.log(latitude)
        console.log(longitude);
        console.log(keywordFromRN)
        console.log(keyword)
        console.log(page);
        if (page === 1) {
            setPlaceData([]);
        }
        if(keyword && map) {
            searchPlaces()
        }
    },[keywordFromRN, location, map, page])

    const searchPlaces = () => {
        axios.get(`/v2/local/search/keyword.json?query=${keyword}&y=${latitude}&x=${longitude}&radius=20000&page=${page}&sort=distance`,
        ).then((res) => {
            if (res.data.documents.length > 0) {
                let mergeList;
                if (page === 1) {
                    mergeList = [...res.data.documents];
                } else {
                    mergeList = [...placeData, ...res.data.documents];
                }
                setPlaceData(mergeList);
                placesSearchCB(mergeList, res.status)
                if (res.data.documents.length < 15) {
                    if (window.ReactNativeWebView) {
                        window.ReactNativeWebView.postMessage(
                            JSON.stringify({
                                type: 'lastPage',
                            })
                        )
                    }
                }
            } else {
                removeMarker();
                if (window.ReactNativeWebView) {
                    window.ReactNativeWebView.postMessage(
                        JSON.stringify({
                            type: 'placeData',
                            message: [],
                        })
                    )
                }
            }
        }).catch(err => console.log(err))
    };

    const placesSearchCB = (data, status) => {
        if (status === 200) {

            // 정상적으로 검색이 완료됐으면
            // 검색 목록과 마커를 표출합니다
            if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({
                        type: 'placeData',
                        message: data
                    })
                )
            }
            displayPlaces(data);

        } else if (status === kakao.maps.services.Status.ZERO_RESULT) {

            alert('검색 결과가 존재하지 않습니다.');
            return;

        } else if (status === kakao.maps.services.Status.ERROR) {

            alert('검색 결과 중 오류가 발생했습니다.');
            return;

        }
    }

    const displayPlaces = (places) => {

        let bounds = new kakao.maps.LatLngBounds();

        // 지도에 표시되고 있는 마커를 제거합니다
        removeMarker();
        for (let i = 0; i < places.length; i++) {

            // 마커를 생성하고 지도에 표시합니다
            let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x);
            let marker = addMarker(placePosition, i, places[i]?.place_name);

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    }

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    const addMarker = (position, idx, title) => {
            const markerImage = createMarkerImage(),
            marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage,
            });

        marker.setMap(map); // 지도 위에 마커를 표출합니다
        const content = `<div class ="label"><span class="left"></span><span class="center">${title}</span><span class="right"></span></div>`;

        const customOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content
        });

        kakao.maps.event.addListener(marker, 'click', () => {
            // 마커 위에 인포윈도우를 표시합니다
            if (window.ReactNativeWebView) {
                window.ReactNativeWebView.postMessage(
                    JSON.stringify({
                        type: 'selectedPlace',
                        message: idx,
                    })
                )
            }
            activeOverlay && activeOverlay.setMap(null);
            customOverlay.setMap(map);
            activeOverlay = customOverlay;

        });

        markers.push(marker);  // 배열에 생성된 마커를 추가합니다

        return marker;
    }

    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    const removeMarker = () => {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
    }

    const createMarkerImage = () => {
        const markerWidth = 32;
        const markerHeight = 32;
        const size = new kakao.maps.Size(markerWidth, markerHeight);
        const options = { offset: new kakao.maps.Point(16, 16) };
        const markerImage = new kakao.maps.MarkerImage(
            Marker, // 스프라이트 마커 이미지 URL
            size, // 마커의 크기
            options,
        );

        return markerImage;
    }

    return (
        <Container id="map">
        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default KaKaoMap;
