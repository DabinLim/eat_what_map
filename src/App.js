import React from 'react';
import KaKaoMap from "./components/KakaoMap";
import RNListener from "./components/RNListener";
import {
    RecoilRoot
} from "recoil";

function App() {
  return (
    <RecoilRoot>
        <RNListener>
          <KaKaoMap />
        </RNListener>
    </RecoilRoot>
  );
}

export default App;
