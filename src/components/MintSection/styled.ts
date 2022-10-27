import styled from 'styled-components';

export const Container = styled.div`
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
  font-size: 24px;
  font-family: inherit;
  position: relative;
  background: #f7d51d;
  box-shadow: inset -4px -4px 0px 0px #e59400;

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

export const MintBtn = styled(PixelBtn)`
  padding: 8px 16px;
  margin: 10px;
`;

export const HeaderText = styled.div`
  color: #eee;
  font-size: 28px;
`;

export const Description = styled.div`
  color: #eee;
  font-size: 18px;
  line-height: 26px;
  margin: 16px 0;
  white-space: pre-wrap;
`;

export const MintAmountContainer = styled.div`
  display: flex;
  margin: 12px 0;
`;

export const ChangeAmountBtn = styled(PixelBtn)`
  padding: 4px;
`;

export const MintAmountInput = styled.input`
  width: 240px;
`;

export const ErrorMessage = styled.div`
  color: #ce3715;
  font-size: 20px;
`;
