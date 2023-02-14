import { Header } from '../../components/Header';
import { CardHeader, Container, Content } from './styles';
import { Card } from '../../components/Card';
import { Fragment, useEffect, useState } from 'react';
import arrow from '../../assets/arrow-icon.svg';
import { News } from '../../components/News';
import logoNews01 from '../../assets/news/logo-news-01.png';
import news01 from '../../assets/news/news-01.png';
import logoNews02 from '../../assets/news/logo-news-02.png';
import news02 from '../../assets/news/news-02.png';
import logoNews03 from '../../assets/news/logo-news-03.png';
import news03 from '../../assets/news/news-03.png';
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
                    message="Jovem de 18 anos e dois irmãos são resgatados na Turquia após 8 dias"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </div>

                <aside>
                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
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
                    picture={news01}
                    message="Jovem de 18 anos e dois irmãos são resgatados na Turquia após 8 dias"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </div>

                <aside>
                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
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
                    picture={news01}
                    message="Jovem de 18 anos e dois irmãos são resgatados na Turquia após 8 dias"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />
                </div>

                <aside>
                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
                    title="RD - Repórter Diário"
                    titleLogo={logoNews01}
                  />

                  <hr />

                  <News
                    message="São Bernardo lança Encontro de Mulheres Empreendedoras"
                    time="10 horas atrás"
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
