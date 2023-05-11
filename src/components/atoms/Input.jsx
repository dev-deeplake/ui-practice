import { styled } from 'styled-components';
import * as sVar from "./defaultVars"

const DefaultInputStyle = styled.input`
    width: 200px;
    height: 30px;
    border: 1px solid ${sVar.black60};
    border-radius: 6px;
    margin: 0px 10px;
    padding-left: 5px;
    
    &:focus {
        outline: 2px solid ${sVar.darkgreen40};
        border: none;
        box-shadow: 0 0 5px ${sVar.black60};
        transition: outline 0.4s;
    }
`

function Input ({ type, id, value, state, handler, ...props}) {
    return (
       <>
            <label htmlFor={id}>{props.label}</label>
            <DefaultInputStyle id={id} type={type} value={state} onChange={handler} autoComplete="off" {...!!(props.required) && props.required} />
        </>     
    )

}

export default Input