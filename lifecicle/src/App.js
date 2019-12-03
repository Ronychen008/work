import React from 'react';

 export default class App extends React.Component{
   state={
     opacity:1
   };
   componentDidMount() {
     setInterval(()=>{this.setState({
       opacity:this.state.opacity-0.1
     });
     if(this.state.opacity<0.1){
       this.state.opacity=1
     }
     },500)
   }
   render(){
     return(
       <div style={{opacity:this.state.opacity, fontSize:50}}>
         Hello{this.props.name}

       </div>
     )
   }
 }
