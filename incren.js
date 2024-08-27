import { useState } from "react";

const CounterFunction=()=> {
    const [value,setValue] = useState (0)
    const increnment=()=>{
        setValue(value+1);
    }

    const dec=()=>{
        setValue(value-1);
    }

    return(
        <div>
            <h3>Counter function : {value}</h3>
             <button onClick={dec}>- Decrease</button>
            <button onClick={increnment}>+ increase</button>
        </div>
    );
}
export default CounterFunction;