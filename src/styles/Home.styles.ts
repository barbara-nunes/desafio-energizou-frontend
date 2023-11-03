import { Button, styled, TextInput } from "@barbara-ignite-ui/react";

export const Container = styled('div', {
    marginTop: '10%',
    margin: '10%',
    marginBottom: '2%',
    backgroundColor: '$gray400',
    gap: '1rem',
    display: 'grid',
    gridTemplateColumns: '5fr 1fr',

    [`> ${Button}`]: {
        
    },

    [`> ${TextInput}`]: {
        
    },
   })

export const Body = styled('div', {
    
})

export const ContainerButton = styled('div', {
    
    
    display: 'flex',
    justifyContent: 'center',
})

