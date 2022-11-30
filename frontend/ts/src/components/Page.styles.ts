import styled from 'styled-components';

export const Container = styled.div`
  border-style: ridge;
  box-shadow: 1px 1px 1px 1px;
  width: 50rem;
`

export const Step = styled.div`
  margin: 1rem;
  padding: 1rem 0.5rem;
  border-style: ridge;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const Text = styled.p<{
  size?:string;
}>`
  font-size: ${p => p.size || 1}rem;
`

export const Button = styled.button<{
}>`
  border-radius: 2px;
  font-size: 1rem;
`

export const Input = styled.input`
  margin: 0.3rem 0 0 0;
  
 
`