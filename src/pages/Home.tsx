import { Button, TextInput } from "@barbara-ignite-ui/react"
import { FormEvent, useState } from "react"
import { Navigate } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"
import { Body, Container, ContainerButton } from "../styles/Home.styles"
import ListCompanies from "./ListCompanies"

export function Search () {

  const [goToNewCompanies, setGoToNewCompanies] = useState(false)
  function registerNewCompanies() {
    setGoToNewCompanies(true)
  }

  const [searchCompanies, setSearchCompanies] = useState('')
  console.log(searchCompanies);


  function handleSearchCompanies(event: FormEvent) {
    event.preventDefault()

    setSearchCompanies('');
  }

  return (
    <Body>
     <Header />

      <Container>
      <form onSubmit={handleSearchCompanies}>
        <TextInput 
          value={searchCompanies}
          onChange={value => setSearchCompanies(value.target.value)}
          type="text" 
          placeholder="Consulte as empresas cadastradas" 
          required
        />
      </form>
      <Button variant="primary" type="submit">Pesquisar</Button>
      </Container>
      <ListCompanies />

      <Footer />

    </Body>
  )
}

export default Search