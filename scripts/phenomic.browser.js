// Hot loading HRM Patch
import "react-hot-loader/patch"
// fetch polyfill
import "whatwg-fetch"
import phenomicClient from "phenomic/lib/client"

import metadata from "../src/metadata.js"
import routes from "../src/routes.js"
import store from "../src/store.js"

phenomicClient({ metadata, routes, store })

// hot loading
if (module.hot) {
  // hot load app
  module.hot.accept(
    [ "../src/metadata.js", "../src/routes.js", "../src/store.js" ],
    // webpack 1
    () => phenomicClient({
      metadata: require("../src/metadata.js").default,
      routes: require("../src/routes.js").default,
      store: require("../src/store.js").default,
    })
    // webpack 2
    /*
    () => phenomicClient({ metadata, routes, store })
    */
  )
}
