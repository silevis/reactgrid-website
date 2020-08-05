export const getId = (children, replaceWith = "") => {
    let stringToParse = '';
    if (Array.isArray(children)) {
        stringToParse = children.reduce((acc, child) => acc + (child.props?.children || child || ''), '');
    } else {
        stringToParse = children;
    }
    return stringToParse.toString().replace(/ /g, replaceWith).toLowerCase().replace(/\?/g, '')
};