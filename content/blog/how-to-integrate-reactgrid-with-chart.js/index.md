---
posttype: "blog"
title: How to integrate ReactGrid with Chart.js?
description: ""
canonicalUrl: ""
date: "2020-11-13"
tags:
  ["Reactjs", "JavaScript", "DataGrid", "DataTable", "ReactGrid", "Chart.js"]
thumbnail: "./Integrate ReactGrid with Chart.js.png"
author: "Patryk Eliasz"
authorImg: "./../../authors/silevis.png"
published: false
---

ReactGrid was designed with idea of not only displaying data, but also entering them in a spreasheet like way.

This guide show you how to integrate with well-known Javascript library - Chart.js. Before we get started lets write our prequisites:

- displaying real data on line chart - our data comes from audiometr device with is used for hearing test
- ReactGrid for display all and update the data,
- Chart.js visualize current data state as linear chart.

## Why ReactGrid?

ReactGrid don't care about your data schema, you can easily map your data to our component and then interact with your app.
ReactGrid integrates perfectly if you don't need whole spreadsheet-like formulas boilerplate but you looking for the same user experience on any device.

## Let's code!

##### Define usefull interfaces and types

At the begining we need do decrare few interfaces and types that helps us to keep everyfing in right place and order.
In this particullar example we know all about the data that we want to process. A good idea is to 'be narrow' as possible.

`gist:patryk0493/c314344a4789ac9f4cb25483c1656c7c#interfaces.ts`

##### Map the data

Laying on this interface now we can introduce `getColumns`. In our app we got a "Line" column, and after that we got columns that are related with particular frequery from 0Hz to 16000Hz.

`gist:patryk0493/cc2b0f02403956f7578205c84a137a2a#columns.ts`

The next stage is mapping all the rows. We make it in similar way to previous examples.

```ts
export const rowsMap: RowsMap = {
  hearing_aid: "Hearing aid (device)",
  blue: "Blue Line",
  aid_higher: "Hearing aid higher",
  aid_lower: "Hearing aid lower",
  dotted_line_higher: "Dotted line higher",
  dotted_line_lower: "Dotted line lower",
  pattern_line: "Pattern line",
}
```

##### Define the data

As we defined our data, it's time to define our data that we working on. `getRawData` function returns an object that every key must exitsts in `RowsMap` interface.
Each key of this object contains an array of `Freq` objects

`gist:patryk0493/091dc8ddd23fe5b43a0522e485eb6b5f#getRawData.ts`

##### Map the data

Now we are ready to generate rows that by direcly feed into ReactGrid. Each row constain the same amount of cells, but all ot then can be arbitrary placed in any order.

```ts
export const getRows = (
  data: Data,
  columnsOrder: ColumnKey[] = [
    "line",
    "0",
    "125",
    "250",
    "500",
    "1000",
    "2000",
    "4000",
    "8000",
    "16000",
  ],
  rowsOrder: RowKey[] = [
    "hearing_aid",
    "blue",
    "aid_higher",
    "aid_lower",
    "dotted_line_higher",
    "dotted_line_lower",
    "pattern_line",
  ]
): Row<NumberCell | TextCell | HeaderCell>[] =>
  rowsOrder.map<Row<NumberCell | TextCell | HeaderCell>>(rowKey => {
    const item = data[rowKey]
    return {
      rowId: rowKey,
      height: 35,
      cells: [
        { type: "text", text: rowsMap[rowKey], nonEditable: true },
        ...columnsOrder
          .filter(column => column !== "line")
          .map<NumberCell>(column => ({
            type: "number",
            value: item.find(freqSample => compare(freqSample, column)).value,
          })),
      ],
    }
  })
```

##### The main component - `Audiogram`

