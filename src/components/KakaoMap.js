import * as React from 'react';
import styled from "styled-components";
import {useEffect, useState} from "react";
import {useRecoilState, useRecoilValue} from "recoil";
import {mapAtoms} from "../recoil/atoms/mapAtoms";
import {get} from 'lodash';
import "./styles/map.css";
import axios from 'axios';

axios.defaults.baseURL = 'https://dapi.kakao.com'
axios.defaults.headers.common['Authorization'] = `KakaoAK ${process.env.REACT_APP_KAKAO_LOCAL_KEY}`;
axios.defaults.headers.common['X-Requested-With'] = 'curl';

const {kakao} = window

const KaKaoMap = () => {
    const location = useRecoilValue(mapAtoms.locationState);
    const keywordFromRN = useRecoilValue(mapAtoms.keywordState);
    const [map, setCurrentMap] = useState();

    const keyword = get(keywordFromRN, 'keyword');
    const latitude = get(location, 'latitude');
    const longitude = get(location, 'longitude');
    let markers = [];

    useEffect(() => {
        let container = document.getElementById('map');
        if (kakao) {
            let options = {
                center: new kakao.maps.LatLng(location.latitude, location.longitude),
                level: 3,
            }
            setCurrentMap(new kakao.maps.Map(container, options));
        }
    }, [kakao])

    useEffect(() => {
        if(keyword && latitude && longitude) {
            searchPlaces()
        }
    },[location, keywordFromRN])

    const searchPlaces = () => {
        axios.get(`/v2/local/search/keyword.json?query=${keyword}&y=${latitude}&x=${longitude}&radius=10000`,
        ).then((res) => {
            const sortByDistance = res.data.documents.sort(function(a, b) { // 오름차순
                return a.distance - b.distance;
            });
            console.log(sortByDistance)
            placesSearchCB(res.data.documents, res.status)
        }).catch(err => console.log(err))
    }

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
            let marker = addMarker(placePosition, i);

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            bounds.extend(placePosition);
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    }

// 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    const addMarker = (position, idx, title) => {
        let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png', // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new kakao.maps.Size(36, 37),  // 마커 이미지의 크기
            imgOptions = {
                spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
                spriteOrigin: new kakao.maps.Point(0, (idx * 46) + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
                offset: new kakao.maps.Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imgOptions),
            marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                image: markerImage
            });

        marker.setMap(map); // 지도 위에 마커를 표출합니다
        markers.push(marker);  // 배열에 생성된 마커를 추가합니다

        return marker;
    }

// 지도 위에 표시되고 있는 마커를 모두 제거합니다
    function removeMarker() {
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }
        markers = [];
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
