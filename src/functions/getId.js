export const getId = (children, replaceWith = '') => {
    const stringToParse = Array.isArray(children) ? children.reduce((acc, child) => acc + (child.props?.children || child || ''), '') : children;
    return stringToParse?.toString().replace(/ /g, replaceWith).toLowerCase().replace(/\?/g, '')
};