import { styled } from './styles'

export const Button = styled('button', {
  backgroundColor: 'red',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'blue',
  },
})
