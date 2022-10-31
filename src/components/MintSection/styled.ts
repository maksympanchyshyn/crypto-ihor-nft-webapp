import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const PixelBtn = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.6rem;
  font-family: inherit;
  position: relative;
  background: #f7d51d;
  box-shadow: inset -4px -4px 0px 0px #e59400;
  padding: 8px 16px;
  margin: 10px;

  &:before {
    top: -6px;
    left: 0;
    border-top: 6px black solid;
    border-bottom: 6px black solid;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }
  &:after {
    left: -6px;
    top: 0;
    border-left: 6px black solid;
    border-right: 6px black solid;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }
  &:hover {
    background: #f2c409;
    box-shadow: inset -6px -6px 0px 0px #e59400;
  }
  &:active {
    box-shadow: inset 4px 4px 0px 0px #e59400;
  }
`;

export const HeaderText = styled.div`
  color: #eee;
  font-size: 2rem;
`;

export const Description = styled.div`
  color: #eee;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin: 24px 0;
  white-space: pre-wrap;
`;

export const MintProgress = styled.div`
  color: #eee;
  font-size: 1.2rem;
  line-height: 1.6rem;
  margin: 16px 0;
  white-space: pre-wrap;
`;

export const MintAmountContainer = styled.div`
  display: flex;
  margin: 12px 0;
`;

export const ChangeAmountBtn = styled(PixelBtn)`
  padding: 4px;
  margin: 0;
`;

export const MintAmountInput = styled.input`
  width: 240px;
  font-family: inherit;
  font-size: 1.2rem;
  color: #000;
  text-align: center;
`;

export const ErrorMessage = styled.div`
  color: #ce3715;
  font-size: 1.25rem;
  margin: 16px;
`;
