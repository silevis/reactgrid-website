import React from "react";
import { Link } from "gatsby";
import classNames from 'classnames';

import {
  NavItem,
} from "reactstrap";

const TreeNode = ({ className = '', setCollapsed, collapsed, url, lvl, title, proMark, items, location, docsRoute }) => {
  const isCollapsed = Object.keys(collapsed).includes(url) && collapsed[url];

  // const collapse = () => {
  //   setCollapsed(url);
  // }

  // const hasChildren = items.length > 0;

  const active = location && location.pathname === (docsRoute + url);
  const calculatedClassName = classNames({
    'nav-docs-item': true,
    className: true,
    'active': active
  });
  const calculatedTitleClassName = classNames({
    'font-weight-md-bold': lvl < 3,
    'font-weight-md-light': lvl >= 3,
  });

  return (
    <NavItem className={calculatedClassName}>
      {title && (
        <>
          {/* {
            <span onClick={collapse} className='collapser pr-1 float-left'>
              {!isCollapsed ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-down"></i>}
            </span>
          } */}
          <Link to={docsRoute + url} className="text-white d-inline-block">
            <h4 className="mb-0">
              <span className={calculatedTitleClassName} style={{ fontSize: '0.75em' }}>
                {title}
                {proMark && <i className="fas fa-tachometer-alt pl-2"></i>}
              </span>
            </h4>
          </Link>
        </>
      )}

      {!isCollapsed ? (
        <ul className={`${lvl > 1 ? 'pl-2' : ''} mb-0 list-unstyled`}>
          {items.map((item, idx) => {
            return (<TreeNode key={idx} setCollapsed={setCollapsed} lvl={lvl + 1} collapsed={collapsed}
              docsRoute={docsRoute} location={location} url={url} {...item} />
            )
          })}
        </ul>
      ) : null}
    </NavItem>
  );
}
export default TreeNode
