import {  useReducer } from "react";

const useHandleState =()=>{
    
    const initialCartState = {
        menu:false,
        basket:false,
        cartItems:[],
        product:{
            title:'Full Limited Edition Sneakers',
            prize:0,
            count:0,
            total:0
        }
    };
    const reducer  =(state,action)=>{
        switch(action.type){
            case 'toggle_Menu':
                return {...state,menu:!state.menu};
            case 'toggle_Basket':
                return {...state,basket:!state.basket};
            case 'update_cartItems':
                return {...state,cartItems:[...state.cartItems,action.payload]};
            case 'update_title':
                return {...state,
                        product:{
                            ...state.product,
                            title:action.payload
                        }
                    };
            case 'update_prize':
                return{
                    ...state,
                    product:{
                        ...state.product,
                        prize:action.payload
                    }
                }
            case 'update_count':
                return{
                    ...state,
                    product:{
                        ...state.product,
                        count:action.payload
                    }
                }
            case 'update_total':
                return{
                    ...state,
                    product:{
                        ...state.product,
                        total:state.product.count *state.product.prize
                    }
                }
            default:
                return state;
        }
    }
    const[state,dispatch] =useReducer(reducer,initialCartState);
    
    {/**function to handle menu */}
    const handleMenu=()=>{
        dispatch({type:'toggle_Menu'})
        console.log(`menu state:${state.menu}`)
    }
    {/**function to handle basket */}
    const handleBasket =()=>{
        dispatch({type:'toggle_Basket'})
        console.log(state.basket);
    }
    {/**function to hadle cart items */}
    const handleAddItems =()=>{
        dispatch({type:'update_cartItems'})
    }
    {/**function to handle title */}
    const handleTitle =()=>{
        dispatch({type:'update_title'})
    }
    {/**functionn to handle prize */}
    const handlePrize =()=>{
        dispatch({type:'update_prize',prize:125.00})
    }
    {/**function to  handle count */}
    const handleCount =(count)=>{
        dispatch({type:'update_count',count:count})
    }
    {/**function  to handle total */}
    const handleTotal =()=>{
        dispatch({type:'update_total'})
    }
    return{
        state,handleMenu,handleBasket,handleAddItems,handleTitle,
        handlePrize,handleCount,handleTotal
    }
}
export default useHandleState;