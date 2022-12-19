import { MODAL_OFF, MODAL_ON } from "../constants/modalConstants";

const initialState = {
    modalActive: false
}

export default function modalReducer(state = initialState, action) {
    switch(action.type) {
        case MODAL_ON:
            return { ...state, modalActive: true};
        case MODAL_OFF:
            return { ...state, modalActive: false}
        default:
            return state;
    }
}