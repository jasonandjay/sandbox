import React,{useState, useMemo, useCallback} from 'react';

// const MemoChild = React.memo(Child, (prev, next)=>{
//     console.log('prev...', prev.info, next.info, prev.info===next.info, prev.cb === next.cb);
//     // return +new Date()%2
//     return true;
// })

const MemoChild = React.memo(Child)
function Parent(){
    const [count, setCount] = useState(0);

    const [state, setState] = useState({})
    
    function click(e){
        if (e.target.innerText === '+'){
            setCount(count+1);
        }else{
            setCount(count-1);
        }
    }

    return <div>
        <MemoChild info={useMemo(()=>{return {state}}, [])} cb={useCallback(()=>e=>console.log(e), [])}/>
        {/* {React.createElement('p', {}, new Date()+'')} */}
        <button onClick={click}>+</button>
        <span>{count}</span>
        <button onClick={click}>-</button>
    </div>
}
export default Parent;


function Child(){
    return <p>{+new Date()}</p>
}

// const Child = React.createElement('p', {}, new Date()+'')