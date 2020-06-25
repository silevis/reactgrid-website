import { MDXProvider } from "@mdx-js/react";
import React from 'react';
import { Link } from "gatsby";
import {
  Table,
  Alert,
} from 'reactstrap';
import { LiveCode } from './LiveCode';
import { getId } from './../functions/getId';


export default function CustomMDXComponents({ children }) {
  return (
    <MDXProvider
      components={{
        Alert,
        LiveCode,
        h1: props => (
          <>
            <span className="anchor" id={getId(props.children)}></span>
            <h1 {...props} className="pt-4 mb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5em' }}>
              {props.children}
            </h1>
          </>
        ),
        h2: props => (
          <>
            <span className="anchor" id={getId(props.children)}></span>
            <h2 {...props} className="pt-4 mb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.3em' }}>
              {props.children}
            </h2>
          </>
        ),
        h3: props => (
          <>
            <span className="anchor" id={getId(props.children)}></span>
            <h3 {...props} className="pt-4 mb-2" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.3em' }}>
              {props.children}
            </h3>
          </>
        ),
        h4: props => (
          <>
            <span className="anchor" id={getId(props.children)}></span>
            <h4 {...props} style={{ paddingBottom: '0.3em' }}>
              {props.children}
            </h4>
          </>
        ),
        h5: props => (
          <>
            <span className="anchor" id={getId(props.children)}></span>
            <h5 {...props} style={{ paddingBottom: '0.3em' }}>
              {props.children}
            </h5>
          </>
        ),
        h6: props => (
          <>
            <span className="anchor" id={getId(props.children)}></span>
            <h6 {...props} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.3em' }}>
              {props.children}
            </h6>
          </>
        ),
        p: props => <p {...props} style={{ paddingBottom: '1em', lineHeight: '2em' }}>{props.children}</p>,
        table: props => <div style={{ overflowX: 'auto' }}><Table {...props}>{props.children}</Table></div>,
        th: props => <th {...props} className="font-weight-bold">{props.children}</th>,
        li: props => <li {...props}><p>{props.children}</p></li>,
        a: props => (
          <Link {...props} to={props.href} className={props.className}>
            {props.children}
          </Link>
        ),
      }}
    >
      {children}
    </MDXProvider>
  )
}