import { styled } from 'styled-components';
import * as sVar from "./defaultVars"

export function Button({children, handler, configStyle, IconComponent, iconSize="sm"}) {
    return (
        <DefaultBtnStyle onClick={handler ? handler : null} styles={configStyle}>
            {children}
            { (IconComponent) && <IconComponent size={iconSize}/>}
        </DefaultBtnStyle>
    )
}

// styles
const DefaultBtnStyle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    padding: 8px 12px;
    cursor: pointer;
    &:active {
        box-shadow: 100px 100px 40px rgba(0, 0, 0, 0.1) inset;
    }

    ${props => props.styles}
`

export const largePrimaryBtnStyle = {
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    border: "3px solid " + sVar.darkgreen40
}
export const midPrimaryBtnStyle = {
    width: "150px",
    height: "45px",
    borderRadius: "6px",
    color: sVar.darkgreen100,
    backgroundColor: sVar.darkgreen40
}
export const smallPrimaryBtnStyle = {
    width: "100px",
    height: "40px",
    borderRadius: "4px",
    color: sVar.darkgreen100,
    backgroundColor: sVar.darkgreen40
}
export const largeNegativeBtnStyle = {
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    border: "3px solid " + sVar.coralred60
}
export const largeModalBtnStyle = {
    width: "200px",
    height: "50px",
    fontWeight: "bold",
    backgroundColor: "transparent",
    border: "3px solid " + sVar.coralred60,
    color: sVar.coralred100
}
export const midNegativeBtnStyle = {
    width: "150px",
    height: "45px",
    borderRadius: "6px",
    color: sVar.coralred100,
    backgroundColor: sVar.coralred40
}
export const smallNegativeBtnStyle = {
    width: "100px",
    height: "40px",
    borderRadius: "4px",
    color: sVar.coralred100,
    backgroundColor: sVar.coralred40
}