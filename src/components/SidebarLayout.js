import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Nav, NavItem } from 'reactstrap';
import classNames from 'classnames';

const SidebarLayout = ({ location, isFloating }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              tableOfContents
            }
          }
        }
      }
    `}
    render={({ allMdx }) => {
      let finalNavItems;
      if (allMdx.edges !== undefined && allMdx.edges.length > 0) {
        allMdx.edges.map((item, index) => {
          let innerItems;
          if(item !== undefined) {
            if ((item.node.fields.slug === location.pathname) || ('/docs' + item.node.fields.slug) === location.pathname) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                  const itemId = innerItem.title ? innerItem.title.replace(/\s+/g, '').toLowerCase() : '#';
                  return (
                    <NavItem key={index} className="py-1">
                      <a href={`#${itemId}`} >{innerItem.title}</a>
                    </NavItem>
                  );
                });
              }
            }
          }
          if (innerItems)
            finalNavItems = innerItems;
          return item;
        });
      }
      const cl = classNames({
          'w-100 vh-100 overflow-auto ': true,
          'position-fixed': isFloating,
      })
      if (finalNavItems && finalNavItems.length) {
        return (
          <div style={{top: 0}} className={cl}>
             <Nav vertical className="pl-3" style={{paddingTop: isFloating ? '117px' : '0'}}>
                <div className="h4 text-white">CONTENTS</div>
                {finalNavItems}
             </Nav>
          </div>
        );
      } else {
        return (
          <Nav><ul></ul></Nav>
        );
      }
    }}
  />
);

export default SidebarLayout;
