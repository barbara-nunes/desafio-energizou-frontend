import { Heading, styled } from "@barbara-ignite-ui/react";

export const Container = styled('div', {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: '$16',
    marginTop:'2%',

    width:' 100%',
    height: '4rem',
    margin: 'auto',
    top: '0',
    position: 'fixed',

    [`> ${Heading}`]: {
        color: '$ignite700',
      },
})

export const Logo = styled('div', {
    
})



