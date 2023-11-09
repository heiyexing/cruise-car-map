---
title: Hex图层
---

## Hex 图层

### 介绍

通过使用[h3-js](https://www.npmjs.com/package/h3-js)功能，[turf.js](https://turfjs.fenxianglu.cn/category/helper/polygon.html)方法与[PolygonLayer](https://larkmap.antv.antgroup.com/components/layers/base-layers/polygon-layer)图层来创建出 Hex 图层

### 代码演示

<code src="./demos/default.tsx" compact  defaultShowCode></code>

```ts
// json: json数据，hexId：json数据中选取作为分辨率的字段 lat lon 为数据经纬度
const JsonToHex = (json: any, hexId: string, lat: string, lon: string) => {
  const HexIndexList = json.map((item: any) => {
    return {
      ...item,
      hexIndex: latLngToCell(+item[lat], +item[lon], +item[hexId]),
    };
  });
  // 去除相同的hexIndex数据
  const HexIndexFilter = HexIndexList.filter(
    (item: { hexIndex: string }, index: number, arr: any[]) => {
      return arr.findIndex((t) => t.hexIndex === item.hexIndex) === index;
    },
  );
  // 通过h3-js的cellToBoundary方法去解析出六边行边界经纬度数组 第二项为是否闭合数据
  const HexBoundaryList = HexIndexFilter.map((item: any) => {
    return { ...item, hexBoundary: cellToBoundary(item.hexIndex, true) };
  });
  //使用turf中的polygon()方法与上一步生成的边界数据生成polygon数据
  const features = HexBoundaryList.map((item: any) => {
    return polygon([item.hexBoundary], { ...item });
  });
  // 最终使用turf中的featureCollection导出FeatureCollection数据
  return featureCollection(features);
};
```
