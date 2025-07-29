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

// React hooks
import { useState, useEffect } from "react";

// QRCode library
import QRCode from "qrcode";

// Modal styles
const modalStyles = {
  modal: {
    display: "none",
    position: "fixed",
    zIndex: 1300,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: "rgba(0,0,0,0.5)",
    animation: "fadeInBackdrop 0.3s ease-in-out",
    "@keyframes fadeInBackdrop": {
      from: { opacity: 0 },
      to: { opacity: 1 },
    },
  },
  modalOpen: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    background: "linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)",
    margin: { xs: "5% auto", md: "10% auto" },
    padding: "30px",
    borderRadius: "12px",
    width: { xs: "90%", sm: "80%", md: "500px" },
    maxWidth: "600px",
    boxShadow: ({ boxShadows: { xl } }) => xl,
    transform: "scale(0.7)",
    animation: "popIn 0.3s ease-out forwards",
    "@keyframes popIn": {
      from: { transform: "scale(0.7)", opacity: 0 },
      to: { transform: "scale(1)", opacity: 1 },
    },
  },
  close: {
    color: "#555",
    float: "right",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "color 0.2s",
    "&:hover, &:focus": {
      color: "#000",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "info.main",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "grey.300",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1rem",
    transition: "border-color 0.2s, box-shadow 0.2s",
    "&:focus": {
      outline: "none",
      borderColor: "primary.main",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.3)",
    },
  },
  select: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "grey.300",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1rem",
    backgroundColor: "#fff",
    "&:focus": {
      outline: "none",
      borderColor: "primary.main",
      boxShadow: "0 0 5px rgba(0, 123, 255, 0.3)",
    },
  },
  button: {
    padding: "12px",
    borderRadius: "8px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1rem",
    fontWeight: 600,
    textTransform: "none",
    transition: "transform 0.2s, background-color 0.2s",
    "&:hover": {
      transform: "scale(1.03)",
      backgroundColor: "success.dark",
    },
  },
  paymentSection: {
    display: "none",
    marginTop: "20px",
    padding: "20px",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: ({ boxShadows: { md } }) => md,
  },
  paymentSectionVisible: {
    display: "block",
  },
  qrCodeContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#f9fafc",
    borderRadius: "8px",
    border: "1px solid",
    borderColor: "grey.200",
  },
  qrCode: {
    width: "200px",
    height: "200px",
    borderRadius: "8px",
  },
  successMessage: {
    display: "none",
    marginTop: "20px",
    padding: "15px",
    borderRadius: "8px",
    backgroundColor: "success.light",
    color: "success.main",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  successMessageVisible: {
    display: "block",
  },
  pixCopyPaste: {
    wordBreak: "break-all",
    fontSize: "0.85rem",
    marginTop: "15px",
    padding: "10px",
    backgroundColor: "#f0f4ff",
    borderRadius: "6px",
    fontFamily: "'Poppins', sans-serif",
    color: "text.secondary",
  },
  errorMessage: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "error.light",
    color: "error.main",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    textAlign: "center",
  },
};

