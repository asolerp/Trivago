import styled from "styled-components";

const NavBarStyle = styled.nav`
  display: flex;
  z-index:1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 99.2vw;
  height: 8vh;
  border-bottom: 1px solid #cecece;
  background: white;
  position: fixed;
  top: 0;
  box-sizing: border-box;
  padding: 0 2%;

  .cart {
    color: #930259;
  }

  h1 {
      font-size: 15px;
      color: #930259;
  }

`;

export { NavBarStyle };
