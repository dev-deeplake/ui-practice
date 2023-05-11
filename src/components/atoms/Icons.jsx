import { styled } from 'styled-components'

const iconSizeCondition = (props) => {
    switch(props.size) {
        case "min" : return "10px";
        case "sm" : return "20px";
        case "md" : return "35px";
        case "lg" : return "50px";
        default: return "20px";
    } 
}

export const SizedIcon = styled.svg`
    margin-left: 4px;
    width: ${props => iconSizeCondition(props)};
    height: ${props => iconSizeCondition(props)};
`

export const IconNotice = ({size}) => {
    const NoticeWrap = styled.div`
        position: relative;
        width: ${props => iconSizeCondition(props)};
        height: ${props => iconSizeCondition(props)};
    `
    const NoticeCircle = styled.div`
        width: ${props => {
            switch(props.size) {
                case "min" : return `${10 * 0.3}px`;
                case "sm" : return `${20 * 0.3}px`;
                case "md" : return `${35 * 0.3}px`;
                case "lg" : return `${50 * 0.3}px`;
                default: return `${20 * 0.2}px`;
            } 
            }
        };
        height: ${props => {
            switch(props.size) {
                case "min" : return `${10 * 0.3}px`;
                case "sm" : return `${20 * 0.3}px`;
                case "md" : return `${35 * 0.3}px`;
                case "lg" : return `${50 * 0.3}px`;
                default: return `${20 * 0.3}px`;
            } 
            }
        };
        border-radius: 50%;
        background-color: red;
        position: absolute;
        left: 85%;
        top: 10%;
    `
    return (
        <NoticeWrap size={size}>
            <SizedIcon size={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z"/>
            </SizedIcon>
            <NoticeCircle size={size}/>
        </NoticeWrap>
    )    
}

export const IconBracket = ({size}) => {
    return (
        <SizedIcon size={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
        </SizedIcon>    
    )
}

export const IconCaretDown = ({size}) => {
    return (
        <SizedIcon size={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/>
        </SizedIcon>
    )
}

export const IconCaretUp = ({size}) => {
    return (
        <SizedIcon size={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
        </SizedIcon>
    )
}




