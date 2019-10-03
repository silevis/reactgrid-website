import { MDXProvider } from "@mdx-js/react";
import React from 'react';
import { Table } from 'reactstrap';
export default function CustomMDXComponents({ children }) {
  return (
    <MDXProvider
      components={{
        h1: props => 
          <h1 {...props} 
            style={{borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.5em'}} 
            id={props.children && props.children.toString().replace(/ /g,"").toLowerCase()}>
            {props.children}
          </h1>,
        h2: props => 
          <h2 {...props}
            id={props.children && props.children.toString().replace(/ /g,"").toLowerCase()}
            style={{borderBottom: '1px solid rgba(255, 255, 255, 0.1)', paddingBottom: '0.3em'}} >
            {props.children}
          </h2>,
        h3: props => <h3 {...props} id={props.children && props.children.toString().replace(/ /g,"").toLowerCase()}>{props.children}</h3>,
        h4: props => <h4 {...props} id={props.children && props.children.toString().replace(/ /g,"").toLowerCase()}>{props.children}</h4>,
        h5: props => <h5 {...props} id={props.children && props.children.toString().replace(/ /g,"").toLowerCase()}>{props.children}</h5>,
        h6: props => <h6 {...props} id={props.children && props.children.toString().replace(/ /g,"").toLowerCase()}>{props.children}</h6>,
        p:  props => <p {...props} style={{paddingBottom: '1em'}}>{props.children}</p>,
        table: props => <Table {...props}>{props.children}</Table>,
        th: props => <th {...props} className="font-weight-bold">{props.children}</th>,
        li: props => <li {...props}><p>{props.children}</p></li>,
      }}
    >
      {children}
    </MDXProvider>
  )
}