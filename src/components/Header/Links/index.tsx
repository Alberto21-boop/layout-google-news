import { useState } from 'react';
import { Container } from './styles';

interface Link {
  id: number;
  name: string;
  group: number;
  active: boolean;
}

export function Links() {
  const [links, setLinks] = useState<Link[]>([
    { id: 1, name: 'Página inicial', group: 1, active: true },
    { id: 2, name: 'Para você', group: 1, active: false },
    { id: 3, name: 'Seguindo', group: 1, active: false },
    { id: 4, name: 'Destaques Jornalísticos', group: 1, active: false },
    { id: 5, name: 'Brasil', group: 2, active: false },
    { id: 6, name: 'Mundo', group: 2, active: false },
    { id: 7, name: 'Local', group: 2, active: false },
    { id: 8, name: 'Negócios', group: 2, active: false },
    { id: 9, name: 'Ciência e tecnologia', group: 2, active: false },
    { id: 10, name: 'Entretenimento', group: 2, active: false },
    { id: 11, name: 'Esportes', group: 2, active: false },
    { id: 12, name: 'Saúde', group: 2, active: false },
  ]);

  function handleActiveTab(id: number) {
    //handleActiveTab é utilizado sempre
    const formattedLinks = links.map(function (link) {
      if (id === link.id) {
        return {
          ...link,
          active: true,
        };
      } else {
        return {
          ...link,
          active: false,
        };
      }
    });
    setLinks(formattedLinks);
  }

  return (
    <Container>
      <div>
        {links.map(link => {
          if (link.group === 1) {
            return (
              <a
                key={link.id}
                onClick={() => handleActiveTab(link.id)}
                className={link.active ? 'active' : ''}
              >
                {link.name}
              </a>
            );
          }
        })}
      </div>

      <span />

      <div>
        {links.map(link => {
          if (link.group === 2) {
            return (
              <a
                key={link.id}
                onClick={() => handleActiveTab(link.id)}
                className={link.active ? 'active' : ''}
              >
                {link.name}
              </a>
            );
          }
        })}
      </div>
    </Container>
  );
}
