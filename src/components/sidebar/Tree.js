import React, {useState} from 'react';
import TreeNode from './TreeNode';

import {
  Nav
} from "reactstrap";

const calculateTreeData = (navOrder, edges, version) => {
  const originalData = true ? edges.filter(({node: {fields: {slug}}}) => slug !== '/') : edges;
  const tree = originalData.reduce((accu, {node: {fields: {slug}, frontmatter : {title}}}) => {
    const parts = slug.split('/');
    if (parts[1] !== version) return accu;
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


const Tree = ({edges, location, navOrder, version, docsRoute}) => {
  const [treeData] = useState(() => {
    return calculateTreeData(navOrder, edges, version);
  });
  const lvl = 0;
  const [collapsed, setCollapsed] = useState({})
  const toggle = (url) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  }

  // let items = edges.map(item => {
  //   return item.node
  // }).filter(item => {
  //   return item.fields.slug.split('/')[1] === version
  // });


  // items = items.filter(item => {
  //   console.log(item.fields.slug.split('/'));
  //   return item.fields.slug.split('/')[2] === '1.0.3'
  // });

  

  return (
    <>
      <Nav className="" card vertical>
      {treeData.items.map((item, idx) => {
        return <TreeNode key={idx} lvl={lvl} setCollapsed={toggle} collapsed={collapsed} url={location.pathname} 
                location={location} docsRoute={docsRoute} items={item.items}/>
      })}
      </Nav>
    </>
  );
}

export default Tree 
