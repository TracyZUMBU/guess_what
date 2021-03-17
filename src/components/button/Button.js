import React from "react";
import styled from "styled-components";

const Btn = styled.button`
color: var(--color-pink-primary);
&.btn--primary {
  background-color: var(--color-pink-primary);
  color: var(--color-white);
  border-color: var(--color-pink-primary);
}
&.btn--secondary {
  background-color: var(--color-white);
  border-color :  var(--color-white);
  color: var(--color-pink-primary);
}
`;
const Button = (props) => {
  const { text, className, type } = props;


  return (
    <>
      <Btn type={type} className={"btn  btn--" + className}>{text}</Btn>
    </>
  );
};

export default Button;
