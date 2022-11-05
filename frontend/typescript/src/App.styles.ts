import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin: auto;
  display: flex;
  flex-direction: column;
  height: auto; 
  width: auto;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 2rem;
`

export const Text = styled.p<{
  size?:string;
}>`
  font-size: ${p => p.size || 2}rem;
`
