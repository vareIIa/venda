// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoTickets from "assets/images/logo-tickets.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Vianna Tickets",
    image: logoTickets,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/ViannaTickets",
    },
    {
      icon: <TwitterIcon />,
      link: "https://twitter.com/ViannaTickets",
    },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/ViannaTickets",
    },
    {
      icon: <YouTubeIcon />,
      link: "https://www.youtube.com/channel/ViannaTickets",
    },
  ],
  menus: [
    {
      name: "Suporte",
      items: [
        { name: "Fale Conosco", href: "/contato" },
        { name: "Central de Ajuda", href: "/central-de-ajuda" },
        { name: "Reembolsos", href: "/reembolsos" },
        { name: "Dúvidas Frequentes", href: "/faq" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos os direitos reservados. Copyright © {date} Vianna Tickets.
    </MKTypography>
  ),
};
