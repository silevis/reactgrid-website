---
id: getting-started
title: Getting Started
---

# Getting Started

In this guide, we'll walk through the process of building a simple React App using ReactGrid.

### Initialize a React App with ReactGrid

Let's create the basis for our App first:

```
npx create-react-app reactgrid-getting-started --typescript
cd reactgrid-getting-started
```

The only thing that’s missing from our project now is ReactGrid itself. To add it to the dependencies, simply run:

```
npm install @silevis/reactgrid
```

### Integrate ReactGrid into the App

Once ReactGrid is installed and ready, we can import it in the following way:

```tsx
// App.tsx
import * as React from "react";
import { render } from "react-dom";
import { ReactGrid, Column, Row } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
```

Our example requires **ReactGrid** component, two interfaces: [`Column`](/docs/4.0/7-api/0-interfaces/3-column/) , [`Row`](/docs/4.0/7-api/0-interfaces/2-row/) from `@silevis/reactgrid` and CSS styles from `@silevis/reactgrid/styles.css`.

### Define some data to display in the grid

Although we were able to create an empty ReactGrid, it wouldn't make much sense yet.
So let's define some data first, and then feed it into ReactGrid for display.
We're going to need two arrays. One for [`columns`](/docs/4.0/7-api/0-interfaces/3-column/) prop,
and the other for [`rows`](/docs/4.0/7-api/0-interfaces/2-row/).
At the top of the datatable we are going to display static cells that contain `Name` and `Surname` so we can define them now.
Don't worry about all the properties of [`columns`](/docs/4.0/7-api/0-interfaces/3-column/)
and [`rows`](/docs/4.0/7-api/0-interfaces/2-row/) objects now - we'll cover them later on.

```tsx
interface Person {
  name: string;
  surname: string;
}

const getPeople = (): Person[] => [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
  { name: "", surname: "" },
];

const getColumns = (): Column[] => [
  { columnId: "name", width: 150 },
  { columnId: "surname", width: 150 },
];

const headerRow: Row = {
  rowId: "header",
  cells: [
    { type: "header", text: "Name" },
    { type: "header", text: "Surname" },
  ],
};
```

### Generate your rows

ReactGrid `rows` prop expects an array of rows that are compatible with imported
[`rows`](/docs/4.0/7-api/0-interfaces/2-row/)s interface.
As you see this function returns the header row and mapped people array to ReactGrid's
[`Rows`](/docs/4.0/7-api/0-interfaces/2-row/).

```tsx
const getRows = (people: Person[]): Row[] => [
  headerRow,
  ...people.map<Row>((person, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: person.name },
      { type: "text", text: person.surname },
    ],
  })),
];
```

### Pass the data to ReactGrid

We've got everything we need to see ReactGrid in action.
It's finally time to use the ReactGrid component we imported earlier, and give it the data
we defined in the previous steps. This is easy, and can be done like that:

```tsx
function App() {
  const [people] = React.useState<Person[]>(getPeople());

  const rows = getRows(people);

  return <ReactGrid rows={rows} columns={columns} />;
}
```

### Putting it all together

After having followed this guide, your `App.tsx` file should look more or less like this:

```tsx
import * as React from "react";
import { render } from "react-dom";
import { ReactGrid, Column, Row } from "@silevis/reactgrid";
import "@silevis/reactgrid/styles.css";
import "./styles.css";

interface Person {
  name: string;
  surname: string;
}

const getPeople = (): Person[] => [
  { name: "Thomas", surname: "Goldman" },
  { name: "Susie", surname: "Quattro" },
  { name: "", surname: "" },
];

const getColumns = (): Column[] => [
  { columnId: "name", width: 150 },
  { columnId: "surname", width: 150 },
];

const headerRow: Row = {
  rowId: "header",
  cells: [
    { type: "header", text: "Name" },
    { type: "header", text: "Surname" },
  ],
};

const getRows = (people: Person[]): Row[] => [
  headerRow,
  ...people.map<Row>((person, idx) => ({
    rowId: idx,
    cells: [
      { type: "text", text: person.name },
      { type: "text", text: person.surname },
    ],
  })),
];

function App() {
  const [people] = React.useState<Person[]>(getPeople());

  const rows = getRows(people);
  const columns = getColumns();

  return <ReactGrid rows={rows} columns={columns} />;
}

render(<App />, document.getElementById("root"));
```

You can now start the App locally with:

```bash
npm start
```

Or simply play around with the interactive demo below:

<iframe
  src="https://codesandbox.io/embed/reactgrid-getting-started-0754c?autoresize=1&fontsize=14&hidenavigation=1&theme=dark"
  style={{
    width: "100%",
    height: "400px",
    border: 0,
    borderRadius: "4px",
    overflow: "hidden",
  }}
  title="reactgrid-getting-started"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
>
</iframe>
```