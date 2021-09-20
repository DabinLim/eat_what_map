import {atom} from "recoil";

const locationState = atom({
    key: 'locationState',
    default: {
        latitude: 37.56080754022743,
        longitude: 126.92737579814681,
    }
})

export const mapAtoms = {
    locationState,
}
