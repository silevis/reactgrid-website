import React, {useState} from 'react';
import TreeNode from './TreeNode';

import {
  Nav
} from "reactstrap";

const calculateTreeData = (navOrder, edges) => {
  const originalData = false ? edges.filter(({node: {fields: {slug}}}) => slug !== '/') : edges;
  const tree = originalData.reduce((accu, {node: {fields: {slug}, frontmatter : {title}}}) => {
    const parts = slug.split('/');
    let {items: prevItems} = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({label}) => label === part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = {label: part, items: []};
        prevItems.push(tmp)
      }
      prevItems = tmp.items;
    }
    const existingItem = prevItems.find(({label}) => label === parts[parts.length - 1]);
    if (existingItem) {
      existingItem.url = slug;
      existingItem.title = title;
    } else {
      prevItems.push({
        label: parts[parts.length - 1],
        url: slug,
        items: [],
        title
      });
    }
    return accu;
  }, {items: []});
  const tmp = [...navOrder];
  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');
    let {items: prevItems} = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({label}) => label === part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = {label: part, items: []};
        prevItems.push(tmp)
      }
      prevItems = tmp.items;
    }
    // sort items alphabetically.
    prevItems.map((item) => {
      item.items = item.items
        .sort(function (a, b) {
          if (a.label < b.label)
            return -1;
          if (a.label > b.label)
            return 1;
          return 0;
        });
      return 0;
    })
    const index = prevItems.findIndex(({label}) => label === parts[parts.length - 1]);
    accu.items.unshift(prevItems.splice(index, 1)[0]);
    return accu;
  }, tree);
}


const Tree = ({edges, location, navOrder}) => {
  const [treeData] = useState(() => {
    return calculateTreeData(navOrder, edges);
  });
  
  const [collapsed, setCollapsed] = useState({});
  const toggle = (url) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  }
  return (
    <>
      <Nav className="flex-column pl-0">
        <TreeNode className={`${false ? 'showFrontLine' : 'hideFrontLine'} firstLevel`}
                  setCollapsed={toggle} collapsed={collapsed} url={location.pathname} location={location} {...treeData}/>
      </Nav>
    </>
  );
}

export default Tree 