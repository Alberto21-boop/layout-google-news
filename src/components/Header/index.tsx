import { Container, Button, UpperContent } from './styles';
import logo from '../../assets/logo.png';
import questionIcon from '../../assets/questionIcon.svg';
import gearIcon from '../../assets/gearIcon.svg';
import gridIcon from '../../assets/gridIcon.svg';
import avatar from '../../assets/avatar.jpeg';
import { Links } from './Links';

export function Header() {
  return (
    <Container>
      <UpperContent>
        <div className="title">
          <img src={logo} alt="Google" />
          <h3>Notícias</h3>
        </div>

        <div className="search">
          <input
            className="placeholder"
            type="placeholder"
            placeholder="Pesquise assuntos, locais e fontes"
          />

          <div className="helpers">
            <Button title="Ajuda">
              <img src={questionIcon} alt="questionIcon" />
            </Button>
            <Button title="Configurações">
              <img src={gearIcon} alt="gearIcon" />
            </Button>
          </div>
        </div>

        <div className="options">
          <Button className="gridIcon" title="Google Apps">
            <img src={gridIcon} alt="gridIcon" />
          </Button>

          <Button className="avatarIcon" title="Perfil do Usuário">
            <img src={avatar} alt="avatarIcon" />
          </Button>
        </div>
      </UpperContent>

      <Links />
    </Container>
  );
}
