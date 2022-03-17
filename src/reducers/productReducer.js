import { ALLPRODUCTS,LOADINGPRODUCTS,PRODUCTLOADINGERROR } from "../actions/actionType";

const initialProductState = {
    loading:false,
    Products:[],
    error:false
}


export const allProductReducer = (state = initialProductState,action) =>{
    switch (action.type) {
        case ALLPRODUCTS:
            return {
                ...state,Products:action.payload,error:false
            }
        default:
            return state
            break;
    }
}