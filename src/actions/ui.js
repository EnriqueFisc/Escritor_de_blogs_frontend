import { types } from "../types/types";


export const uiHideAsaid = () => ({
    type: types.uiHideAsideBar
})

export const uiSetLoading = () => ({
    type: types.uiSetLouding,
})

export const uiSetFinishLoading = () => ({
    type: types.uiSetFinishLouding,
})

export const setDisableUpdateButton = () => ({
    type: types.uiSetdisabledUpdataButton
})
export const setUnDisableUpdateButton = () => ({
    type: types.uiSetUndisabledUpdataButton
})