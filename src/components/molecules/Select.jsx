import { styled } from 'styled-components';
import { IconCaretDown, IconCaretUp } from '../atoms/Icons';
import * as sVar from "../atoms/defaultVars";
import React from 'react';
import ReactDOM from 'react-dom'
import { useRef, useEffect, useState } from 'react';

const SelectWrap = styled.div`
    display: flex;
    flex-direction: column;
`


const SelectStyle = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: 40px;
    border-radius: 6px;
    border: 2px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 10px;
    justify-content: space-between;
`

const SelectOptions = styled.div`
    box-sizing: border-box;
    width: 300px;
    height: auto;
    border-radius: 6px;
    border: 2px solid #eee;
    margin-top: 4px;
    background-color: white;
    position: absolute;
    bottom: ${props => props.selecttop - 165}px;
    margin: ${props => props.isPortal ? `0 0 0 22px` : `40px 0 0 0`};

    > option {
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        &:hover {
            transition: background-color 0.4s;
            background-color: ${sVar.black20};
        }
    }
`

export const SelectPortal = ({ children }) => {
    const portalRoot = document.getElementById("portal");

    return ReactDOM.createPortal(children, portalRoot)
}


export function Select({state, setter, dataList, isPortal}) {
    const selectRef = useRef(null);
    const [selecttop, setSelectTop] = useState(0)

    useEffect(() => {
        const node = ReactDOM.findDOMNode(selectRef.current);
        const rect = Math.floor(node.getBoundingClientRect().bottom)
        setSelectTop(rect)
    }, [])

    const openSetter = () => {
        setter({...state, isOpen:(!state.isOpen)})
    }
    const selectSetter = (event) => {
        setter({selected: event.target.text, isOpen:(!state.isOpen)})
    }
    const component = (
        <SelectWrap>
            <SelectStyle id="position-element" ref={selectRef} onClick={openSetter}>
                {state.selected}
                {state.isOpen ? <IconCaretUp /> : <IconCaretDown />}
            </SelectStyle>
            {   
                (isPortal && state.isOpen) && 
                    (<SelectPortal>  
                        <SelectOptions isPortal={isPortal} selecttop={selecttop}>
                            {dataList.map(data => <option onClick={selectSetter}>{data}</option>)}
                        </SelectOptions>
                    </SelectPortal>)
            }
            {
                (!isPortal && state.isOpen) &&
                    (<SelectOptions isPortal={isPortal}>
                        {dataList.map(data => <option onClick={selectSetter}>{data}</option>)}
                    </SelectOptions>)
            }
        </SelectWrap>
    )
    return component;
}

export default Select