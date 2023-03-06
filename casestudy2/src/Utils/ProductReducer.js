import { CREATE_PRODUCT, DELETE_PRODUCT } from "./actionType";

let productList =[];
export default function ProductReducer(state = productList, action) {
    switch (action.type) {
        case CREATE_PRODUCT:
            {
                //tự sinh id
                const maxId = state.length === 0 ? 0 : Math.max(...state.map(x => x.id));
                action.payload.id = maxId  + 1;
                state.push(action.payload);
            }
            return [...state];
        case DELETE_PRODUCT:
            return state.filter(product => product.id !== action.payload.id)
        default:
            return state;
    }
}