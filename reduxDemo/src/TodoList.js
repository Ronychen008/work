import React from 'react';
import {connect} from 'react-redux'

class TodoList extends React.Component {

  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInput}/>
          <button onClick={this.props.add}>增加</button>
        </div>
        <ul>
          {
            this.props.list.map((item,index)=>{
              return(
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default connect((state)=>{
  return {
    inputValue:state.inputValue,
    list:state.list
  }
},(dispatch)=>{
  return {
    add(){
      let action ={
        type:'add'
      };
      dispatch(action);
    },
    changeInput(e){
      let action={
        type:'change',
        value:e.target.value
      };
      dispatch(action)
    }
  }
})(TodoList);
