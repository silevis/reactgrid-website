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
---

ReactGrid was designed with idea of not only displaying data, but also entering them in a spreasheet like way.

This guide show you how to integrate with well-known Javascript library - Chart.js. Before we get started lets write our prequisites:

- displaying real data on line chart - our data comes from audiometr device with is used for hearing test
- ReactGrid for display all and update the data,
- Chart.js visualize current data state as linear chart.

## Why ReactGrid?

ReactGrid don't care about your data schema, you can easily map your data to our component and then interact with your app.
ReactGrid integrates perfectly if you don't need whole spreadsheet-like formulas boilerplate but you looking for the same user experience on any device.

## Lets code!

### Define usefull interfaces and types

At the begining we need do decrare few interfaces and types that helps us to keep everyfing in right place and order.
In this particullar example we know all bout the data that we want to process so is the good idea to 'be narrow'.

## Playground

<iframe src="https://codesandbox.io/embed/reactgrid-chartjs-audiogram-gtlgr?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="reactgrid-chart.js-audiogram"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Summary

As you see integrating ReactGrid with other library like Chart.js is not so hard. Of course you don't need start Typescript project and make whole data mappings to compose safe code.
