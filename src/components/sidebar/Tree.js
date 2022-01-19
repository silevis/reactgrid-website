import React, { useState } from 'react';
import TreeNode from './TreeNode';

import {
  Nav
} from "reactstrap";

const calculateTreeData = (navOrder, edges, version) => {

  const originalData = true ? edges.filter(({ node: { fields: { slug } } }) => slug !== '/') : edges;
  const tree = originalData.reduce((accu, { node: { fields: { slug }, frontmatter: { title, proMark } } }) => {
    const parts = slug.split('/');
    if (parts[1] !== version) return accu;
    let { items: prevItems } = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({ label }) => label === part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp)
      }
      prevItems = tmp.items;
    }
    const existingItem = prevItems.find(({ label }) => label === parts[parts.length - 1]);
    if (existingItem) {
      existingItem.url = slug;
      existingItem.title = title;
      existingItem.proMark = proMark;
    } else {
      prevItems.push({
        label: parts[parts.length - 1],
        url: slug,
        items: [],
        title,
        proMark
      });
    }
    return accu;
  }, { items: [] });
  const tmp = [...navOrder];
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');
    let { items: prevItems } = accu;
    for (const part of parts.slice(1, -1)) {
      let tmp = prevItems.find(({ label }) => label === part);
      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp)
      }
      prevItems = tmp.items;
    }
    return accu;
  }, tree);
}


const Tree = ({ edges, currentLocation, navOrder, version, docsRoute }) => {
  const [treeData] = useState(() => calculateTreeData(navOrder, edges, version));
  const [collapsed, setCollapsed] = useState({})
  const toggle = (url) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  }

  return (
    <Nav card vertical>
      <TreeNode lvl={0} setCollapsed={toggle} collapsed={collapsed} url={currentLocation.pathname}
        currentLocation={currentLocation} docsRoute={docsRoute} items={treeData.items[0].items} />
    </Nav>
  );
}

export default Tree 
