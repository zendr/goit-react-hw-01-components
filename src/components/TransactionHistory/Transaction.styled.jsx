import styled from '@emotion/styled';

export const TransTable = styled.table`
  border-spacing: 1px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
`;

export const TransTableTr = styled.tr`
  &:nth-of-type(1n) {
    background-color: #e6e6fa;
  }
  &:nth-of-type(2n) {
    background-color: #f8f8ff;
  }
`;

export const TransTableTh = styled.th`
  padding: 10px 100px;

  color: #fffafa;
  background-color: #00bfff;
  text-transform: uppercase;
`;

export const TransTableTd = styled.td`
  padding-top: 10px;
  padding-bottom: 10px;

  color: #708090;
  &:nth-of-type(1) {
    padding-left: 85px;
    text-transform: capitalize;
  }
  &:nth-of-type(2) {
    border: 1px;
    text-align: center;
  }
  &:nth-of-type(3) {
    border: 1px;
    text-align: center;
  }
`;