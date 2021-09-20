import * as React from 'react';
import styled from "styled-components";
import {useEffect} from "react";

const listener = (event) => {
    console.log(event.data);
    const { data, type } = JSON.parse(event.data);
    if ( type === "Location" ) {
        console.log(data)
    }
};

const { kakao } = window

const KaKaoMap = () => {

    useEffect(() => {
        let container = document.getElementById('map');
        let options = {
            center: new kakao.maps.LatLng(37.365264512305174, 127.10676860117488),
            level: 3,
        }
        let map = new kakao.maps.Map(container, options)
    },[])

    useEffect(() => {
        if (window.ReactNativeWebView){
            // android
            document.addEventListener("message", listener);
            // ios
            window.addEventListener("message", listener);
        }
        return () => {
            document.removeEventListener("message", listener);
            window.removeEventListener("message", listener);
        }
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
