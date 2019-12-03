import { takeEvery,put } from 'redux-saga/effects'
import axios from 'axios';
import {GET_MY_LIST} from './store/actionTypes'
import { getListAction } from './store/createActions'

function* mySaga() {
  yield takeEvery(GET_MY_LIST ,getList)
}

function* getList(){
  const result = yield axios.get('https://www.easy-mock.com/mock/5ddcf1c481327115d2e198c7/getList/getList');
  console.log(result,'123123123123');
  const action =getListAction(result.data.data.list);
  yield put(action);
}

export default mySaga