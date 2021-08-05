import React from 'react'
import mockHooks from '../utils/mockHooks'

const {useState} = mockHooks;

function UseStateComponent(){
    let [num, changeNum] = useState({value: 1000});

    function click(e){
        let type = e.target.innerText;
        setInterval(()=>{
            console.log('num...', num);
        }, 1000);
        if (type === '+'){
            changeNum(num=>{return {value: ++num.value}});
        }else{
            changeNum({value: num.value-1});
        }
    }

    return <div>
        <button onClick={click}>+</button>
        <span>{num.value}</span>
        <button onClick={click}>-</button>
    </div>   
}

export default UseStateComponent