import { useForm } from 'react-hook-form'
import { z } from 'zod'
import axios from "axios";

import { Box, Button, Heading, TextInput } from '@barbara-ignite-ui/react'

import Footer from '../Footer'
import Header from '../Header'

import { CompanyAddress, CompanyData, ContactCompany, ContainerSearch } from '../styles/NewCompanies.styles'

const registerFormSchema =  z.object({
    clientName: z.string(),
    password: z.string().min(8, {message: "A senha deve conter no mínimo 8 caracteres." }),
    companyName: z.string(),
    cnpj: z.string(),
    cep:z.string(),
    address: z.string(),
    number:z.string(),
    telephoneNumber:z.string(),
    email: z.string().email({message: "O email precisa ser válido."}),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

const baseURL = "https://http://localhost:3333/company";

export function NewCompanies () {
    const {
        setValue, 
        setFocus, 
        register, 
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<RegisterFormData>({})

    const handleRegister = (data:any) => {
        console.log(data);
        axios.post(baseURL).then((response) => {
            //setPost(response.data);
          });
    }

    const handleUpdate = (data:any) => {
        console.log(data);
        axios.patch(`${baseURL}/:id`).then((response) => {
            /* setPost(response.data); */
          });
    }


    const checkCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return; 
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                console.log(data);
                setValue('address', data.logradouro);
                setFocus('number');
            })
            .catch((err) => console.log(err));
    }

  return (
    <div>
        <Header />

        <ContainerSearch>
            

            <Box>
            <Heading style={{margin: "1.5rem"}}>
                Preencha os campos abaixo para cadastrar
            </Heading>
                <form onSubmit={handleSubmit(handleRegister)}> 
                <CompanyData>
                    <TextInput 
                        type="text" 
                        placeholder="Nome do Cliente" 
                        {...register('clientName')}
                    />
                    <TextInput 
                        type="password" 
                        placeholder="Senha" 
                        {...register('password')}
                    />
                    <TextInput 
                        type="text" 
                        placeholder="Nome da Empresa" 
                        {...register('companyName')}
                    />
                    <TextInput 
                        type="number" 
                        placeholder="CNPJ" 
                        {...register('cnpj')}
                    />
                </CompanyData>
                
                <CompanyAddress>
                    <TextInput 
                        type="number" 
                        placeholder="CEP" 
                        onBlur={checkCEP} 
                        /* {...register('cep')} */
                    />

                    <TextInput 
                        type="text" 
                        placeholder="Endereço" 
                        {...register('address')}
                    />

                    <TextInput 
                        type="number" 
                        placeholder="Numero" 
                        {...register('number')}
                    />
                </CompanyAddress>
                
                <ContactCompany>
                    <TextInput 
                        type="number" 
                        placeholder="Telefone" 
                        {...register('telephoneNumber')}
                    />
                    <TextInput 
                        type="email" 
                        placeholder="Email" 
                        {...register('email')}
                    />
                </ContactCompany>

                <Button variant="primary" type='submit' disabled={isSubmitting}>
                    Voltar
                </Button>
                <Button variant="primary" type='submit' disabled={isSubmitting}>
                    Concluir
                </Button>
                </form>     
            </Box>  
        </ContainerSearch>

        <Footer />
    </div>
  )
}

export default NewCompanies