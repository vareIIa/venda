/**
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
import Icon from "@mui/material/Icon";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";

const routes = [
  {
    name: "Suporte",
    icon: <Icon>support</Icon>,
    dropdown: true,
    collapse: [
      {
        name: "Suporte via Whatsapp",
        route: "",
        component: <AboutUs />,
      },
      {
        name: "Suporte via Instagram",
        route: "/pages/landing-pages/contact-us",
        component: <ContactUs />,
      },
      {
        name: "Suporte Técnico",
        route: "/pages/landing-pages/author",
        component: <Author />,
      },
    ],
  },
];

export default routes;
