---
title: Hex图层
---

## Hex 图层

### 介绍

通过使用[h3-js](https://www.npmjs.com/package/h3-js)功能，[turf.js](https://turfjs.fenxianglu.cn/category/helper/polygon.html)方法与[PolygonLayer](https://larkmap.antv.antgroup.com/components/layers/base-layers/polygon-layer)图层来创建出 Hex 图层

### 代码演示

<code src="./demos/default.tsx" compact  defaultShowCode></code>

```ts
// json: json数据，hexId：json数据中选取作为分辨率的字段
const jsontohex = (json: any, hexId: string) => {
  const h3IndexList = json.map((item: any) => {
    // item.fLat 和item.fLon 为数据中的经纬度，hexId则为转换字段，主要提供分辨率
    return {
      ...item,
      h3Index: latLngToCell(+item.fLat, +item.fLon, +item[hexId]),
    };
  });

  // 过滤出相同h3Index数据的值
  const h3IndexFilter = h3IndexList.filter(
    (item: { h3Index: string }, index: number, arr: any[]) => {
      return arr.findIndex((t) => t.h3Index === item.h3Index) === index;
    },
  );
  // 通过h3-js的cellToBoundary方法去解析出六边行边界经纬度数组 第二项为是否封边
  const h3BoundaryList = h3IndexFilter.map((item: any) => {
    return { ...item, h3Boundary: cellToBoundary(item.h3Index, true) };
  });
  //使用turf中的polygon()方法与上一步生成的边界数据生成polygon数据
  const polygonList = h3BoundaryList.map((item: any) => {
    return polygon([item.h3Boundary], { ...item });
  });
  return polygonList;
};
```
