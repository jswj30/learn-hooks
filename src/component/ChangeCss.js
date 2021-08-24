import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const ChangeCss = () => {
  const name = ['ABC', 'DEF'];
  const [value, setValue] = useState("");

  return (
    <Container>
      <h1>테스트</h1>
      <hr />
      <Navi>
        {name.map((val, idx) => 
          <Menu 
            key={idx}
            onClick={() => setValue(idx)}
            index={idx} 
            value={value}
          >{val}</Menu>
        )}
      </Navi>
    </Container>
  )
}

export default ChangeCss;

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 30px;
`

const Navi = styled.div`
  display: flex;
  justify-content: center;
  font-weight: bold;
`

const Menu = styled.div`
  margin: 0 30px;
  font-size: 30px;
  /* color: ${props => props.test === 1 ? 'blue' : 'red'} */
  ${({index, value}) => index === value && css`
    color: red;
  `}
`