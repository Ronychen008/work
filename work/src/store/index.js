//这是仓库store，所有的数据都放在这里进行储存和处理
import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'//把仓管员引入到仓库中
import mySagas from '../saga'
import createSagaMiddleware from 'redux-saga'  //引出该函数用于创建saga中间件的

const sagaMiddleware = createSagaMiddleware(mySagas);

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :compose;
const enhancer =composeEnhancers(applyMiddleware(sagaMiddleware));
//后面的东西加上是为了可以使用redux调试工具
const store =createStore(reducer,enhancer);

sagaMiddleware.run(mySagas);
export default store;