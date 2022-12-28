import styled from "styled-components";

const StyledDropDown = styled.form`
    top: ${props => props.y ? `${props.y- 50}px` : "0px"};
    left: ${props => props.x ? `${props.x- 50}px` : "0px"};
    position: absolute;
    width: auto;
    height: 1.2rem;
    color: white;
    background: rgba(10,10,10,.1);
    border: none;
    .selected {
        display: block;
        color: white;
    }
    .unselected {
        display: none;
    }
    &&:first-child{
        color: inherit;

    }
`;

export default StyledDropDown