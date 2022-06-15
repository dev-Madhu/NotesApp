// Style your elements here

import styled from 'styled-components/macro'

export const NoteTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  font-family: 'Roboto';
  line-height: 1.33;
  color: #334155;
  @media screen and (min-width: 768px) {
    line-height: 1.5;
    font-size: 36px;
  }
`
export const NoteText = styled.p`
  font-size: 14px;
  font-weight: 300;
  font-family: 'Roboto';
  color: #aab8c8;
  margin-top: 16px;
  line-height: 24px;
`

export const NoteBox = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  margin-bottom: 16px;
  padding: 24px 16px;
  @media screen and (min-width: 768px) {
    width: 31%;
    min-width: 257px;
    margin: 0px 8px 24px 8px;
  }
`
