import styled from "styled-components";

const StyledDropDown = styled.form`
  top: ${(props) => (props.y ? `${props.y - 50}px` : "0px")};
  left: ${(props) => (props.x ? `${props.x - 50}px` : "0px")};
  position: absolute;
  width: auto;
  height: 1.2rem;
  color: white;
  background: rgba(10, 10, 10, 0.1);
  border: none;
  .selected {
    display: block;
    color: white;
  }
  .unselected {
    display: none;
  }
  &&:first-child {
    color: inherit;
  }
`;

const DropDownResult = styled.div`
  top: ${(props) => (props.y ? `${props.y - 50}px` : "0px")};
  left: ${(props) => (props.x ? `${props.x - 50}px` : "0px")};
  position: absolute;
  width: auto;
  color: yellow;
`;

export { StyledDropDown, DropDownResult };
