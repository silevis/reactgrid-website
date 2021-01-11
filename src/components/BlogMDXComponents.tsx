import { MDXProvider } from "@mdx-js/react";
import React from 'react';
import { Link } from "gatsby";
import {
  Table,
  Alert,
} from 'reactstrap';
import { LiveCode } from './LiveCode';
import Gist from 'react-gist';

export default function BlogMDXComponents({ children }) {
  return (
    <MDXProvider
      components={{
        Alert: props => <Alert {...props} transition={{ baseClass: '', timeout: 0 }} >{props.children}</Alert>,
        LiveCode,
        Gist,
        h1: props => (<>
          <h1 {...props}
            className="font-weight-bold pt-4 pb-3 mb-2"
            style={{ lineHeight: '3rem', borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {props.children}
          </h1>
        </>),
        h2: props => (<>
          <h2 {...props}
            className="font-weight-bold pt-4 pb-2 mb-2"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            {props.children}
          </h2>
        </>
        ),
        p: props => (
          <p
            {...props}
            style={{ paddingBottom: '1em', lineHeight: '2rem', fontSize: '1.1rem' }}
          >
            {props.children}
          </p>
        ),
        table: props => <div style={{ overflowX: 'auto' }}><Table {...props}>{props.children}</Table></div>,
        th: props => <th {...props} className="font-weight-bold">{props.children}</th>,
        li: props => <li {...props} style={{ fontSize: '1.1rem', lineHeight: '2rem' }}>{props.children}</li>,
        a: props => <Link {...props} to={props.href} className={props.className}> {props.children} </Link>,
        img: props => <div className='d-flex justify-content-center'><img className='img-raised' {...props}>{props.children}</img> </div>
      }}
    >
      {children}
    </MDXProvider >
  )
}