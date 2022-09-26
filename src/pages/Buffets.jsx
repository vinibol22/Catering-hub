import { Container } from "react-bootstrap";
import { getBuffets } from "../services/BooksService";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import ListContainer from "../components/ListContainer";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SectionPageOne } from "../components/SectionPageOne";  
import styled from "styled-components";


export function Buffets() {
  const [buffets, setBuffets] = useState([]);

  useEffect(() => {
    setBuffets(getBuffets());
  }, []);

  return (
    <>
      <Header />
      <SectionPageOne />
 
      <Container>
        <SearchBar setBuffets={setBuffets} />
        <ListContainer buffets={buffets} />
      </Container>
      <Footer />
    </>
  );
}
