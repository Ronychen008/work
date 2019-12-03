import {CHANGE_VALUE,ADD,DELETE,GET_MY_LIST,GET_LIST} from './actionTypes'

export const changeInputAction =(value)=>({
  type:CHANGE_VALUE,
  value,
});
export const addAction =()=>({
  type:ADD,
});
export const deleteAction =(index)=>({
  type:DELETE,
  index,
});
export const getListAction =(data)=>({
    type:GET_LIST,
    data
});

export const getMyListAction =()=>({
  type:GET_MY_LIST,
});