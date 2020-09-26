import React from "react";
import styled from "styled-components";

function Cell({ num, handleClick }) {
  return (
    <Container onClick={() => handleClick(num)}>
      {num !== 0 ? num : null}
    </Container>
  );
}

const Container = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
`;

export default Cell;