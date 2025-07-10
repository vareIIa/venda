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
    <MKBox component="section" py={8} my={8}>
      <Container>
        {/* Hero Section */}
        <Grid container spacing={3} sx={{ mb: 8, textAlign: "center" }}>
          <Grid item xs={12}>
            <MKTypography
              variant="h2"
              fontWeight="bold"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                color: "info.main",
                mb: 2,
                fontSize: { xs: "1.8rem", md: "2rem" },
                opacity: 0,
                animation: "fadeIn 1s ease-in-out forwards",
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "translateY(20px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              Sua Nova Forma de Preparação Física do Futsal Começa Aqui
            </MKTypography>
            <MKTypography
              variant="body2"
              color="text"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.7,
                maxWidth: "800px",
                mx: "auto",
                mb: 3,
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 0.2s forwards",
              }}
            >
              Participe de um workshop presencial exclusivo com{" "}
              <span
                style={{
                  backgroundColor: "#ffca28",
                  color: "#1a237e",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                }}
              >
                Michel Petri Dalapria
              </span>
              , preparador físico da <strong>Seleção Brasileira</strong>, e domine as técnicas mais
              atuais de força e potência aplicadas ao alto rendimento no futsal.
            </MKTypography>
            <MKTypography
              variant="body2"
              color="error"
              sx={{
                mt: 2,
                fontWeight: "bold",
                fontSize: "1rem",
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 0.4s forwards",
              }}
            >
              Vagas limitadas. Evento presencial em BH.
            </MKTypography>
          </Grid>
        </Grid>

        {/* Event Card */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={10}>
            <MKBox
              borderRadius="xl"
              p={4}
              sx={{
                background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
                boxShadow: ({ boxShadows: { lg } }) => lg,
                border: "1px solid",
                borderColor: "grey.200",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.02)",
                  boxShadow: ({ boxShadows: { xl } }) => xl,
                },
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 0.6s forwards",
              }}
            >
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={12} md={5}>
                  <RotatingCard>
                    <RotatingCardFront
                      image={bgFront}
                      icon="sports_soccer"
                      title="Workshop de Futsal"
                      description={
                        <>
                          Domine as técnicas de força e potência com o preparador físico da{" "}
                          <strong>Seleção Brasileira</strong>.
                        </>
                      }
                    />
                    <RotatingCardBack
                      image={bgBack}
                      title="Eleve Sua Carreira no Futsal!"
                      description="Uma experiência prática com Michel Petri Dalapria para transformar sua abordagem ao treino físico."
                      action={{
                        type: "internal",
                        route: "/sections/page-sections/page-headers",
                        label: "GARANTIR VAGA",
                      }}
                    />
                  </RotatingCard>
                </Grid>
                <Grid item xs={12} md={7}>
                  <MKBox>
                    <MKTypography
                      variant="h3"
                      fontWeight="bold"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        mb: 2,
                        fontSize: { xs: "1.3rem", md: "1.5rem" },
                      }}
                    >
                      Workshop de Preparação Física no Futsal
                    </MKTypography>
                    <MKTypography
                      variant="body2"
                      color="text"
                      sx={{ fontSize: "1rem", lineHeight: 1.7, mb: 2 }}
                    >
                      Uma oportunidade única para aprender com{" "}
                      <span
                        style={{
                          backgroundColor: "#ffca28",
                          color: "#1a237e",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        Michel Petri Dalapria
                      </span>{" "}
                      e aplicar técnicas de elite no seu trabalho. Vagas limitadas para garantir uma
                      experiência prática e personalizada.
                    </MKTypography>
                    <MKButton
                      variant="gradient"
                      color="primary"
                      size="large"
                      component="a"
                      href="/sections/page-sections/page-headers"
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        px: 4,
                        py: 1.5,
                        fontSize: "1rem",
                        transition: "transform 0.3s, background-color 0.3s",
                        "&:hover": {
                          transform: "scale(1.05)",
                          backgroundColor: "primary.dark",
                        },
                      }}
                    >
                      Garantir Minha Vaga
                    </MKButton>
                  </MKBox>
                </Grid>
              </Grid>
            </MKBox>
          </Grid>
        </Grid>

        {/* Detailed Sections */}
        <Grid container spacing={4} sx={{ mt: 8 }}>
          {/* O Desafio */}
          <Grid item xs={12}>
            <MKBox
              sx={{
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 0.8s forwards",
              }}
            >
              <MKTypography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  mb: 2,
                  color: "info.main",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                O Futsal Evoluiu. Sua Metodologia Acompanhou?
              </MKTypography>
              <MKTypography variant="body2" color="text" sx={{ fontSize: "1rem", lineHeight: 1.7 }}>
                O jogo está mais intenso, mais físico e mais exigente. Hoje, o talento precisa estar
                sustentado por força, velocidade e resistência. Profissionais que dominam essas
                variáveis são cada vez mais valorizados — e cada detalhe da preparação pode definir
                o resultado em quadra.
                <br />
                <br />
                Este workshop é voltado a quem deseja se atualizar com o que há de mais eficaz e
                aplicado à realidade competitiva do futsal moderno.
              </MKTypography>
            </MKBox>
          </Grid>

          {/* O Especialista */}
          <Grid item xs={12}>
            <MKBox
              sx={{
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 1s forwards",
              }}
            >
              <MKTypography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  mb: 2,
                  color: "info.main",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Aprenda com Quem Está no Topo da Performance Nacional
              </MKTypography>
              <MKTypography variant="body2" color="text" sx={{ fontSize: "1rem", lineHeight: 1.7 }}>
                <span
                  style={{
                    backgroundColor: "#ffca28",
                    color: "#1a237e",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Michel Petri Dalapria
                </span>{" "}
                é o atual preparador físico da <strong>Seleção Brasileira</strong> de Futsal, com
                títulos internacionais e uma trajetória marcada pela excelência técnica e prática.
                Sua vivência na elite do esporte, aliada à base construída no Joaçaba Futsal,
                garante uma visão única entre teoria e aplicação real.
                <br />
                <br />
                Neste evento, você terá acesso a conhecimentos antes restritos a equipes
                profissionais — direto da fonte.
              </MKTypography>
            </MKBox>
          </Grid>

          {/* O Conteúdo */}
          <Grid item xs={12}>
            <MKBox
              sx={{
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 1.2s forwards",
              }}
            >
              <MKTypography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  mb: 2,
                  color: "info.main",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Conhecimento Aplicado para Resultados Reais em Quadra
              </MKTypography>
              <MKTypography
                variant="body2"
                color="text"
                sx={{ fontSize: "1rem", lineHeight: 1.7, mb: 2 }}
              >
                Este não é mais um evento teórico. É uma experiência prática que vai transformar sua
                abordagem. Você vai aprender a:
              </MKTypography>
              <MKBox component="ul" sx={{ pl: 3, fontSize: "1rem", lineHeight: 1.7 }}>
                <li>
                  Avaliar a força e a potência dos atletas com métodos objetivos e replicáveis.
                </li>
                <li>
                  Estruturar a periodização do treino de força conforme o calendário competitivo.
                </li>
                <li>
                  Implementar exercícios específicos para arrancadas, frenagens, chutes e saltos.
                </li>
                <li>Prevenir lesões com estratégias eficazes de fortalecimento.</li>
                <li>Integrar o trabalho físico com o treino técnico e tático.</li>
              </MKBox>
            </MKBox>
          </Grid>

          {/* As Informações */}
          <Grid item xs={12}>
            <MKBox
              sx={{
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 1.4s forwards",
              }}
            >
              <MKTypography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  mb: 2,
                  color: "info.main",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Evento Presencial em BH com Bônus Exclusivo
              </MKTypography>
              <MKBox sx={{ fontSize: "1rem", lineHeight: 1.7 }}>
                <MKTypography variant="body2" sx={{ mb: 1 }}>
                  <strong>📍 Local:</strong> CT OMNI – Belo Horizonte, MG
                </MKTypography>
                <MKTypography variant="body2" sx={{ mb: 1 }}>
                  <strong>📅 Data:</strong> 27 de setembro de 2025
                </MKTypography>
                <MKTypography variant="body2" sx={{ mb: 1 }}>
                  <strong>🕗 Horário:</strong> Das 08h às 18h (com intervalo para almoço)
                </MKTypography>
                <MKTypography variant="body2" sx={{ mb: 1 }}>
                  <strong>🎟️ Vagas:</strong> Apenas 100 participantes, para garantir a qualidade da
                  prática
                </MKTypography>
                <MKTypography
                  variant="body2"
                  sx={{ mt: 2, fontWeight: "bold", color: "success.main" }}
                >
                  Bônus Especial: Os 50 primeiros inscritos ganham um ingresso para assistir a uma
                  partida oficial da LNF na Arena UniBH, logo após o evento.
                </MKTypography>
              </MKBox>
            </MKBox>
          </Grid>

          {/* O Convite Final */}
          <Grid item xs={12}>
            <MKBox
              sx={{
                opacity: 0,
                animation: "fadeIn 1s ease-in-out 1.6s forwards",
                textAlign: "center",
              }}
            >
              <MKTypography
                variant="h3"
                fontWeight="bold"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  mb: 2,
                  color: "info.main",
                  fontSize: { xs: "1.3rem", md: "1.5rem" },
                }}
              >
                Para Quem Leva a Preparação Física a Sério
              </MKTypography>
              <MKTypography
                variant="body2"
                color="text"
                sx={{ fontSize: "1rem", lineHeight: 1.7, mb: 2 }}
              >
                Este workshop é ideal para:
              </MKTypography>
              <MKBox
                component="ul"
                sx={{
                  pl: 3,
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  textAlign: "left",
                  maxWidth: "600px",
                  mx: "auto",
                }}
              >
                <li>Preparadores físicos que buscam atualizações de alto nível.</li>
                <li>Estudantes de Educação Física que querem se destacar no mercado.</li>
                <li>
                  Treinadores e entusiastas que desejam aprofundar seu domínio sobre a performance
                  no futsal.
                </li>
              </MKBox>
              <MKTypography
                variant="body2"
                color="text"
                sx={{ fontSize: "1rem", lineHeight: 1.7, mt: 2, mb: 3 }}
              >
                Se você está comprometido com o desenvolvimento dos seus atletas — e da sua carreira
                —, este evento foi feito para você.
              </MKTypography>
              <MKButton
                variant="gradient"
                color="primary"
                size="large"
                component="a"
                href="/sections/page-sections/page-headers"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  transition: "transform 0.3s, background-color 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "primary.dark",
                  },
                }}
              >
                Quero Minha Vaga e o Bônus!
              </MKButton>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
