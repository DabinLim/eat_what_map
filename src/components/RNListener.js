import React, {useEffect} from 'react';
import {useRecoilState} from "recoil";
import {mapAtoms} from "../recoil/atoms/mapAtoms";

const RNListener = ({children}) => {

    const [location, setLocation] = useRecoilState(mapAtoms.locationState);
    const [keyword, setKeyword] = useRecoilState(mapAtoms.keywordState);
    useEffect(() => {
        if (window.ReactNativeWebView) {
            // android
            document.addEventListener("message", listener);
            // ios
            window.addEventListener("message", listener);
        }
        return () => {
            document.removeEventListener("message", listener);
            window.removeEventListener("message", listener);
        }
    }, [])

    const listener = (event) => {
        console.log(JSON.parse(event.data));
        const {data, type} = JSON.parse(event.data);
        if (type === "Location") {
            setLocation(data);
        }
        if (type === "Keyword") {
            console.log(data.keyword);
            setKeyword({keyword: `${data.keyword} 맛집`})
        }
    };

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export default RNListener;
