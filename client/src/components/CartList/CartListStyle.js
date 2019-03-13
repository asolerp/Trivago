import styled from "styled-components";

const CartListStyle = styled.div`
  position: fixed;
  top: 8vh;
  right: 2px;
  width: 20vw;
  background: white;
  box-shadow: 0px 0px 1px grey;

  h1 {
    font-size: 12px;
    font-family: "Roboto", sans-serif;
  }

  .totalPrice {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    background: #930259;
    color: white;
    margin: 0;
    height: 30px;
}
`;

export { CartListStyle };
