import React from 'react'
import "./Main.css"
import * as icon from "../atoms/Icons"
// import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Select from '../molecules/Select';
import { useState } from 'react';
import { Button, largeModalBtnStyle,largePrimaryBtnStyle, midPrimaryBtnStyle, smallPrimaryBtnStyle, largeNegativeBtnStyle, midNegativeBtnStyle, smallNegativeBtnStyle} from "../atoms/Button"
import { ModalBtnClose, ModalOutsideClose } from '../atoms/Modal';

function Main() {
    /* global BigInt */
    // states
    const dataList = ["리액트", "자바", "스프링", "리액트 네이티브"]
    const NAME_INIT = ""
    const PRICE_INIT = 0
    const MODAL_INIT = false
    const SELECT_INIT = {
        isOpen: false,
        selected: "옵션을 선택해 주세요!"
    }
    const [name, setName] = useState(NAME_INIT)
    const [price, setPrice] = useState(PRICE_INIT)
    const [smModalState, setSmModalState] = useState(MODAL_INIT)
    const [bigModalState, setBigModalState] = useState(MODAL_INIT)
    const [selectState01, setSelectState01] = useState({...SELECT_INIT})
    const [selectState02, setSelectState02] = useState({...SELECT_INIT})


    // handlers
    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const numberChangeHandler = (event) => {
        let pureNum = event.target.value.replace(/\D/g, "")
        setPrice(BigInt(pureNum).toLocaleString())
    }
    const onSubmitHandler = (event) => {
        if (name !== NAME_INIT && price !== PRICE_INIT) {
            event.preventDefault();
            alert(`name: ${name}\nprice: ${price.replace(/,/g, "")}`)
        } else {
            alert("이름과 가격을 모두 입력해주세요.")
        }
    }
    const modalOpenHandler1 = () => {
        setSmModalState(!smModalState)
    }
    const modalOpenHandler2 = () => {
        setBigModalState(!bigModalState)
    }

  return (
    <div>
        <div className="buttons">
            <h1>Buttons</h1>
            <div className="primary">
                <Button configStyle={largePrimaryBtnStyle} IconComponent={icon.IconBracket} iconSize={"min"} handler={() => alert("버튼을 만들어 보세요.")}>Large Primary Button</Button>
                <Button configStyle={midPrimaryBtnStyle}>Medium</Button>
                <Button configStyle={smallPrimaryBtnStyle}>small</Button>
            </div>
            <div className="negative">
                <Button configStyle={largeNegativeBtnStyle} IconComponent={icon.IconNotice} handler={() => prompt("어렵나요?")}>Large Negative Button</Button>
                <Button configStyle={midNegativeBtnStyle}>Medium</Button>
                <Button configStyle={smallNegativeBtnStyle}>small</Button>
            </div>
        </div>
        <div className="inputs">
            <h1>Inputs</h1>
            <form>
                <Input id="name" type="text" state={name} handler={nameChangeHandler} required label="이름"/>
                <Input id="price" type="text" state={price} handler={numberChangeHandler} required label="가격" />
                <span><Button configStyle={smallPrimaryBtnStyle} handler={onSubmitHandler}>저장</Button></span>
            </form>
        </div>
        <div className="modals">
            <h1>Modals</h1>
            <div className="row">
                <Button name="btnClose" configStyle={smallPrimaryBtnStyle} handler={modalOpenHandler1}>open modal</Button>
                {smModalState && <ModalBtnClose handler={modalOpenHandler1}>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</ModalBtnClose>}
                <Button name="outClose" configStyle={largeModalBtnStyle} handler={modalOpenHandler2}>open modal</Button>
                {bigModalState && <ModalOutsideClose handler={modalOpenHandler2}>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</ModalOutsideClose>}
            </div>
        </div>
        <div className="selects">
            <h1>Selects</h1>
            <div className="selectContainer">
                <Select state={selectState01} setter={setSelectState01} dataList={dataList} usePortal={true}/>
                <Select state={selectState02} setter={setSelectState02} dataList={dataList} />
            </div>
        </div>
    </div>
  )
}

export default Main