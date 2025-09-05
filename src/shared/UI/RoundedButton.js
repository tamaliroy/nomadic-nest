// RoundedButton.js
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: ${(props) => props.bgColor || "#54c4a1"};
  color: ${(props) => props.textColor || "white"};
  padding: 10px 16px;
  border: none;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || "#3d8f75"};
  }
`;

const RoundedButton = ({ icon: Icon, text, onClick, ...props }) => {
  return (
    <Button onClick={onClick} {...props}>
      {Icon && <Icon size={18} />}
      {text}
    </Button>
  );
};

export default RoundedButton;
