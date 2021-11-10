import {atom} from "recoil";

const locationState = atom({
    key: 'locationState',
    default: {
        latitude: 37.56080754022743,
        longitude: 126.92737579814681,
    }
})

const keywordState = atom({
    key: 'keywordState',
    default: {
        keyword: '맛집'
    }
})

const paginationState = atom({
    key: 'paginationState',
    default: {
        page: 1,
    }
})

export const mapAtoms = {
    locationState,
    keywordState,
    paginationState,
}
