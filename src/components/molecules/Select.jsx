import { styled } from 'styled-components';
import { IconCaretDown, IconCaretUp } from '../atoms/Icons';
import * as sVar from "../atoms/defaultVars";
import React from 'react';

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
    border-radius: 0 0 6px 6px;
    border: 2px solid #eee;
    margin-top: 4px;
    background-color: white;

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


export function Select({state, setter, dataList, usePortal}) {
    const openSetter = () => {
        setter({...state, isOpen:(!state.isOpen)})
    }
    const selectSetter = (event) => {
        setter({selected: event.target.text, isOpen:(!state.isOpen)})
    }
    const component = (
        <SelectWrap>
            <SelectStyle onClick={openSetter}>
                {state.selected}
                {state.isOpen ? <IconCaretUp /> : <IconCaretDown />}
            </SelectStyle>
                { state.isOpen &&
                    <SelectOptions>
                        {dataList.map(data => <option onClick={selectSetter}>{data}</option>)}
                    </SelectOptions>
                }
        </SelectWrap>
    )
    return component;
}

export default Select