# General Information

A replication of Benzinga's website using knowledge of the CSS Box Model.

All of the HTML/CSS is different from their website. (I replicated, not copied)

Deployment on Vercel: https://react-benzinga.vercel.app

## APIs and Libraries

Polygon (https://polygon.io/dashboard)

ApexCharts (https://apexcharts.com)

## Technologies

HTML / CSS / React

## Problems and Improvement

* Page is not responsive (Does not support different-sized screens; did not implement media queries)
* Page is only able to load client-side due to React
* Only able to fetch data from Apple, no other different options for stocks
* GOAL: Fix all of these problems by creating the same project with Next.js/TypeScript/Bootstrap

## IMPORTANT

If you wish to clone this repository, you must create an .env file with the variable: REACT_APP_POLYGON_KEY

Then, register an account on Polygon and set the variable equal to your API key
