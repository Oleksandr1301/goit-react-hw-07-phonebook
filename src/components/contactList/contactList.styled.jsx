import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  width: 400px;
  font-size: 18px;
  margin: 0 auto;
  border: 1px solid #000;
  border-radius: 5px;
  background-color: #e9f3f5;
  padding: 18px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
`;

export const Item = styled.li`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
  font-size: 16px;
`;

export const DelButton = styled.button`
  width: 70px;
  padding: 3px;
  font-size: 14px;
  border-radius: 2px;
  border: 1px solid #000;
  cursor: pointer;
  background-color: #f0b8b4;

  &:hover {
    background-color: #f51105;
    scale: 1.05;
  }
`;
