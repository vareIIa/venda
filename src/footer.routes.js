// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images

const date = new Date().getFullYear();

export default {
  brand: {
    route: "/",
  },
  socials: [
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/pedrojeha",
    },
  ],
  menus: [
    {
      name: "Suporte",
      items: [
        {
          name: "Fale Conosco",
          href: "https://www.instagram.com/pedrojeha",
        },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Todos os direitos reservados. Copyright © {date} Jota TEC
    </MKTypography>
  ),
};
