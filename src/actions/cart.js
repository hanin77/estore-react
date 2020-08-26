
import axios from 'axios';
export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    product 
  });
export const editQCart = ({id,quantity}) => ({
    type: 'EDIT_Q_TO_CART',
    id,
    quantity
  });
export const setCart = (mycart) =>({
    type: 'SET_CART',
    cart: mycart   
  })

export const getCustomerCart = (id) => {
    return (dispatch) => { 
        if (id) {
            return axios.get(`/api/user/cart/${id}`).then((resp) => {
            console.log('respond from express server', resp.data);
            dispatch(setCart([...resp.data]));
        }).catch((error)=> {
          console.log(error);
        }); 
        }
        else {
            console.log(localStorage.getItem('reduxState'));
            dispatch(setCart(localStorage.getItem('reduxState')?[...JSON.parse(localStorage.getItem('reduxState')).cart]: []));
        }
        
        
    };
}
export const startAddToCart = (product = {}, cart, loggedIn) => {
    return (dispatch) => {
        const {
            id = '0',
            title = '',
            price = 0,
            category = '',
            image=''
        } = product;
        console.log("from cart action cart: ",cart);
        if(loggedIn) {
            if(Object.keys(cart).length === 0) {
                console.log("new product added to cart");
            }
            else {
                const quantity= cart.quantity + 1;
                console.log("updated qt of product in cart",quantity);
            }
        }
        else {
            if(Object.keys(cart).length === 0) {
                dispatch(addToCart({
                    id:id.toString(),
                    title,
                    price,
                    quantity: 1,
                    category,
                    image
                    }));
            }
            else {
                const quantity= cart.quantity + 1;
                    dispatch(editQCart({
                        id:id.toString(),
                        quantity
                    }));
            }
        }
    };
  };
