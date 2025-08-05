import MKTypography from "components/MKTypography";
const date = new Date().getFullYear();

export default {
  brand: {
    route: "/",
  },
  socials: [],
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
