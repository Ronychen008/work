import React from 'react'
import { Button, Input, List} from 'antd'
import 'antd/dist/antd.css'

// 以下为无状态组件，简洁和提高性能
const AppUi=(props)=>{
  return(
    <div className="App" style={{margin:'50px 500px'}}>
      <div>
        <Input placeholder="请输入..." style={{width:'250px',marginRight:'15px'}} onChange={props.changeValue} value={props.inputValue}/>
        <Button type="primary" style={{marginRight:'5px'}} onClick={props.add}>增加</Button>
      </div>
      <div style={{marginTop:'20px'}}>
        <List
          bordered
          dataSource	={props.data}
          renderItem={(item,index) => (<List.Item onClick={()=>{props.delete(index)}}>{item}</List.Item>)}
          style={{width:'450px'}}
        />
      </div>
    </div>
  )
};

export default AppUi