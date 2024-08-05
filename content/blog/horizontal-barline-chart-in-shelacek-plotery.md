---
title: "Horizontal BarLine chart in @shelacek/plotery "
description: I'm building https://github.com/soulsam480/byoga and needed a
  horizontal bar chart setup to show spend categories, but the @shelacek/plotery
  didn't have any. But it has a super configurable API that makes it possible
  with custom components.
author:
  name: soulsam480
  github: soulsam480
---
Took me little time to read and understand the codebase, but it's pretty simple as the API docs says [here](https://shelacek.bitbucket.io/plotery/#/extensions-and-plugins). The plan is to write a custom `BarLine` component that extends all library features and then the horizontal features enabled via prop.

From the codebase, https://bitbucket.org/shelacek/plotery/src/3de0822f0c0e3211016cb7abe82248565915b824/src/cartesian/bar-line.component.jsx#lines-12:15 returns the command for SVG path to render. It takes X axis as reference for movement by default. We can just change it to below so that it takes Y axis as base for movement.
```ts
  _calcPath(points: ChartSeriesData) {
      const zero = this.props.axes?.x.scale(this.props.axes?.x.reference ?? 0)

      return points.reduce((acc, x) => `${acc}M${x[0]},${x[1]}H${zero}`, '')
  }
```
then we draw a horizontal line instead of vertical and voila, it works.

You can checkout the complete component here https://github.com/soulsam480/byoga/blob/master/src/lib/components/plotery/BarLine.tsx
