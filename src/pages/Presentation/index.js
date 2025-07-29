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
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="50vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          py: 6,
        }}
      >
        <Container>
          <Grid container item xs={12} lg={8} justifyContent="center" mx="auto">
            <MKTypography
              variant="h2"
              color="white"
              mb={2}
              sx={{
                fontFamily: "'Poppins', sans-serif",
                textAlign: "center",
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Revolucione Sua Preparação Física no Futsal
            </MKTypography>
            <MKTypography
              variant="body2"
              color="white"
              textAlign="center"
              px={{ xs: 2, lg: 8 }}
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" },
                lineHeight: 1.7,
                maxWidth: "800px",
              }}
            >
              Junte-se ao workshop presencial com{" "}
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
              , preparador físico da <strong>Seleção Brasileira</strong>, e aprenda técnicas
              avançadas de força e potência para o alto rendimento no futsal.
            </MKTypography>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: { xs: 2, md: 4 },
          mx: { xs: 2, lg: 4 },
          mt: -3,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.9),
          backdropFilter: "saturate(180%) blur(20px)",
          boxShadow: ({ boxShadows: { xl } }) => xl,
          borderRadius: "12px",
        }}
      >
        <Information />
        <MKBox pb={4}>
          <Container>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} lg={6} sx={{ textAlign: { xs: "center", lg: "left" } }}>
                <MKTypography
                  variant="h5"
                  fontWeight="bold"
                  mb={1}
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: { xs: "1.1rem", md: "1.25rem" },
                  }}
                >
                  Conecte-se com o Vianna
                </MKTypography>
                <MKTypography
                  variant="body2"
                  color="text"
                  sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" }, lineHeight: 1.7 }}
                >
                  Siga nossas redes sociais para mais detalhes sobre o workshop e outros eventos
                  exclusivos!
                </MKTypography>
              </Grid>
              <Grid
                item
                xs={12}
                lg={6}
                sx={{ textAlign: { xs: "center", lg: "right" }, mt: { xs: 2, lg: 0 } }}
              >
                <MKSocialButton
                  component="a"
                  href="https://www.instagram.com/pedrojeha?igsh=MWU4a3N1bDhqNzZsdQ=="
                  target="_blank"
                  color="instagram"
                  sx={{ fontSize: { xs: "0.8rem", md: "0.9rem" }, px: 2, py: 1 }}
                >
                  <i className="fab fa-instagram" style={{ marginRight: "6px" }} />
                  Seguir
                </MKSocialButton>
              </Grid>
            </Grid>
          </Container>
        </MKBox>
      </Card>
      <MKBox pt={3} px={1} mt={3}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
