import * as React from 'react';
import styled from "styled-components";
import {useEffect} from "react";

const KaKaoMap = () => {

    const { kakao } = window

    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3,
        }
        let map = new kakao.maps.Map(container, options)
    },[])

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
