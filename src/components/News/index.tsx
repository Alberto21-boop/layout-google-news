import { HTMLAttributes } from 'react';
import { Container } from './styles';

interface NewsProps {
  message: string;
  title: string;
  titleLogo: string;
  picture?: string;
  time: string;
  isMain?: boolean;
}

export function News({
  message,
  title,
  titleLogo,
  picture,
  time,
  isMain = false,
}: NewsProps) {
  return (
    <Container isMain={isMain}>
      <div>
        <div>
          <img src={titleLogo} alt="" />
          <h3>{title}</h3>
        </div>
        <p>{message}</p>
        <span>{time}</span>
      </div>

      {picture ? <img src={picture} alt="" /> : <></>}
    </Container>
  );
}
