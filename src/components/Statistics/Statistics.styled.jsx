import styled from '@emotion/styled';

export const SectionStat = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  background-color: #fffff0;
`;

export const StatTitle = styled.h2`
  padding: 60px 0;
  color: #2f4f4f;
  font-size: 28px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 5px 5px;
  color: #fff;
  padding: 0px;
`;

export const StatListItem = styled.li`
  width: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 15px;

&:nth-of-type(1) {
    background-color: #4682b4;
    border-radius: 0 0 0 5px;
  }
  &:nth-of-type(2) {
    background-color: #5f9ea0;
  }
  &:nth-of-type(3) {
    background-color: #7b68ee;
  }
  &:nth-of-type(4) {
    background-color: #48d1cc;
  }
  &:nth-of-type(5) {
    background-color: #6495ed;
    border-radius: 0 0 5px 0;
  }
`;

export const StatLabel = styled.span`
  font-size: 15px;
  color: #faf0e6;
`;

export const StatPercent = styled.span`
  font-size: 25px;
  font-weight: 700;
`;
