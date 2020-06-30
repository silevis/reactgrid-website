import React from "react";
import { Link } from "gatsby";
import classNames from 'classnames';
import {
  NavItem,
} from "reactstrap";

const TreeNode = ({ setCollapsed, collapsed, url, lvl, title, proMark, items, currentLocation, docsRoute }) => {
  const isCollapsed = Object.keys(collapsed).includes(url) && collapsed[url];
  // const collapse = () => setCollapsed(url);
  // const hasChildren = items.length > 0;

  const active = (currentLocation && currentLocation.pathname === (docsRoute + url));
  const calculatedClassName = classNames({
    'nav-docs-item': true,
    'active': active
  });
  const calculatedTitleClassName = classNames({
    'font-weight-bold': lvl < 3,
  });

  return (
    <NavItem className={calculatedClassName}>
      {title && (
        <>
          {/* {hasChildren &&
            <span onClick={collapse} className='collapser pr-1 float-left' role='button'>
              {!isCollapsed ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-down"></i>}
            </span>
          } */}
          <Link to={docsRoute + url}>
            <h4 className="mb-0">
              <span className={calculatedTitleClassName} style={{ fontSize: '0.8em' }}>
                {title}
                {proMark && <i className="fas fa-tachometer-alt pl-2"></i>}
              </span>
            </h4>
          </Link>
        </>
      )}
      {!isCollapsed ? (
        <ul className={`${lvl > 1 ? 'pl-2' : ''} mb-0 list-unstyled`}>
          {items.map((item, idx) => (
            <TreeNode key={idx} setCollapsed={setCollapsed} lvl={lvl + 1} collapsed={collapsed}
              docsRoute={docsRoute} currentLocation={currentLocation}  {...item} />
          ))}
        </ul>
      ) : null}
    </NavItem>
  );
}

export default TreeNode;
