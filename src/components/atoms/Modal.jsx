import { styled } from 'styled-components'
import * as sVar from "./defaultVars"
import { Button, smallPrimaryBtnStyle, smallNegativeBtnStyle} from './Button'
import { useState } from 'react'

const ModalBackgroundStyle = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${sVar.black40};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`
const ModalStyle = styled.div`
    background-color: white;
    position: relative;
    width: 400px;
    height: 300px;
    margin: 100px auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    border-radius: 6px;
    z-index: 2;

    > div {
        margin-top: 10px;
        display: flex;
        gap: 5px;
    }
`
const MsgArea = styled.p`
    box-sizing: border-box;
    padding: 20px 10px;
    width: 90%;
    height: 80%;
    line-height: 1.6;
`

export function ModalBtnClose({handler, children}) {
    return (
        <ModalBackgroundStyle>
            <ModalStyle>
                <MsgArea>{children}</MsgArea>
                <div>
                    <Button configStyle={smallPrimaryBtnStyle} handler={handler}>닫기</Button>
                    <Button configStyle={smallNegativeBtnStyle}>확인</Button>
                </div>
            </ModalStyle>
        </ModalBackgroundStyle>
    )
}

export function ModalOutsideClose({handler, children}) {
    return (
        <ModalBackgroundStyle onClick={handler}>
            <ModalStyle>
                <MsgArea>{children}</MsgArea>
                <div>
                    <Button configStyle={smallPrimaryBtnStyle} handler={handler}>닫기</Button>
                </div>
            </ModalStyle>
        </ModalBackgroundStyle>
    )
}

