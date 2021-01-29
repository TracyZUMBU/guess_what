import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, className, type } = props;

  const Button = styled.button`
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

  return (
    <>
      <Button type={type} className={"btn  btn--" + className}>{text}</Button>
    </>
  );
};

export default Button;
