import styled from 'styled-components'
import { colors } from '../theme'

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: relative;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width 1000px;
  width: 90%;
  padding: ${props => props.padding || '0'};
`

export const DogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 4rem 0;
  flex-wrap: wrap;
`

export const DogImage = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: cover;
  border-radius: 50%;
`

export const DogInfoWrapper = styled.div`
  display: grid;
`

export const DogInfoSummary = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
`

export const ModalBackground = styled.div`
  background-color: rgba(0,0,0,0.8);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
`

export const DogInfoImage = styled.img`
  object-fit: cover;
  width: 100%;
`

export const Button = styled.button`
  border-radius: 5px;
  box-shadow: 0px 10px 100px rgba(0,0,0,0.2);
  display: block;
  font-size: 3rem;
  font-weight: 800;
  margin: 1rem auto 5rem;
  padding: 2rem;
  border: 1px solid rgba(249, 120, 5, 0.2);
  transform: rotate(-1deg);
  transition: 0.2s ease all;

  &:hover {
    transform: scale(1.1);
  }
`

export const CloseButton = styled.button`
  font-size: 2rem;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  line-height: 0;
  border: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;

  &:hover {
    background: #f5f5f5;
  }
`

export const ModalWrapper = styled.div`
  border-radius: 5px;
  box-shadow: 0px 10px 100px rgba(0,0,0,0.2);
  max-width: 500px;
  width: 90%;
  position: relative;
  padding: 2rem;
  background-color: white;
`

export const Strong = styled.strong`
  display: inline-block;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    background-color: rgba(249, 120, 5, 0.2);
    top: 75%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: rotate(-3deg) scaleY(1.2);
  }
`
