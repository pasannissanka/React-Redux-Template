import { alertConstants } from '../Constants/alert.constants'

function sucess(message) {
    return ({
        type: alertConstants.SUCCESS,
        message: message
    })
}

function error(message) {
    return ({
        type: alertConstants.ERROR,
        message: message
    })
}

function clear() {
    return ({
        type: alertConstants.CLEAR
    })
}

export const alertActions = {
    sucess,
    error,
    clear
}