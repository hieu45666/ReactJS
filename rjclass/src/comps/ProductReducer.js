import { CREATE_PRODUCT, DELETE_PRODUCT } from "./actionType";

let productList =[];
export default function ProductReducer(state = productList, action) {
    switch (action.type) {
        case CREATE_PRODUCT:
            {
                //tự sinh id
                let maxID = !Math.max(...productList.id) ? 1 : Math.max(...productList.id);
            }
            return [...state.action.payload];
        break;
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload.id)
        break;
        default:
            return state;
    }
}