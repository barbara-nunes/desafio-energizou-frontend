import { Button, Heading } from "@barbara-ignite-ui/react"

import axios from "axios"

import { Pencil, Trash } from "phosphor-react"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import { ListContainer, Table, TableHeaderContainer, TD, TR } from "../styles/ListCompanies.styles"

export function ListCompanies ({searchCompanies} : {searchCompanies: string}) {
  const navigate = useNavigate();

  const baseURL = "http://localhost:3333/company";
  const [listCompanies, setListCompanies] = useState<[]>([])
  
  useEffect(() => {
     axios.get(`${baseURL}/${searchCompanies}`).then((response) => {
       const list = response.data.companies ? response.data.companies : response.data
       setListCompanies(list)
     });
   }, [searchCompanies])

  function handleDeleteCompany(id:number) {
    axios.delete(`${baseURL}/${id}`)
    axios.get(`${baseURL}`).then((response) => {
      setListCompanies(response.data.companies); 
    });
  }
  
  return (
        <ListContainer>
          <TableHeaderContainer>
             {listCompanies?.length ? 
             (<Heading>Empresas Cadastradas</Heading>) :
            (<Heading>Não há Empresas Cadastradas</Heading>
            )}
  
          <Button variant="primary" onClick={() => navigate("/DataCompanies")}>
            Cadastrar novas empresas
          </Button>
          </TableHeaderContainer>
        <Table>
          { listCompanies?.length ? (
          <TR>
            <TD>Nome</TD>
            <TD>CNPJ</TD>
            <TD>Email</TD>
            <TD>Editar</TD>
            <TD>Excluir</TD>
          </TR>
          ) : null}
            {listCompanies?.map((company) => {
              return (
                  <TR key={company.id}>
                    <TD>{company.companyName}</TD>
                    <TD>{company.companyCnpj}</TD>
                    <TD>{company.companyEmail}</TD>
                    <TD><Pencil onClick={() => navigate(`DataCompanies/${company.id}`)}/></TD>
                    <TD>
                      <Trash onClick={() => handleDeleteCompany(company.id)}/>
                    </TD>
                  </TR> 
              )
            })}
        </Table>  
        </ListContainer>
  )
}

export default ListCompanies