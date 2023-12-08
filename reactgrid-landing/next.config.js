const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  // theme: "./nextra/reactgrid-nextra-theme.tsx",
  themeConfig: "./nextra/theme.config.jsx",
});

module.exports = withNextra();

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
