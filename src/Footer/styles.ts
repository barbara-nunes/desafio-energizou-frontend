import { Heading, styled } from "@barbara-ignite-ui/react";

export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width:' 100%',
    height: '4rem',
    margin: 'auto',
    bottom: '0',
    position: 'fixed',
    
    [`> ${Heading}`]: {
        color: '$ignite700',
      },
})