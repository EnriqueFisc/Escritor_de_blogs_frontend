/**
 *   ui = {
 *      asideHidden: false/true,
 *      loading: false,
 *  }
 */

import { types } from "../types/types";

const initialState = {
    asideHidden: false,
    loading: false,
    disableUpdate: true,
}

export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiHideAsideBar:
            return {
                ...state,
                asideHidden: !state.asideHidden
            };
        case types.uiSetLouding:
            return {
                ...state,
                loading: true,
            };
        case types.uiSetFinishLouding:
            return {
                ...state,
                loading: false,
            };
        case types.uiSetdisabledUpdataButton:
            return {
                ...state,
                disableUpdate: true,
            };
        case types.uiSetUndisabledUpdataButton:
            return {
                ...state,
                disableUpdate: false,
            };
        default:
            return state;
    }

}