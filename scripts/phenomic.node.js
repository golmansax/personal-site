import phenomicStatic from 'phenomic/lib/static';

import metadata from '../src/metadata';
import routes from '../src/routes';
import store from '../src/store';

// module.exports = (options) =>
export default function (options) {
  return phenomicStatic({ ...options, metadata, routes, store });
}
