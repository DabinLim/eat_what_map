import * as React from 'react';
import styled from "styled-components";
import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {mapAtoms} from "../recoil/atoms/mapAtoms";

const { kakao } = window

const KaKaoMap = () => {
    const [location, setLocation] = useRecoilState(mapAtoms.locationState);

    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(location.latitude, location.longitude),
            level: 3,
        }
        let map = new kakao.maps.Map(container, options)
    },[location])

    useEffect(() => {
        requestPermission();
    },[])

    const requestPermission = () => {
        if(window.ReactNativeWebView) {
            window.ReactNativeWebView.postMessage(
                JSON.stringify({message: 'this is message from webview'})
            )
        }
    }

    return(
        <Container id="map">

        </Container>
    )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default KaKaoMap;
