import React from "react";
import {  Link } from "gatsby"

import {
  NavItem,
} from "reactstrap";

const TreeNode = ({className = '', setCollapsed, collapsed, url, title, items, location, ...rest}) => {

  const isCollapsed = collapsed[url];
  const collapse = () => {
    setCollapsed(url);
  }
  
  const hasChildren = items.length !== 0;
  const active = location && (location.pathname === ('/docs' + url));
  const calculatedClassName = `nav-docs-item ${active ? 'active' : ''} ${className}`;

  return (
    <NavItem className={calculatedClassName}>
      {title && (
        <>
          
          <Link to={'/docs' + url} className="text-white  d-inline-block">
            <h4 className="mb-0 py-1">
              <span onClick={collapse} className='collapser pr-1 float-left'> 
              {!isCollapsed ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-down"></i>}
              </span>
            {title} 
            </h4>
          </Link>
        </>
      )}
      
      {!isCollapsed && hasChildren ? (
        <ul className="pl-4 mb-0 list-unstyled">
          {items.map((item, idx) => {
              return ( <TreeNode key={idx} setCollapsed={setCollapsed} collapsed={collapsed} location={location} url={url} {...item} />
          )})}
        </ul>
      ) : null}
    </NavItem>
  );
}
export default TreeNode
