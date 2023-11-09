import { GaodeMap, LineLayer, PointLayer, PolygonLayer, Scene } from '@antv/l7';
import { polygon } from '@turf/turf';
import { cellToBoundary, latLngToCell } from 'h3-js';
import React, { useEffect } from 'react';
import { data } from './mock';

const id = String(Math.random());

export default () => {
  const jsontohex = (json: any, hexId: string) => {
    const h3IndexList = json.map((item: any) => {
      return {
        ...item,
        h3Index: latLngToCell(+item.fLat, +item.fLon, +item[hexId]),
      };
    });
    const h3IndexFilter = h3IndexList.filter(
      (item: { h3Index: string }, index: number, arr: any[]) => {
        return arr.findIndex((t) => t.h3Index === item.h3Index) === index;
      },
    );
    const h3BoundaryList = h3IndexFilter.map((item: any) => {
      return { ...item, h3Boundary: cellToBoundary(item.h3Index, true) };
    });
    const polygonList = h3BoundaryList.map((item: any) => {
      return polygon([item.h3Boundary], { ...item });
    });
    return polygonList;
  };

  useEffect(() => {
    const scene = new Scene({
      id,
      map: new GaodeMap({
        center: [121.438579, 31.246384],
        pitch: 0,
        zoom: 10,
        token: '5ae4492ef912cbbc93034fea0e66ff2a',
      }),
    });
    scene.on('loaded', () => {
      const layer = new PolygonLayer({})
        .source({
          type: 'FeatureCollection',
          features: jsontohex(data, 'odCnt'),
        })
        .color('cont', [
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
        .source({
          type: 'FeatureCollection',
          features: jsontohex(data, 'odCnt'),
        })
        .color('#fff')
        .size(0.8);

      const pointLayer = new PointLayer({})
        .source(data, {
          parser: {
            type: 'json',
            x: 'fLon',
            y: 'fLat',
          },
        })
        .shape('circle')
        .size(5)
        .color('#0f9960');

      scene.addLayer(layer);
      scene.addLayer(lineLayer);
      scene.addLayer(pointLayer);
    });
  }, []);

  return (
    <div>
      <div id={id} style={{ height: 400, position: 'relative' }} />
    </div>
  );
};
