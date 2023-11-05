import { styled } from "@barbara-ignite-ui/react";

export const ContainerSearch = styled('div', {
    margin: '0.75rem',
    marginTop: '10rem',
    marginBottom: '10rem',
})

export const ErrorMessageContainer = styled('div', {
    [`span`] : {
      color: '$white'
    }
})

export const CompanyData = styled('div', {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gridColumnGap: '0.25em',
    gridRowGap: '0.25em',
    marginBottom: '0.25em',
})

export const CompanyAddress = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    gridColumnGap: '0.25em',
    gridRowGap: '0.25em',
    marginBottom: '0.25em',
})

export const CompanyContactCompany = styled('div', {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr ',
    gridColumnGap: '0.25em',
    gridRowGap: '0.25em',
    marginBottom: '0.5rem',
})

export const CompanyButton = styled('div', {
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'flex-end',
    borderRight: '0',
    gap: '1rem',
    marginTop: '1rem',
})

export const MaskedInputContainer = styled('div', {
    backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },

    [`> input`]: {
    fontFamily: '$default',
    fontSize: '$sm',
    color: '$white',
    fontWeight: 'regular',
    background: 'transparent',
    border: 0,
    width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray500',
  },
    },
})

