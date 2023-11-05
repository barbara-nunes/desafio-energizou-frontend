import { TextInput } from "@barbara-ignite-ui/react"
import { FormEvent, useState } from "react"

import { Body, Container } from "../styles/Home.styles"

import ListCompanies from "./ListCompanies"
import Footer from "../Footer"
import Header from "../Header"

export function Search () {

  const [searchCompanies, setSearchCompanies] = useState('')

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
              placeholder="Pesquisar empresas cadastradas por CPNJ" 
              required
            />
          </form>
      </Container>
      <ListCompanies searchCompanies={searchCompanies}/>

      <Footer />

    </Body>
  )
}

export default Search