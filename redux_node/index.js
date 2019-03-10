const redux = require("redux");
const CHANGE_NAME="CHANGE_NAME";

const initStat={
    name:"Ivan",
    age:41
}

const reducer=(state=initStat,action)=>{
    switch(action.type){
        case CHANGE_NAME:
        return{
            name:action.payload,
            age:state.age
        }
        case 'CHANGE_AGE':
        return{
            name:state.name,
            age:state.age+1
        }
        default:
        return state;
    }
}

const store=redux.createStore(reducer);
// console.log(redux)
// console.log(store);
console.log(store.getState())
store.dispatch({type:CHANGE_NAME,payload:"Boris"});
console.log(store.getState());
store.dispatch({type:"CHANGE_AGE"})
console.log(store.getState());