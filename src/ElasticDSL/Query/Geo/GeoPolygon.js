/* @flow */

import { InputTypeComposer } from 'graphql-compose';
import { getTypeName, getOrSetType, desc } from "../../../utils";

export function getGeoPolygonITC(opts: mixed = {}): InputTypeComposer {
  const name = getTypeName('QueryGeoPolygon', opts);
  const description = desc(`
    A query allowing to include hits that only fall within a polygon of points.
    Requires the geo_point Mapping.
    [Documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/query-dsl-geo-polygon-query.html)
  `);

  if (false) {
    return getOrSetType(name, () =>
      InputTypeComposer.create({
        name,
        description,
        fields: {},
      }));
  }

  // $FlowFixMe
  return {
    type: 'JSON',
    description,
  };
}