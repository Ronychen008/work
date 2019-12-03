import React from 'react';
import store from './store/index.js'
import AppUi from "./AppUi";
import { changeInputAction,addAction,deleteAction,getMyListAction} from './store/createActions'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state=store.getState();//通过getState方法拿到store中的状态树
    store.subscribe(this.storeChange)
  }

  componentDidMount() {
    const action = getMyListAction();
    store.dispatch(action);
    console.log(action,'1121212')
  };

  changeValue=(e)=>{
    const action=changeInputAction(e.target.value)
    store.dispatch(action);
  };

  add=()=>{
    const action=addAction();
    store.dispatch(action)
  };

  storeChange=()=>{
    this.setState(store.getState())
  };

  delete=(index)=>{
    const action =deleteAction(index);
    store.dispatch(action)
  };

  render(){
    return(
      <AppUi
          data={this.state.data}
          changeValue={this.changeValue}
          inputValue={this.state.inputValue}
          add={this.add}
          delete={this.delete}
      />
    )
  }
}

export default App;
