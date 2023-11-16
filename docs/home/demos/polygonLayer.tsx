import { GaodeMap, LineLayer, PolygonLayer, Scene } from '@antv/l7';
import { featureCollection, polygon } from '@turf/turf';
import { cellToBoundary, latLngToCell } from 'h3-js';
import React, { useEffect } from 'react';
import { data } from './mock';

/**
 * 将数据处理成 GeoJSON 格式，如果不需要手动聚合则无视以下函数
 * @param json
 * @param hexId
 * @param lat
 * @param lon
 * @returns
 */
const jsonToHex = (json: any, hexId: string, lat: string, lon: string) => {
  const hexIndexList = json
    .map((item: any) => {
      return {
        ...item,
        hexIndex: latLngToCell(+item[lat], +item[lon], +item[hexId]),
      };
    })
    .filter((item: { hexIndex: string }, index: number, arr: any[]) => {
      return arr.findIndex((t) => t.hexIndex === item.hexIndex) === index;
    });

  const hexBoundaryList = hexIndexList.map((item: any) => {
    return { ...item, hexBoundary: cellToBoundary(item.hexIndex, true) };
  });

  const features = hexBoundaryList.map((item: any) => {
    return polygon([item.hexBoundary], { ...item });
  });

  return featureCollection(features);
};

export default () => {
  useEffect(() => {
    const scene = new Scene({
      id: 'map',
      map: new GaodeMap({
        center: [121.438579, 31.246384],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const hexLayer = new PolygonLayer({})
        .source(jsonToHex(data, 'odCnt', 'fLat', 'fLon'))
        .color('count', [
          'rgb(253,204,138)',
          'rgb(252,141,89)',
          'rgb(227,74,51)',
          'rgb(179,0,0)',
        ])
        .shape('fill')
        .active(true)
        .style({
          opacity: 0.6,
        });

      const lineLayer = new LineLayer({
        zIndex: 2,
      })
        .source(jsonToHex(data, 'odCnt', 'fLat', 'fLon'))
        .color('#fff')
        .size(0.8);

      scene.addLayer(hexLayer);
      scene.addLayer(lineLayer);
    });
  }, []);

  return (
    <div>
      <div id={'map'} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
