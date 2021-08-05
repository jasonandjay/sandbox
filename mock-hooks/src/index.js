import React from 'react';
import ReactDOM from 'react-dom';
import mockHooks from './utils/mockHooks';

// 挂在根组件
import App from './views/useEffect'

function RenderUI(){
    ReactDOM.render(<App />, document.getElementById('root'));
}

RenderUI();

// 在Tick上挂在render方法
mockHooks.Tick.render = RenderUI;

// 触发组件更新的几种方式：setState, forceUpdate, render, dispatchAction, unstable_batchedUpdates