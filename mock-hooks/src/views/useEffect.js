import React, { useState, useEffect, useLayoutEffect } from 'react';

// import React from 'react'
// import hooks from '../utils/mockHooks'
// let {useState, useEffect} = hooks; 


export default () => {
    let [count, setCount] = useState(1000)
    // count点击事件
    let changeCount = type => {
        type==='+'?setCount(count+1): setCount(count-1)
    }

    useEffect(()=>{
        alert(1);
        setTimeout(()=>{

        }, 1000);
        return function(){

        }
    }, [count]);


    return <div>
        <button onClick={() => changeCount('+')}>+</button>
        <p>{count}</p>
        <button onClick={() => changeCount('-')}>-</button>
    </div>
}