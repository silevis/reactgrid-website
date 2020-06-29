import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Nav, NavItem } from 'reactstrap';
import classNames from 'classnames';

const DocsSideNav = ({ location, isFloating, docsRoute }) => (
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
        allMdx.edges.map(item => {
          let innerItems;
          if (item !== undefined) {
            if ((item.node.fields.slug === location.pathname) || (docsRoute + item.node.fields.slug) === location.pathname) {
              if (item.node.tableOfContents.items) {
                innerItems = item.node.tableOfContents.items.map((innerItem, index) => {
                  const itemId = innerItem.title ? innerItem.title.replace(/\s+/g, '').toLowerCase().replace(/\?/g, '') : '#';
                  return (
                    <NavItem key={index} className="py-1">
                      <a href={`#${itemId}`} className="text-primary">{innerItem.title}</a>
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
      const navWrapperClasses = classNames({
        'overflow-auto': true,
        'vh-100 position-sticky': isFloating,
      })
      if (finalNavItems && finalNavItems.length) {
        return (
          <div style={{ top: 0 }} className={navWrapperClasses}>
            <Nav vertical style={{ paddingTop: isFloating ? '102px' : '0' }}>
              <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.25)' }} className="pl-2">
                <h4>CONTENTS</h4>
                {finalNavItems}
              </div>
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

export default DocsSideNav;
