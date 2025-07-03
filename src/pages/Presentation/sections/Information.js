/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container spacing={3} direction="column" sx={{ mx: "auto" }}>
          {/* Evento 1: Festa Junina */}
          <Grid item xs={12}>
            <MKBox
              borderRadius="xl"
              shadow="lg"
              p={3}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                backgroundColor: "white",
                mb: 3,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={bgFront}
                      icon="touch_app"
                      title={
                        <>
                          Evento
                          <br />
                          Festa Junina
                        </>
                      }
                      description={
                        "A venda de ingressos para o evento Festa Junina do Vianna é feita de " +
                        "forma rápida e segura, garantindo a melhor experiência para os " +
                        "participantes."
                      }
                    />
                    <RotatingCardBack
                      image={bgBack}
                      title="Se dizerem que é só uma festa junina, não conhecem o Vianna!"
                      description={
                        "A Festa Junina do Vianna é um evento tradicional que reúne música, " +
                        "dança, comidas típicas e muita diversão. É uma oportunidade única de " +
                        "vivenciar a cultura nordestina em um ambiente acolhedor e animado."
                      }
                      action={{
                        type: "internal",
                        route: "/sections/page-sections/page-headers",
                        label: "COMPRE AQUI",
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} md={8}>
                  <MKBox>
                    <MKTypography variant="h4" mb={1}>
                      Festa Junina do Vianna
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={2}>
                      A Festa Junina do Vianna é um evento tradicional que reúne música, dança,
                      comidas típicas e muita diversão. É uma oportunidade única de vivenciar a
                      cultura nordestina em um ambiente acolhedor e animado. Venha com sua melhor
                      roupa caipira e aproveite as quadrilhas, barraquinhas e shows ao vivo!
                    </MKTypography>
                    <MKTypography variant="body2" color="text" fontWeight="bold">
                      Data: 15 de Julho de 2025, 18:00
                    </MKTypography>
                    <MKButton
                      variant="gradient"
                      color="primary"
                      size="large"
                      sx={{ mt: 3 }}
                      component="a"
                      href="/sections/page-sections/page-headers"
                    >
                      Comprar Ingresso
                    </MKButton>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>

          {/* Evento 2: Noite Cultural */}
          <Grid item xs={12}>
            <MKBox
              borderRadius="xl"
              shadow="lg"
              p={3}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                backgroundColor: "white",
                mb: 3,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={bgFront}
                      icon="festival"
                      title="Noite Cultural"
                      description={
                        "Uma noite inesquecível com apresentações de teatro, música ao vivo e " +
                        "exposições de arte local."
                      }
                    />
                    <RotatingCardBack
                      image={bgBack}
                      title="A cultura ganha vida na Noite Cultural!"
                      description={
                        "A Noite Cultural do Vianna celebra a diversidade artística com " +
                        "performances vibrantes e exposições interativas. Venha se encantar " +
                        "com a riqueza da nossa comunidade!"
                      }
                      action={{
                        type: "internal",
                        route: "/sections/page-sections/page-headers",
                        label: "COMPRE AQUI",
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} md={8}>
                  <MKBox>
                    <MKTypography variant="h4" mb={1}>
                      Noite Cultural
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={2}>
                      A Noite Cultural do Vianna é uma celebração da arte e da criatividade.
                      Desfrute de apresentações teatrais emocionantes, concertos de música clássica
                      e contemporânea, além de exposições de artistas locais. Um evento perfeito
                      para quem aprecia cultura e quer se inspirar!
                    </MKTypography>
                    <MKTypography variant="body2" color="text" fontWeight="bold">
                      Data: 20 de Agosto de 2025, 19:00
                    </MKTypography>
                    <MKButton
                      variant="gradient"
                      color="primary"
                      size="large"
                      sx={{ mt: 3 }}
                      component="a"
                      href="/sections/page-sections/page-headers"
                    >
                      Comprar Ingresso
                    </MKButton>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>

          {/* Evento 3: Festival de Rock */}
          <Grid item xs={12}>
            <MKBox
              borderRadius="xl"
              shadow="lg"
              p={3}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                backgroundColor: "white",
                mb: 3,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={bgFront}
                      icon="music_note"
                      title="Festival de Rock"
                      description={
                        "Bandas independentes e muita energia em um evento que promete agitar " +
                        "a cidade!"
                      }
                    />
                    <RotatingCardBack
                      image={bgBack}
                      title="Sinta a vibração do Festival de Rock!"
                      description={
                        "O Festival de Rock do Vianna traz o melhor da cena indie com shows " +
                        "eletrizantes e uma atmosfera única. Prepare-se para curtir a noite " +
                        "toda!"
                      }
                      action={{
                        type: "internal",
                        route: "/sections/page-sections/page-headers",
                        label: "COMPRE AQUI",
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} md={8}>
                  <MKBox>
                    <MKTypography variant="h4" mb={1}>
                      Festival de Rock
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={2}>
                      O Festival de Rock do Vianna é o ponto de encontro dos amantes da música
                      alternativa. Bandas independentes de todo o país se reúnem para uma noite de
                      shows inesquecíveis, com muita energia e vibração. Traga sua energia e venha
                      curtir!
                    </MKTypography>
                    <MKTypography variant="body2" color="text" fontWeight="bold">
                      Data: 10 de Setembro de 2025, 20:00
                    </MKTypography>
                    <MKButton
                      variant="gradient"
                      color="primary"
                      size="large"
                      sx={{ mt: 3 }}
                      component="a"
                      href="/sections/page-sections/page-headers"
                    >
                      Comprar Ingresso
                    </MKButton>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>

          {/* Evento 4: Feira Gastronômica */}
          <Grid item xs={12}>
            <MKBox
              borderRadius="xl"
              shadow="lg"
              p={3}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                backgroundColor: "white",
                mb: 3,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={bgFront}
                      icon="restaurant"
                      title="Feira Gastronômica"
                      description={
                        "Sabores do mundo em um evento que reúne food trucks e chefs renomados."
                      }
                    />
                    <RotatingCardBack
                      image={bgBack}
                      title="Descubra novos sabores na Feira Gastronômica!"
                      description={
                        "A Feira Gastronômica do Vianna é um convite para explorar culinárias " +
                        "de diferentes culturas, com pratos exclusivos e uma experiência " +
                        "sensorial inesquecível."
                      }
                      action={{
                        type: "internal",
                        route: "/sections/page-sections/page-headers",
                        label: "COMPRE AQUI",
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} md={8}>
                  <MKBox>
                    <MKTypography variant="h4" mb={1}>
                      Feira Gastronômica
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={2}>
                      A Feira Gastronômica do Vianna reúne os melhores food trucks e chefs renomados
                      em um festival de sabores. De pratos exóticos a clássicos regionais, há algo
                      para todos os paladares. Venha com fome e descubra novas delícias!
                    </MKTypography>
                    <MKTypography variant="body2" color="text" fontWeight="bold">
                      Data: 25 de Outubro de 2025, 12:00
                    </MKTypography>
                    <MKButton
                      variant="gradient"
                      color="primary"
                      size="large"
                      sx={{ mt: 3 }}
                      component="a"
                      href="/sections/page-sections/page-headers"
                    >
                      Comprar Ingresso
                    </MKButton>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>

          {/* Evento 5: Maratona de Verão */}
          <Grid item xs={12}>
            <MKBox
              borderRadius="xl"
              shadow="lg"
              p={3}
              sx={{
                border: "1px solid",
                borderColor: "grey.300",
                backgroundColor: "white",
                mb: 3,
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={4}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={bgFront}
                      icon="sports"
                      title="Maratona de Verão"
                      description={
                        "Corra, celebre e viva a energia do esporte em nossa maratona anual!"
                      }
                    />
                    <RotatingCardBack
                      image={bgBack}
                      title="Supere seus limites na Maratona de Verão!"
                      description={
                        "A Maratona de Verão do Vianna é mais do que uma corrida: é uma " +
                        "celebração de saúde, superação e comunidade. Inscreva-se e faça parte!"
                      }
                      action={{
                        type: "internal",
                        route: "/sections/page-sections/page-headers",
                        label: "COMPRE AQUI",
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} md={8}>
                  <MKBox>
                    <MKTypography variant="h4" mb={1}>
                      Maratona de Verão
                    </MKTypography>
                    <MKTypography variant="body2" color="text" mb={2}>
                      A Maratona de Verão do Vianna é o evento perfeito para corredores de todos os
                      níveis. Com percursos de 5km, 10km e 21km, além de atividades para toda a
                      família, é uma celebração de saúde e comunidade. Inscreva-se e venha superar
                      seus limites!
                    </MKTypography>
                    <MKTypography variant="body2" color="text" fontWeight="bold">
                      Data: 15 de Novembro de 2025, 07:00
                    </MKTypography>
                    <MKButton
                      variant="gradient"
                      color="primary"
                      size="large"
                      sx={{ mt: 3 }}
                      component="a"
                      href="/sections/page-sections/page-headers"
                    >
                      Comprar Ingresso
                    </MKButton>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
