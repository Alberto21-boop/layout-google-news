import { Header } from '../../components/Header';
import { CardHeader, Container, Content } from './styles';
import { Card } from '../../components/Card';
import { useEffect, useState } from 'react';
import arrow from '../../assets/arrow-icon.svg';
import { News } from '../../components/News';
import logoNews01 from '../../assets/news/logo-news-01.png';
import news01 from '../../assets/news/news-01.png';
import news02 from '../../assets/news/news-03.png';
import news03 from '../../assets/news/news-01.png';
import logoNews04 from '../../assets/news/logo-news-04.png';
import news04 from '../../assets/news/news-04.png';
import logoNews05 from '../../assets/news/logo-news-05.png';
import news05 from '../../assets/news/news-05.png';
import logoNews06 from '../../assets/news/logo-news-06.png';
import news06 from '../../assets/news/news-06.png';
import { api } from '../../services/api';

interface News {
  message: string;
  title: string;
  titleLogo: string;
  picture: string;
  time: string;
}

export function Home() {
  const [localNews, setLocalNews] = useState<News[]>([]);

  useEffect(() => {
    api.get('localNews').then(response => {
      if (response?.data) {
        setLocalNews(response.data);
      }
    });
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <div className="NewsAndDate">
          <h1>Suas notícias</h1>
          <h3>segunda-feira, 3 de fevereiro</h3>
        </div>

        <section>
          <div className="LeftCards">
            <Card className="CardOne">
              <CardHeader>
                <div>
                  <h1>Principais notícias</h1>
                  <img src={arrow} alt="" />
                </div>
                <hr />
              </CardHeader>

              <section>
                <div>
                  <News
                    isMain={true}
                    picture={news01}
                    message="A minha filha Alice é uma filha incrível, fantástica, uma menininha maravilhosa que alegra o meu dia!"
                    time="1 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </div>

                <aside>
                  <News
                    message="Jovem faz festa após conseguir vender seu Mareia no WebMotors, e bairro vai a loucura 'Finalmente vendi, tentei desde a época do Orkut'"
                    time="8 horas atrás"
                    title="Olhar Digital"
                    titleLogo={logoNews04}
                  />

                  <hr />

                  <News
                    message="Homem é encontrado na rua dizendo que programa HTML orientado a objeto, e comunidade cientifica diz que é verossimil"
                    time="13 horas atrás"
                    title="O Antagonista"
                    titleLogo={logoNews06}
                  />

                  <hr />

                  <News
                    message="É como dizia o grande filosofo 'Rauzito' : 'Se chamarem, diga que eu sai'"
                    time="10 horas atrás"
                    title="Whiplash"
                    titleLogo={logoNews05}
                  />
                </aside>
              </section>

              <hr />

              <section>
                <div>
                  <News
                    isMain={true}
                    picture={news04}
                    message="Aulas de etiqueta com a pequena Alice e suas bonequinhas, e hoje ela vai nos mostrar como devemos nos sentar a mesa parte 1"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </div>

                <aside>
                  <News
                    message="Dicas para as crianças deste Brasil, 'quem não chora não mama' por Alice Campos"
                    time="3 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="'Se a mamãe não deixa, é so pedir para o papai' Por Alice Campos "
                    time="7 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="10 maneiras de pressionar os pais a comprar qualquer presente por Alice Campos"
                    time="2 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </aside>
              </section>

              <hr />

              <section>
                <div>
                  <News
                    isMain={true}
                    picture={news02}
                    message="Flagrante: Homem que tira rachas nas ruas da Zona Norte alega que só faz por esporte"
                    time="6 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </div>

                <aside>
                  <News
                    message="O lance é comprar um carro com o desconto para PCD, pegar a filha e a namorada e curtir na praia"
                    time="6 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="Loira desaparecida, Beto doente, damos recompensa !"
                    time="1 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="O lance é chegar na gata em casa, e falar no ouvido dela : ' Gata ... vamos fazer varias loucuras hoje ? Tipo comprar umas lasanhas no OLX ?"
                    time="9 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </aside>
              </section>

              <hr />
            </Card>
          </div>

          <div className="RightCards">
            <Card>
              <CardHeader className="secondCard">
                <div>
                  <h1>Notícias locais</h1>
                  <img src={arrow} alt="" />
                </div>
                <hr />
              </CardHeader>

              <section>
                {localNews?.length ? (
                  localNews.map(localNotice => (
                    <>
                      <News
                        message={localNotice.message}
                        picture={localNotice.picture}
                        time={localNotice.time}
                        title={localNotice.title}
                        titleLogo={localNotice.titleLogo}
                      />

                      <hr />
                    </>
                  ))
                ) : (
                  <></>
                )}
              </section>
            </Card>

            <Card>
              <CardHeader className="cardThird">
                <div>
                  <h1>Opções para você</h1>
                </div>
                <hr />
              </CardHeader>

              <section>
                <News
                  message="ChatGPT Plus é oficialmente lançado no Brasil"
                  picture={news04}
                  time="20 horas atrás"
                  title="Olhar Digital"
                  titleLogo={logoNews04}
                />

                <hr />

                <News
                  message="Metallica lamenta não ter recebido convite de Rihanna para o Super Bowl"
                  picture={news05}
                  time="1 horas atrás"
                  title="Whiplash"
                  titleLogo={logoNews05}
                />
                <hr />

                <News
                  message="Papo Antagonista com Claudio Dantas: NÃO VAI CHOVER PICANHA E CERVEJA?"
                  picture={news06}
                  time="9 horas atrás"
                  title="RD - Repórter Diário"
                  titleLogo={logoNews06}
                />
              </section>
            </Card>
          </div>
        </section>
      </Content>
    </Container>
  );
}
