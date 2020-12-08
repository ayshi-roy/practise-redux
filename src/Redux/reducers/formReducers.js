const { REMOVE_DATA, ON_SUBMIT } = require("../Actions/FormAction");

const initialState = {
    cart: [],
    
}

const formReducers = (state = initialState, action) =>{
    switch (action.type){
        case ON_SUBMIT:
            console.log(action) 
            const newData = action.data;            
            const newCart = [...state.cart, newData];
            return {cart : newCart};
        case REMOVE_DATA:
            console.log(action.id);
            const id = action.id;            
            const remainData = state.cart.filter(item => item !== id); 
            return {cart : remainData}   
        default:
            return state;
    }
}

export default formReducers;