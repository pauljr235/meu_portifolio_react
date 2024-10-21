import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Paulo Lopes</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        pauljr235
      </Paragrafo>
      <Paragrafo>Engenheiro front-end</Paragrafo>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
