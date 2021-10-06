import {atom} from "recoil";

const locationState = atom({
    key: 'locationState',
    default: {
        latitude: undefined,
        longitude: undefined,
    }
})

const keywordState = atom({
    key: 'keywordState',
    default: {
        keyword: undefined
    }
})

export const mapAtoms = {
    locationState,
    keywordState
}
