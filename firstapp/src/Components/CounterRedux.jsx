import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CounterRedux = () => {
    const dispatch = useDispatch()
    const select = useSelector(state => state.numofCake)

    const handleIncrement = ()=>{
        dispatch({
            type : "INCREMENT"
        })
    }

    const handleDecremnt =()=>{
        dispatch({
            type:"DECREMENT",
            payload:"Altaf"
        })
    }
    return (
        <div>
            <h1>Welcome To Counter App With Redux</h1>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <span>Count Value : {select}</span>
                <button onClick={handleDecremnt}>Decrement</button>
            </div>
        </div>
    )
}

export default CounterRedux