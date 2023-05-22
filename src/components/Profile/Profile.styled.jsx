import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  margin-bottom: 50px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  background-color: rgba(242, 230, 0, 0.07)
;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.img`
  height: 150px;
  border-radius: 50%;
  background-color: #afeeee;
  margin-bottom: 15px;
`;

export const UserName = styled.p`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const UserTag = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
  color: #778899;
`;

export const UserLocation = styled.p`
  font-size: 20px;
  margin-bottom: 15px;
  color: #778899;
`;

export const StatsList = styled.ul`
  display: flex;
  background-color: #87ceeb;
  border-radius: 0 0 5px 5px;
  padding: 0px;
`;

export const StatsItem = styled.li`
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px 0px;

  &:nth-of-type(1) {
    border-radius: 0 0 0 5px;
  }
  &:nth-of-type(3) {
    border-radius: 0 0 5px 0;
  }
`;

export const LabelStats = styled.span`
  color: #2f4f4f;
  font-size: 18px;
`;

export const QuantityStats = styled.span`
  font-weight: 700;
`;
