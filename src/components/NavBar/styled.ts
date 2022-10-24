import styled from 'styled-components';

export const Container = styled.div`
  height: 4.5rem;
  display: flex;
  align-items: center;
  aling-content: center;
  justify-content: space-between;
  padding: 0 4rem;
`;

export const Logo = styled.div`
  height: 3rem;
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  & > img {
    margin-right: 16px;
  }
`;

export const ConnectBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
  padding: 8px 12px;
  font-family: inherit;
  font-size: 18px;
  color: #fff;
  &:hover {
    color: #efefef;
  }
`;

export const Account = styled.div`
  padding: 8px 12px;
  font-family: inherit;
  font-size: 18px;
  color: #fff;
`;
