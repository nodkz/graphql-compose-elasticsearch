import { InputTypeComposer } from 'graphql-compose';
import { getTypeName, CommonOpts, desc } from '../../../utils';
import { getGeoPointFields } from '../../Commons/FieldNames';

export function getGeohashGridITC<TContext>(
  opts: CommonOpts<TContext>
): InputTypeComposer<TContext> {
  const name = getTypeName('AggsGeohashGrid', opts);
  const description = desc(
    `
    A multi-bucket aggregation that works on geo_point fields and groups points
    into buckets that represent cells in a grid. Each cell is labeled using
    a geohash which is of user-definable precision. Geohashes can have a choice
    of precision between 1 and 12.
    [Documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-aggregations-bucket-geohashgrid-aggregation.html)
  `
  );

  return opts.getOrCreateITC(name, () => ({
    name,
    description,
    fields: {
      field: getGeoPointFields(opts),
      precision: 'Int',
      size: {
        type: 'Int',
        defaultValue: 10000,
      },
      shard_size: 'Int',
    },
  }));
}