It is time to create main the component - `Audiogram` and wrap up already written code. As you can see we stored our data inside React `useState` hook. ReactGrid always exprects two props - `columns` (they are constant and doesn't change over tive) and `rows` (they are calculated every time the `Audiogram` component is rerendered).

```tsx
const Audiogram: React.FC<AudiogramProps> = ({
  color = "#000000",
  title = "AUDIOGRAM: ReactGrid + Chart.js app",
}) => {
  const [rawData, setRawData] = React.useState(getRawData())
  const columns = getColumns()
  const rows = getRows(rawData)

  return (
    <div className="chart" style={{ width: 800 }}>
      <ReactGrid rows={rows} columns={columns} />
    </div>
  )
}

export default Audiogram
```

All that's left is to render the component with:

```tsx
import * as React from "react";
import { render } from "react-dom";
import Audiogram from "./Audiogram";
import "./styles.css";

render(<Audiogram color="#107C41" />, document.getElementById("root"));
```

![ReactGrid displaying the data](./only-grid.png)

There are two things left to do:

1. Add a header row to mark the data (devices and all the frequencies);
2. Add possibility to edit data with ReactGrid's cell editor

##### Adding the header row

To add it we have to create a short function called `getHeaderRow`. As an argument it gets a column order (as keys of columns) and returns row object that contains only cell of `header` type. We also added some green background to those cells.

```ts
import { HeaderCell, Row } from "@silevis/reactgrid"
import { columnMap } from "./columns"
import { ColumnKey } from "./interfaces"

export const getHeaderRow = (columnsOrder: ColumnKey[]): Row<HeaderCell> => ({
  rowId: "headerRow",
  height: 50,
  cells: columnsOrder.map<HeaderCell>(columnKey => ({
    type: "header",
    text: columnMap[columnKey],
    style: {
      background: columnKey !== "line" ? "#1DA259" : "#107C41",
      color: "white",
    },
  })),
})
```

![ReactGrid displaying the data](./reactgrid-with-header.png)

##### Editing frequency values in cell editor

At this moment ReactGrid's behaves as a read-only. 
To change that we updated `Audiogram` component by adding our handler function called `handleChanges`. 
We expect that only `NumberCell` will be changed, therefore we marked `changes` argument as `CellChange<NumberCell>[]`. 
Our task is to change data on basis ReactGrid was rendered.

Cell editor opens when it receives double-click action or Enter key is pressed. 
Then you can type new value and then commit change. 
If we `console.log(changes)` we get array of objects as shown below:

```json
[
  {
    "type": "number",
    "columnId": "250",
    "rowId": "aid_lower",
    "newCell": {
      "type": "number",
      "text":"45",
      "value": 45
    },
    "previousCell": {
      "type": "number",
      "text": "0",
      "value": 0
    },
  }
]
```

To change our raw data we have find `rowId` where the change take place. 
Then loop over all frequency samples and apply new value (`change.newCell.value`) to appropriate cell or just return without changes.

```tsx
const Audiogram: React.FC<AudiogramProps> = ({
  color = "#000000",
  title = "AUDIOGRAM: ReactGrid + Chart.js app",
}) => {
  const [rawData, setRawData] = React.useState(getRawData())
  const columns = getColumns()
  const rows = getRows(rawData)

  const handleChanges = (changes: CellChange<NumberCell>[]) =>
    setRawData((prevRawData) => {
      changes.forEach((change) => {
        prevRawData[change.rowId] = prevRawData[
          change.rowId
        ].map((freqSample) =>
          freqSample.freq === columnMap[change.columnId]
            ? { ...freqSample, value: change.newCell.value }
            : freqSample
        );
      });
      return { ...prevRawData };
    });

  return (
    <div className="chart" style={{ width: 800 }}>
      <ReactGrid rows={rows} columns={columns} onCellsChanged={handleChanges} />
    </div>
  )
}
```

## Data visualization with Chart.js

Chart.js library delivers plenty of components to visualize data, but this time we focus on a single one - `Line` from `react-chartjs-2` that we can use it as a React component.

At the beginning we have to two functions:
1. `getChartData` - 
2. `getChartOptions`


## Playground

<iframe src="https://codesandbox.io/embed/reactgrid-chartjs-audiogram-gtlgr?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="reactgrid-chart.js-audiogram"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Summary

As you see integrating ReactGrid with other library like Chart.js is not so hard. Of course you don't need start Typescript project and make whole data mappings to compose safe code.
