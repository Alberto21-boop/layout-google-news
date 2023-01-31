import { Container, Button } from './style';
import logo from '../../assets/logo.png';
import questionIcon from '../../assets/questionIcon.svg';
import gearIcon from '../../assets/gearIcon.svg';
import gridIcon from '../../assets/gridIcon.svg';
import avatar from '../../assets/avatar.jpeg';

export function Header() {
  return (
    <Container>
      <img className="logo" src={logo} alt="Google" />
      <h3>Notícias</h3>
      <div className="textfield">
        <label htmlFor="Pesquisa"></label>
        <input
          className="placeholder"
          type="placeholder"
          placeholder="Pesquise assuntos, locais e fontes"
        />
      </div>
      <>
        <Button className="questionIcon">
          <img src={questionIcon} alt="questionIcon" />
        </Button>

        <Button className="gearIcon">
          <img src={gearIcon} alt="gearIcon" />
        </Button>

        <img className="gridIcon" src={gridIcon} alt="gridIcon" />

        <img className="avatarIcon" src={avatar} alt="avatarIcon" />
      </>
    </Container>
  );
}