function Information() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(25.0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [pixPayload, setPixPayload] = useState("");
  const [formError, setFormError] = useState("");

  // PIX configuration
  const pixKey = "11115977660"; // Client's CPF as PIX key
  const merchantName = "Pedro Jeha Vianna"; // Client's name, within 25-character limit

  // Calculate CRC16-CCITT
  const calculateCRC16 = (payload) => {
    let crc = 0xffff;
    for (let i = 0; i < payload.length; i++) {
      crc ^= payload.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        crc = crc & 0x8000 ? (crc << 1) ^ 0x1021 : crc << 1;
        crc &= 0xffff;
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
  };

  // Generate PIX payload (restored to working version with Mercado Pago CPF)
  const generatePixPayload = (amount, pixKey, merchantName) => {
    const formattedAmount = amount.toFixed(2).replace(".", ""); // e.g., 25.00 -> 2500
    const gui = "BR.GOV.BCB.PIX";
    const pixKeyField = `01${pixKey.length.toString().padStart(2, "0")}${pixKey}`; // CPF key
    const merchantAccount = `0014${gui}${pixKeyField}`; // Standard PIX key structure
    const merchantNameField = `59${merchantName.length.toString().padStart(2, "0")}${merchantName}`;
    const amountField = `54${formattedAmount.length.toString().padStart(2, "0")}${formattedAmount}`;
    const txid = `TXID${Date.now()}`.substring(0, 20); // Ensure txid is within 20 characters
    const txidField = `05${txid.length.toString().padStart(2, "0")}${txid}`;
    const additionalData = `62${txidField.length.toString().padStart(2, "0")}${txidField}`;

    const payload = [
      "000201", // Payload Format Indicator
      merchantAccount, // Merchant Account Information (PIX key)
      "52040000", // Merchant Category Code (generic)
      "5303986", // Currency (BRL)
      amountField, // Transaction Amount (no decimal)
      "5802BR", // Country Code
      merchantNameField, // Merchant Name
      "6008BeloHorizonte", // Merchant City
      additionalData, // Additional Data Field (TXID)
      "6304", // CRC16 placeholder
    ].join("");

    const crc = calculateCRC16(payload);
    return payload + crc;
  };

  // Generate QR code when payment is initiated
  useEffect(() => {
    if (isPaymentVisible) {
      const payload = generatePixPayload(total, pixKey, merchantName);
      console.log("PIX Payload:", payload); // Debug log
      setPixPayload(payload);
      QRCode.toDataURL(payload, { width: 200, height: 200, margin: 2 }, (err, url) => {
        if (!err) setQrCodeUrl(url);
        else setFormError("Erro ao gerar o QR code. Tente novamente.");
      });
    }
  }, [isPaymentVisible, total]);

  // Handle modal open
  const handleOpenModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    setFormError("");
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    setQuantity(qty);
    setTotal(qty * 25);
    setFormError("");
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setFormError("");
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError("O campo Nome é obrigatório.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setFormError("Por favor, insira um e-mail válido.");
      return false;
    }
    if (!formData.phone.trim()) {
      setFormError("O campo Celular é obrigatório.");
      return false;
    }
    return true;
  };

  // Handle proceed to payment
  const handleProceedPayment = async () => {
    setFormError("");
    if (!validateForm()) return;

    try {
      // Save to database
      const saveResponse = await fetch("/.netlify/functions/save-purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          quantity,
          total,
        }),
      });

      if (!saveResponse.ok) {
        const errorData = await saveResponse.json();
        throw new Error(errorData.error || "Falha ao salvar os dados da compra");
      }

      setIsPaymentVisible(true);
    } catch (error) {
      console.error("Erro ao salvar os dados:", error);
      setFormError("Erro ao salvar os dados. Tente novamente.");
    }
  };

  // Reset form
  const resetForm = () => {
    setQuantity(1);
    setTotal(25.0);
    setFormData({ name: "", email: "", phone: "" });
    setIsPaymentVisible(false);
    setQrCodeUrl("");
    setPixPayload("");
    setFormError("");
  };

  return (
    <MKBox component="section" py={8} my={8}>
      <Container>
        {/* Hero Section */}
        <Grid
          container
          spacing={3}
          sx={{
            mb: 8,
            textAlign: "center",
            opacity: 0,
            animation: "fadeIn 1s ease-in-out forwards",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "translateY(20px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
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
                        route: "#",
                        label: "GARANTIR VAGA",
                        onClick: handleOpenModal,
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
                      sx={{
                        fontSize: "1rem",
                        lineHeight: 1.7,
                        mb: 2,
                      }}
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
                      onClick={handleOpenModal}
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
            <MKBox sx={{ opacity: 0, animation: "fadeIn 1s ease-in-out 0.8s forwards" }}>
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
            <MKBox sx={{ opacity: 0, animation: "fadeIn 1s ease-in-out 1s forwards" }}>
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
            <MKBox sx={{ opacity: 0, animation: "fadeIn 1s ease-in-out 1.2s forwards" }}>
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
            <MKBox sx={{ opacity: 0, animation: "fadeIn 1s ease-in-out 1.4s forwards" }}>
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
                onClick={handleOpenModal}
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

        {/* Modal */}
        <MKBox
          sx={isModalOpen ? { ...modalStyles.modal, ...modalStyles.modalOpen } : modalStyles.modal}
        >
          <MKBox sx={modalStyles.modalContent}>
            <MKBox component="span" sx={modalStyles.close} onClick={handleCloseModal}>
              &times;
            </MKBox>
            <MKTypography
              variant="h2"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                mb: 3,
                fontSize: "1.8rem",
                color: "info.main",
              }}
            >
              Compra de Ingressos
            </MKTypography>
            <MKBox sx={modalStyles.form} display={isPaymentVisible ? "none" : "flex"}>
              <MKTypography component="label" htmlFor="quantity" sx={modalStyles.label}>
                Número de Ingressos (R$ 25,00 cada):
              </MKTypography>
              <MKBox
                component="select"
                id="quantity"
                value={quantity}
                onChange={handleQuantityChange}
                sx={modalStyles.select}
                required
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </MKBox>

              <MKTypography sx={modalStyles.label}>
                Total: R$ <span>{total.toFixed(2)}</span>
              </MKTypography>

              <MKTypography component="label" htmlFor="name" sx={modalStyles.label}>
                Nome:
              </MKTypography>
              <MKBox
                component="input"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                sx={modalStyles.input}
                required
              />

              <MKTypography component="label" htmlFor="email" sx={modalStyles.label}>
                E-mail (para receber o ingresso):
              </MKTypography>
              <MKBox
                component="input"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                sx={modalStyles.input}
                required
              />

              <MKTypography component="label" htmlFor="phone" sx={modalStyles.label}>
                Celular:
              </MKTypography>
              <MKBox
                component="input"
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
                sx={modalStyles.input}
                required
              />

              <MKButton
                variant="gradient"
                color="success"
                sx={modalStyles.button}
                onClick={handleProceedPayment}
              >
                Proceder ao Pagamento
              </MKButton>

              {formError && <MKTypography sx={modalStyles.errorMessage}>{formError}</MKTypography>}
            </MKBox>

            <MKBox
              sx={
                isPaymentVisible
                  ? {
                      ...modalStyles.paymentSection,
                      ...modalStyles.paymentSectionVisible,
                    }
                  : modalStyles.paymentSection
              }
            >
              <MKTypography
                variant="h3"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "1.25rem",
                  color: "info.main",
                }}
              >
                Pagamento via PIX (Mercado Pago)
              </MKTypography>
              <MKTypography
                variant="body2"
                sx={{
                  mt: 1,
                  fontFamily: "'Poppins', sans-serif",
                  color: "text.secondary",
                }}
              >
                Escaneie o QR Code abaixo para pagar via PIX. Após o pagamento, você receberá uma
                confirmação.
              </MKTypography>
              {qrCodeUrl && (
                <MKBox sx={modalStyles.qrCodeContainer}>
                  <MKBox
                    component="img"
                    src={qrCodeUrl}
                    alt="PIX QR Code"
                    sx={modalStyles.qrCode}
                  />
                </MKBox>
              )}
              <MKTypography sx={modalStyles.pixCopyPaste}>
                PIX Copia e Cola: {pixPayload}
              </MKTypography>
              {formError && <MKTypography sx={modalStyles.errorMessage}>{formError}</MKTypography>}
            </MKBox>

            <MKBox
              sx={
                isPaymentVisible
                  ? {
                      ...modalStyles.successMessage,
                      ...modalStyles.successMessageVisible,
                    }
                  : modalStyles.successMessage
              }
            >
              Em até 24h entraremos em contato via e-mail cadastrado.
            </MKBox>
          </MKBox>
        </MKBox>
      </Container>
    </MKBox>
  );
}

export default Information;
