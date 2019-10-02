import React from "react";
import {  Link } from "gatsby";
import classNames from 'classnames';

import {
  NavItem,
} from "reactstrap";

const TreeNode = ({className = '', setCollapsed, collapsed, url, lvl, title, items, location, docsRoute, ...rest}) => {
  const isCollapsed = Object.keys(collapsed).includes(url) && collapsed[url];
  

  // const collapse = () => {
  //   setCollapsed(url);
  // }
  
  const hasChildren = items.length !== 0;
  
  const active = location && location.pathname === (docsRoute + url);
  const calculatedClassName = classNames({
    'nav-docs-item': true,
    className: true,
    'active': active
  });
  const calculatedTitleClassName = classNames({
    'font-weight-bold': lvl < 3,
    'font-weight-light': lvl >= 3,
  });

  return (
    <NavItem className={calculatedClassName}>
      {title && (
        <>
          {/* <span onClick={collapse} className='collapser pr-1 float-left'> 
            {!isCollapsed ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-down"></i>}
          </span> */}
          <Link to={docsRoute + url} className="text-white d-inline-block">
            <h4 className="mb-0 py-1">
              <span className={calculatedTitleClassName} style={{fontSize: lvl >= 3 ? '0.9em' : '' }}>{title}</span>
            </h4>
          </Link>
        </>
      )}
  
      {!isCollapsed && hasChildren ? (
        <ul className={`${lvl > 1 ? 'pl-2' : '' } mb-0 list-unstyled`}>
          {items.map((item, idx) => {
              return ( <TreeNode  key={idx} setCollapsed={setCollapsed} lvl={lvl+1} collapsed={collapsed} 
                                  docsRoute={docsRoute} location={location} url={url} {...item} />
          )})}
        </ul>
      ) : null}
    </NavItem>
  );
}
export default TreeNode
