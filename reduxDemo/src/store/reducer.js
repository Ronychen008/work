
const defaultState={
  inputValue:'哈哈哈是的我',
  list:[]
};

export default (state=defaultState,action)=>{
  if (action.type==='add'){
    let newState =JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue='';
    return newState;
  }
  if (action.type==='change'){
    let newState =JSON.parse(JSON.stringify(state));
    newState.inputValue= action.value;
    return newState;
  }
  return state;
}