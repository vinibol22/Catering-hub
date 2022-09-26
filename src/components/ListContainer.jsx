import React from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';

const ListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 1.5rem;
  justify-content:center
`;

function ListContainer(props) {
    return (
        <ListContent>
            {props.buffets.map(buffets => {
                return (
                    <ListItem
                        key={buffets.nome}
                        nome={buffets.nome}
                        culinaria={buffets.culinaria}
                        cidade={buffets.cidade}
                        price={buffets.price}
                        img={buffets.img}
                        url={buffets.url}
                    />
                )
            })}
        </ListContent>
    );
}

export default ListContainer;