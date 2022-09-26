import React, { useState } from "react";
import styled from "styled-components";
import styles from "../components/SearchBar.module.scss";
import { getBuffets } from "../services/BooksService";

const SearchHeader = styled.div`
  margin-top: 4px;
`;

function SearchBar(props) {
  const [search, setSearch] = useState("");
  console.log(search);

  function handleOnSubmit(event) {
    event.preventDefault();
    const buffets = getBuffets();
    const results = buffets.filter(
      (buffet) =>
        buffet.cidade.toLowerCase().indexOf(search) !== -1 ||
        buffet.nome.toLowerCase().indexOf(search) !== -1||
        buffet.culinaria.toLowerCase().indexOf(search) !== -1
    );
    props.setBuffets(results);
  }

  function handleSearchChange(event) {
    setSearch(event.target.value.toLowerCase());
  }

  return (
    <SearchHeader>
      
    
      <form action=""  onSubmit={handleOnSubmit}>
        <div className={styles.caixaBuffet}>
        <div className={styles.form__group}>
                
            <input
            type="text"
            className={styles.form__input}
            id="name"
            placeholder="Procure um buffet"
            required=""
              onChange={handleSearchChange}
              
          />



            



        </div>


          </div>
       
      </form>
    </SearchHeader>
  );
}

export default SearchBar;
