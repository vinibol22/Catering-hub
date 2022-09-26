import React from "react";
import styled from "styled-components";
import styles from "../components/ListItem.module.scss";
import { ShoppingBag } from "phosphor-react";
const ItemContainer = styled.div`
  border-radius: 4px;
  background-color: #b309094b;
  height: auto;
  width: auto;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
`;

const Thumbnail = styled.img`
  width: 20rem;
  height: 15rem;
  border: 0;
  vertical-align: middle;
  float: left;
  margin-right: 10px;
`;

const TitlePane = styled.div`
  font-size: 1.5rem;
  font-family: "Dancing Script", cursive;
  margin-bottom: 5px;
`;

const PricePane = styled.div`
  margin-bottom: 5px;
`;

const ItemLink = styled.a`
  text-decoration: none;
`;

function ListItem(props) {
  return (
    <ItemLink href={props.url} title="Clique para comprar">
      <ItemContainer>
        <Thumbnail src={props.img} />
        <TitlePane>
          {props.nome} <div>Especialidade-> {props.culinaria} </div>cidade->
          {props.cidade}
        </TitlePane>

        <PricePane>R$ {props.price}</PricePane>
          <div className={styles.contratarButton}>
        <button ><ShoppingBag size={25} /> Contratar</button></div>
      </ItemContainer>
    </ItemLink>
  );
}

export default ListItem;
