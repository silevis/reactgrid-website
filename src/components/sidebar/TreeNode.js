import React from "react";
import {  Link } from "gatsby"

import {
  Button,
} from "reactstrap";

const TreeNode = ({className = '', setCollapsed, collapsed, url, title, items, location, ...rest}) => {
  const isCollapsed = collapsed[url];
  const collapse = () => {
    setCollapsed(url);
  }
  const hasChildren = items.length !== 0;
  
  const active = location && (location.pathname === url || location.pathname === (url));
  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;
  return (
    <li className={calculatedClassName}>
      {title  ? (
        <Button onClick={collapse} className='collapser'> {!isCollapsed ? <i class="fas fa-chevron-right"></i> : <i class="fas fa-chevron-down"></i>}</Button>
      ) : null}

      {title && (<Link to={'/docs' + url}>{title}</Link>)}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, idx) => (
            <TreeNode key={idx} setCollapsed={setCollapsed} collapsed={collapsed} {...item} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
export default TreeNode
