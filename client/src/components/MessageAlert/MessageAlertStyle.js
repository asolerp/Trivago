import styled from "styled-components";

const MessageAlertStyle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  text-align: center;
  top: 35vh;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 30vw;
  height: 34vh;
  background: #930259;
  padding: 2%;
  color: white;
  box-shadow: 0px 0px 5px #6b0040;

  .close {
    position: absolute;
    right: 5px;
    top: 5px;
  }

  span {
    font-size: 20px;
  }
  h1 {
    font-size: 20px;
    font-family: "Roboto", sans-serif;
  }
`;

export { MessageAlertStyle };
