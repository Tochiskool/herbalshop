import React, { useEffect, useReducer } from 'react'
import { getAll } from '../../services/drugService';
import Thumbnails from '../../components/Thumbnails/Thumbnails';

const initialState = {drugs : []}
//Reducer
//Function with currentState and action we want to perform
const reducer = (state, action)=>{
    switch(action.type){
        case "DRUGS_LOADED":
            //Load previous state and overide with new value
            return {...state, drugs: action.payload}
            default:
                return state;
    }
}

const HomePages = () => {

    // Destructure
    //user reducer from react pass our reducer as first param and initialstate
    const [state, dispatch] = useReducer(reducer, initialState);
    const {drugs} = state;

    useEffect(()=>{
        getAll().then(drugs => dispatch({type:"DRUGS_LOADED", payload:drugs}));
    },[])
  return (
    <>
        <Thumbnails drugs={drugs}/>
    </>
  )
}

export default HomePages