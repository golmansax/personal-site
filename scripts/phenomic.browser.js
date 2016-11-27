// Hot loading HRM Patch
import 'react-hot-loader/patch';
// fetch polyfill
import 'whatwg-fetch';
import phenomicClient from 'phenomic/lib/client';

import metadata from '../src/metadata';
import routes from '../src/routes';
import store from '../src/store';

phenomicClient({ metadata, routes, store });

// hot loading
if (module.hot) {
  // hot load app
  module.hot.accept(
    ['../src/metadata', '../src/routes', '../src/store'],
    // webpack 1
    () => phenomicClient({
      metadata: require('../src/metadata').default,
      routes: require('../src/routes').default,
      store: require('../src/store').default,
    }),
    // webpack 2
    /*
    () => phenomicClient({ metadata, routes, store })
    */
  );
}
