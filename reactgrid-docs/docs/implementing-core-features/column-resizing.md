---
posttype: "docs"
title: Column resizing
metaTitle: "Column resizing"
metaDescription: "ReactGrid docs"
sidebar_position: 2
---

import { ReactGrid } from "@silevis/reactgrid";

### Allow column to be resized

For each column which should be resizable, add the `resizable` property
to the corresponding column object and set its value to `true`.

```tsx
const getColumns = (): Column[] => [
  { columnId: "name", width: 150, resizable: true }, //highlight-line
  { columnId: "surname", width: 150, resizable: true }, //highlight-line
];
```

If you hover over the vertical border line between the column headers,
you will see your mouse pointer change to indicate that a column can be resized.
However, you'll quickly notice that the column resizing functionality doesn't work.
Why is that? We still need to handle the events fired by ReactGrid when a column is being resized.
Similar to how we handled data changes in [handling changes](/docs/4.0/2-implementing-core-features/1-handling-changes/),
we can also define a handler function for that and pass it to our ReactGrid component.

### `useState` hook for columns storing

```tsx
function App() {
  const [people] = React.useState<Person[]>(getPeople());
  const [columns, setColumns] = React.useState<Column[]>(getColumns()); //highlight-line

  const rows = getRows(people);

  return <ReactGrid rows={rows} columns={columns} />;
}
```

### Implement the handler function

`handleColumnResize` handles the event when its finished. Knowing the column `Id` and its new width, we can apply
changes by calling `setColumns` function and returning array of updated columns (width/widths).

```tsx
function App() {
  const [people] = React.useState<Person[]>(getPeople());
  const [columns, setColumns] = React.useState<Column[]>(getColumns());

  const rows = getRows(people);

  const handleColumnResize = (ci: Id, width: number) => {
    setColumns((prevColumns) => {
      const columnIndex = prevColumns.findIndex((el) => el.columnId === ci);
      const resizedColumn = prevColumns[columnIndex];
      const updatedColumn = { ...resizedColumn, width };
      prevColumns[columnIndex] = updatedColumn;
      return [...prevColumns];
    });
  };

  return (
    <ReactGrid
      rows={rows}
      columns={columns}
      onColumnResized={handleColumnResize}
    />
  );
}
```

#### Live demo

Let's check the results:

<iframe src="https://codesandbox.io/embed/x6tdvf?view=Editor+%2B+Preview&module=%2Fsrc%2Findex.tsx"
     style={{
        width: "100%",
        height: "400px",
        border: 0,
        borderRadius: "4px",
        overflow: "hidden",
    }}
     title="React Typescript (forked)"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>
