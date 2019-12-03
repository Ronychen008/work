//这是仓库管理员reducer
import {ADD, CHANGE_VALUE, DELETE, GET_LIST, GET_MY_LIST} from "./actionTypes";

const defaultState={
  inputValue:'',
  data: [],
};
export default (state=defaultState,action)=>{
  if(action.type===CHANGE_VALUE){
    let newState = JSON.parse(JSON.stringify(state));
    newState.inputValue=action.value;
    return newState;
  }
  if(action.type===ADD){
    let newState = JSON.parse(JSON.stringify(state));
    newState.data.push(newState.inputValue);
    newState.inputValue='';
    return newState;
  }
  if(action.type===DELETE){
    let newState = JSON.parse(JSON.stringify(state));
    newState.data.splice(action.index,1);
    return newState;
  }
  // if(action.type===GET_MY_LIST){
  //   let newState = JSON.parse(JSON.stringify(state));
  //   newState.data=action.value;
  //   return newState;
  // }
  if(action.type===GET_LIST){
    let newState = JSON.parse(JSON.stringify(state));
    newState.data=action.data;
    return newState;
  }
  return state;
}