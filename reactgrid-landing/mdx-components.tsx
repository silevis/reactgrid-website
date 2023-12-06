import type { MDXComponents } from "mdx/types";
import { LiveCode } from "./components/LiveCode";
import { ReactGrid } from "./lib/ReactGrid3";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    // code: ({ children }) => <code style={{ color: "red" }}>{children}</code>,
    iframe: ({ children }) => (
      <iframe
        style={{
          width: "50px",
          borderRadius: "200px",
          background: "red",
          padding: "200px",
        }}
      >
        {children}
      </iframe>
    ),
    LiveCode,
    ReactGrid: (props) => <ReactGrid {...props} />,
    ...components,
  };
}
