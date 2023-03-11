import {increment,Decremnt} from './cakeAction'

// export const incremnt = ()=>{
//     type  : INCREMENT
// }
const initialState = {
    numofCake : 10
}

const CakeReducer = (state = initialState,action)=>{
    switch (action.type) {
        case 'INCREMENT':
          return {
            ...state,
            numofCake : state.numofCake + 1
          }
          case "DECREMENT":
            return{
                ...state,
                numofCake: state.numofCake - 1
            }
          default:
            return state
    }
}

export default CakeReducer