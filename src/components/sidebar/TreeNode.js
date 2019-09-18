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
  
  const active = location && (location.pathname === (url));
  const calculatedClassName = `item ${active ? 'active' : ''} py-1 ${className}`;
  
  return (
    <NavItem className={calculatedClassName}>
      {title ? (
        <span onClick={collapse} className='collapser pr-2'> {!isCollapsed ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-down"></i>}</span>
      ) : null}

      {title && (<Link to={'/docs' + url} className="text-white  d-inline-block">{" "}<h4 className="mb-0">{title}</h4></Link>)}
      
      {!isCollapsed && hasChildren ? (
        <ul className="pl-4 list-unstyled">
          {items.map((item, idx) => (
            <TreeNode key={idx} setCollapsed={setCollapsed} collapsed={collapsed} {...item} />
          ))}
        </ul>
      ) : null}
    </NavItem>
  );
}
export default TreeNode
