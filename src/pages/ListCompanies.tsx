import { Button, Heading } from "@barbara-ignite-ui/react"
import axios from "axios"
import { Pencil, Trash } from "phosphor-react"
import { useState } from "react"
import { Navigate } from "react-router-dom"
import { ContainerButton } from "../styles/Home.styles"
import { ListContainer, Table, TableHeaderContainer, TD, TR } from "../styles/ListCompanies.styles"

export function ListCompanies () {
  const companies = [
    {
      name:'Empresa teste15455555555555555555',
      cnpj: 'XX.XXX.XXX/XXXX-XX',
      id: '',
      email: "email@ema4534543543455555.com"
    },

    {
      name:'Empresa teste2',
      cnpj: 'XX.XXX.XXX/XXXX-XX',
      id: '',
      email: "email@email.com"
    },

    {
      name:'Empresa teste3',
      cnpj: 'XX.XXX.XXX/XXXX-XX',
      id: '',
      email: "email@email.com"
    },
  ]

  const baseURL = "https://http://localhost:3333/company";

  const [goToNewCompanies, setGoToNewCompanies] = useState(false)
  function registerNewCompanies() {
    setGoToNewCompanies(true)
  }

  const [goToCompany, setGoToCompany] = useState(false)
  function editCompany() {
    setGoToCompany(true)
  }

  const [listCompanies, setListCompanies] = useState<string[]>([])

  function handleDeleteCompany(companyToDelete:string) {
    console.log("teste")
    const activeCompanies = listCompanies.filter((company) => company !== companyToDelete)
    setListCompanies(activeCompanies)
  
  }

  const handleDelete = (data:any) => {
    console.log(data);
    axios.delete(`${baseURL}/:id`).then((response) => {
        /* setPost(response.data); */
      });
  }
  

  return (
        <ListContainer>
          <TableHeaderContainer>
            <Heading>Empresas Cadastradas</Heading>
            
          <Button variant="primary" onClick={() => registerNewCompanies()}>
            {goToNewCompanies && <Navigate to="/NewCompanies" replace={true} />}
            Cadastrar novas empresas
          </Button>
          </TableHeaderContainer>
        <Table>
          <TR>
            <TD>Nome</TD>
            <TD>CNPJ</TD>
            <TD>Email</TD>
            <TD>Editar</TD>
            <TD>Excluir</TD>
          </TR>
            {companies.map((company) => {
              return (
                  <TR key={company.id}>
                    <TD>{company.name}</TD>
                    <TD>{company.cnpj}</TD>
                    <TD>{company.email}</TD>
                    <TD><Pencil onClick={() => editCompany()}/> </TD>
                    <TD>
                      <Trash onClick={() => handleDeleteCompany(company.name)}/>
                      
                    {goToCompany && <Navigate to="/NewCompanies" replace={true} />}
                    </TD>
                  </TR> 
              )
            })}
        </Table>  
        </ListContainer>
  )
}

export default ListCompanies