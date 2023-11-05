import logo from '../Header/energizou.png'
import { Container } from '../Header/styles'

export function Header () {
  return (
    <Container>
        <img src={logo} height={40} alt="Logo Energizou" />         
    </Container>
  )
}

export default Header