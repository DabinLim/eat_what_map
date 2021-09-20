import React from 'react';
import KaKaoMap from "./components/KakaoMap";
import RNListener from "./components/RNListener";

function App() {
  return (
    <React.Fragment>
        <RNListener>
          <KaKaoMap />
        </RNListener>
    </React.Fragment>
  );
}

export default App;
