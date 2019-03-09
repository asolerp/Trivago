import styled from "styled-components";

const WineCardStyle = styled.div`
  /* width: 100vw; */
  height: 100%;
  border-radius: 2px;
  padding: 0.5% 0.5%;
  margin: 0.5% 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 0px 5px grey;
  font-family: "Roboto", sans-serif;

  h1,
  h2,
  p {
    margin: 0;
  }

  .wineBlock {
    align-self: flex-start;
    text-align: left;
  }

  .price {
    font-size: 12px;
    color: #930259;
    font-weight: bold;
  }

  .date {
    font-size: 10px;
    color: #383838;
  }

  .title {
    font-size: 13px;
    margin-top: 2px;
    color: #383838;
  }

  .dateSection {
    display: flex;
    align-items: center;
    width: 100%;
    height: 20px;
  }

  .imageContainer {
    border-right: 1px solid #d8d8d8;
    width: 170px;
    height: 105px;
  }

  .image {
    width: 100%;
    height: 100%;
    padding: 0 5% 0 0;
    object-fit: cover;
    margin-right: 3%;
  }

  .infoSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-left: 2%;
    width: 100%;
    height: 100px;

    p,
    h2 {
      align-self: flex-start;
    }

    p {
      font-size: 10px;
      margin-bottom: 2px;
      color: #930259;
    }
  }

  .priceContainer {
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    /* align-items: center; */
    width: 25%;
    height: 105px;
    background: white;
    color: white;
    border-left: 1px solid #e5e5e5;
  }

  .subPriceContainer {
    height: 52.5px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }

  .addButton {
    width: 93%;
    background: #930259;
    border: 1px solid #930259;
    border-radius: 1px;
    padding: 2%;
    margin-bottom: 2px;
    color: white;
    font-size: 10px;
  }

  .addButton:hover {
    background: white;
    border-radius: 1px;
    color: #930259;
    transition: 0.5s;
  }

  
`;

export { WineCardStyle };
