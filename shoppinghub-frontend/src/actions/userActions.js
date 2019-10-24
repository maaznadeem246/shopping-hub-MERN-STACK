import { USER_TOKEN } from '../constants/constants'


export const userToken = () => {
    const token = localStorage.getItem('autt')
    return {
        type:USER_TOKEN,
        payload:token,
    }
}

