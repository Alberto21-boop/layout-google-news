import { HTMLAttributes } from 'react';
import { Container } from './styles';

//Criação de um interface contendo um children permitindo passar elementos de html como parámetro
//Estendendo das propriedades htmls nativas do div que existe no html,
//podendo assim passar classes, styles, id e etc.
interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: JSX.Element | JSX.Element[];
}

//Criamos o component card recebendo a propriedade children,
//e todas as outras propriedades da tag div do html podendo ser acessadas através de "...props"
//assim chamando card podemos passar uma classe, id, styles, ou algo especifico para ele.
export function Card({ children, ...props }: CardProps) {
  //Passamos aqui dentro do container as propriedades de div pois container é uma div estilizada,
  //por tanto toda classe ou atributos passados para o component card,
  //vão ser recebidos pelo component container
  //Passamos children dentro do container permitindo adicionar elementos html dentro de container
  return <Container {...props}>{children}</Container>;
}
