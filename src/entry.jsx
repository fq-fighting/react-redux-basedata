import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import thunkMiddleware  from 'redux-thunk'
//引入reducer
import rootReducer from './reducers';
//引入组件
import AntdTable from "./components/antdTable";

//存储state
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware ));
// 配置路由

render(
    <Provider store={store}>
        <AntdTable />
    </Provider>,
    document.getElementById('bodycontext')
);
