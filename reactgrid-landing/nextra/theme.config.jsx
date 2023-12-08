const config = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – React Grid Docs",
    };
  },
  logo: <span></span>,
  project: {
    link: "https://github.com/silevis/reactgrid",
  },
  primaryHue: { dark: 143, light: 140 },
  primarySaturation: { dark: 30, light: 30 },
  footer: {
    component: ""
  },
  editLink: {
    component: ""
  }
};

export default config;
