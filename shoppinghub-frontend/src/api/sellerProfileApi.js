import { SELLERPROFILE_R_RECIVED,SELLERPROFILE_ERROR } from '../constants/constants'
import { api } from "./apiDetails"

const sellerProfileApi = async (dispatch, token) => {
    try{
        const getSellerProfile = await fetch(`${ api }/authentication`)
    }catch(e){
        
    }
}