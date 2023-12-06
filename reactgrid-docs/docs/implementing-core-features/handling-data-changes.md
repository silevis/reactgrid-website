---
posttype: "docs"
title: Handling data changes
metaTitle: "Handling data changes"
metaDescription: "ReactGrid docs"
sidebar_position: 1
---

#### Idea of handling data changes

1. A user changes the value of a cell. Among others, it could mean that the user has:
   - committed a new value into a cell by cell editor,
   - used a fill handle,
   - pasted some data into the cell matrix,
   - interacted with a clickable cell (e. g. expanded chevron cell).
2. ReactGrid fires the `onCellsChanged` event
3. Your handler function processes the event and updates the data
4. The `ReactGrid` component receives new data and gets rerendered

By default, the data grid will behave as if it was in a "read-only" mode.
To support dynamic data editing, you will have to handle the `onCellsChanged` event yourself.

#### When is my handler function called?

1. Changes have been committed after cell editing.
2. After pasting with the shortcut or the context menu.
3. After fill handle action.

#### Handling changes in your project

This part is based on [getting started](/docs/4.0/1-getting-started/).

Let's start with updating imports:

```ts
import {
  ReactGrid,
  Column,
  Row,
  CellChange,
  TextCell,
} from "@silevis/reactgrid";
```

#### Sample change handler function

The function receives an array describing all of the changes made to the data grid's cells and data on the basis of which
ReactGrid's rows were generated.
We expect that the incoming changes affect `TextCell`, so the changes were marked by a following interface: `CellChange<TextCell>[]`.
Given that information, we find the row and the column affected by each change,
and then replace an appropriate cell text with a new one.
We can declare a basic handler function like this:

```tsx
const applyChangesToPeople = (
  changes: CellChange<TextCell>[],
  prevPeople: Person[]
): Person[] => {
  changes.forEach((change) => {
    const personIndex = change.rowId;
    const fieldName = change.columnId;
    prevPeople[personIndex][fieldName] = change.newCell.text;
  });
  return [...prevPeople];
};
```

Let's pass the handler function to our ReactGrid component:

```tsx
function App() {
  const [people, setPeople] = React.useState<Person[]>(getPeople());

  const rows = getRows(people);
  const columns = getColumns();

  const handleChanges = (changes: CellChange<TextCell>[]) => {
    setPeople((prevPeople) => applyChangesToPeople(changes, prevPeople));
  };

  return (
    <ReactGrid rows={rows} columns={columns} onCellsChanged={handleChanges} />
  );
}
```

#### Live demo

And here's an interactive demo showing the event handler in action.
Notice how it is now possible to edit the data not only by typing new values into the cells,
but also by using the fill handle or by pasting data from the clipboard.

<iframe src="https://codesandbox.io/embed/reactgrid-handling-changes-crzfx?fontsize=14&hidenavigation=1&theme=dark"
  style={{ width: '100%', height: '500px', border: '0', borderRadius: '4px', overflow: 'hidden'}}
  title="reactgrid-handling-changes"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>