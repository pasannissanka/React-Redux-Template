import { alertConstants } from "../Constants/alert.constants";


export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'alert-sucess',
                message: action.message
            }
        case alertConstants.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            }
        case alertConstants.CLEAR:
            return {}
        default:
            return state
    }
}