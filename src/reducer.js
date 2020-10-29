export const initialState = {
    basket: {},
    user: null,
}

export const getBasketTotal = (basket) => {
    return Object.values(basket)?.reduce((amount, item) => amount + item.product.price * item.count, 0);
}
export const productsCount = (basket) => {
    return Object.values(basket)?.reduce((amount, item) => amount + item.count, 0);
}

function reducer(state, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            let newwBasket = state.basket;
            if (!newwBasket.hasOwnProperty(action.item.id)) {
                newwBasket[action.item.id] = { product: action.item.product, count: action.item.count }
            }
            else {
                newwBasket[action.item.id].count += action.item.count;
            }
            return {
                ...state,
                basket: newwBasket
            };
        case 'CHANGE_PRODUCT_COUNT':
            let changeProductCountBasket = state.basket;
            changeProductCountBasket[action.id].count = action.count;
            return {
                ...state,
                basket: changeProductCountBasket
            };
        case 'REMOVE_FROM_BASKET':
            let newBasket = state.basket;

            delete newBasket[action.id]
            // const index = state.basket.findIndex((x) => x.id === action.id);

            // if (index >= 0) {
            //     newBasket.splice(index, 1);
            // }
            // else {
            //     console.warn(
            //         `This product does not exists id: ${action.id}`
            //     );
            // }
            return {
                ...state,
                basket: newBasket
            };
        case 'REMOVE_ALL_ITEMS_FROM_BASKET':
            return {
                ...state,
                basket: {}
            };
        default:
            return state;
    }
    
}

export default reducer;