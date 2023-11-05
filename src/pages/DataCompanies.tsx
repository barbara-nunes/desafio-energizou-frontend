import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios";

import { IMaskInput } from "react-imask";

import { Box, Button, Heading, TextInput } from '@barbara-ignite-ui/react'

import Footer from '../Footer'
import Header from '../Header'

import { 
    CompanyAddress, 
    CompanyButton, 
    CompanyData, 
    ErrorMessageContainer, 
    MaskedInputContainer, 
    CompanyContactCompany,
    ContainerSearch
} from '../styles/DataCompanies.styles'

import { useEffect, useState } from 'react';

const registerFormSchema =  z.object({
    companyClient: z.string().min(1, {message: "O nome do cliente precisa ser válido." }),
    companyPassword: z.string().min(8, {message: "A senha deve conter no mínimo 8 caracteres." }),
    companyName: z.string().min(1, {message: "O nome da empresa precisa ser válido." }),
    companyCnpj: z.any(),
    companyCep:z.any(),
    companyAddress: z.string().min(1, {message: "O endereço precisa ser válido." }),
    companyNumber:z.string().max(3, {message: "Precisa ter no máximo 3 caracteres." }),
    companyPhone:z.any(),
    companyEmail: z.string().email({message: "O email precisa ser válido (exemplo@gmail.com)."}),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

const baseURL = "http://localhost:3333/company";

export function DataCompanies () {
    const navigate = useNavigate();
    const params = useParams();
    const [company, setCompany] = useState({});
    useEffect(() => {
        if(params?.id) {
            axios.get(`${baseURL + "ById"}/${params?.id}`).then((response) => {
                setCompany(response.data)
                reset(response.data)
              });
        }
    }, [params.id])
    const {
        setValue, 
        setFocus, 
        register, 
        handleSubmit,
        reset,
        formState: { isSubmitting, errors },
    } = useForm<RegisterFormData>({
        defaultValues: {...company},
        resolver: zodResolver(registerFormSchema)
        
    })
 
    const handleRegister = async (data:any) => {
        if(!params?.id) {
        await axios.post(baseURL, {...data});
        } else {
        await axios.patch(`${baseURL}/${params.id}`, {...data})
        }
          returnHome()
    }

    const checkCEP = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.value) return; 
        const cep = e.target.value.replace(/\D/g, '');
        
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json()).then(data => {
                setValue('companyAddress', data.logradouro);
                setFocus('companyNumber');
            })
            .catch((err) => console.log(err));
    }

    function returnHome() {
        navigate("/");
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
                    
                    <ErrorMessageContainer>
                    <TextInput 
                        type="text" 
                        placeholder="Nome do Cliente" 
                        {...register('companyClient')}
                        
                        
                    />
                    {errors.companyClient && <span>{errors.companyClient.message}</span>}
                    </ErrorMessageContainer>

                    <ErrorMessageContainer>
                    <TextInput 
                        type="password" 
                        placeholder="Senha" 
                        defaultValue={company?.companyPassword}
                        {...register('companyPassword')}
                        
                    />
                    {errors.companyPassword && <span>{errors.companyPassword.message}</span>}
                    </ErrorMessageContainer>

                    <ErrorMessageContainer> 
                    <TextInput 
                        type="text" 
                        placeholder="Nome da Empresa" 
                        {...register('companyName')}
                        defaultValue={company?.companyName}
                    />
                    {errors.companyName && <span>{errors.companyName.message}</span>}
                    </ErrorMessageContainer>
                    
                    <MaskedInputContainer>
                    <IMaskInput
                      {...register('companyCnpj')}
                        mask="00.000.000/0000-00"
                        placeholder="CNPJ" 
                        onChange={value => setValue('companyCnpj',value.target.value)}
                        defaultValue={company?.companyCnpj}
                    />
                    </MaskedInputContainer>
                    
                </CompanyData>
                
                <CompanyAddress>

                    <MaskedInputContainer>
                    <IMaskInput 
                        mask="00000-000"
                        placeholder="CEP" 
                        {...register('companyCep')} 
                        onBlur={checkCEP}   
                        onChange={value => setValue('companyCep',value.target.value)}
                        defaultValue={company?.companyCep}
                    />
                    </MaskedInputContainer>
                    
                    <ErrorMessageContainer>
                    <TextInput 
                        type="text" 
                        placeholder="Endereço" 
                        {...register('companyAddress')}
                        defaultValue={company?.companyAddress}
                    />
                    {errors.companyAddress && <span>{errors.companyAddress.message}</span>}
                    </ErrorMessageContainer>

                    <ErrorMessageContainer>
                    <TextInput 
                        type="number" 
                        placeholder="Numero" 
                        {...register('companyNumber')}
                        defaultValue={company?.companyNumber}
                    />
                    {errors.companyNumber && <span>{errors.companyNumber.message}</span>}
                    </ErrorMessageContainer>
                    
                </CompanyAddress>
                
                <CompanyContactCompany>
                    <MaskedInputContainer>
                    <IMaskInput 
                        mask="+55 (00)00000-0000"
                        placeholder="Telefone" 
                        {...register('companyPhone')}
                        onChange={value => setValue('companyPhone',value.target.value)}
                        defaultValue={company?.companyPhone}
                        
                    />
                    </MaskedInputContainer>

                    <ErrorMessageContainer>
                    <TextInput 
                        placeholder="Email" 
                        {...register('companyEmail')}
                        defaultValue={company?.companyEmail}
                    />
                    {errors.companyEmail && <span>{errors.companyEmail.message}</span>}
                    </ErrorMessageContainer>
                     
                </CompanyContactCompany>

                <CompanyButton>
                    <Button variant="primary" disabled={isSubmitting} onClick={() => returnHome()}>
                        Voltar
                    </Button>
                    <Button variant="primary" type='submit' disabled={isSubmitting}>
                        Concluir
                    </Button>
                </CompanyButton>
                </form>     
            </Box>  
        </ContainerSearch>  

        <Footer />
    </div>
  )
}

export default DataCompanies