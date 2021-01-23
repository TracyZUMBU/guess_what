import React from "react";
import styled from "styled-components";

export const Button = (props) => {
  const { text, className } = props;

  const Button = styled.button`
    color: var(--color-pink-primary);
    &.primary{
        background-color: var(--color-pink-primary);
        color:var(--color-white)
    }
    &.secondary{
        background-color: var(--color-white);
        color:var(--color-pink-primary)
    }
  `;

  return (
    <div className="">
      <Button className={className}>{text}</Button>
    </div>
  );
};
