import styled from "styled-components";

const CartElementStyle = styled.nav`

display: flex;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding: 1%;
text-align: left;
border-bottom: 1px solid grey;

img {
    width: 25px;
    height: 25px;
    object-fit: cover;
    margin-right: 2%
}

h1, p {
    font-size: 8px
}

h1 {
    width: 60%
}



`;

export { CartElementStyle };
