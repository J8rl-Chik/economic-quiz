/** @import { Controller, Route, StaticRoute, DynamicRoute } from '../../types.js' */

/** @param {Route} methodRoute */
const createRouter = methodRoute => {
  /** @type {Object<string, { staticRoute: StaticRoute, dynamicRoutes: DynamicRoute }>} */
  const router = {};

  for (const [method, route] of Object.entries(methodRoute)) {
    /** @type {StaticRoute} */
    const staticRoute = {};
    /** @type {DynamicRoute} */
    const dynamicRoutes = [];

    for (const [uri, controller] of Object.entries(route)) {
      if (uri.includes(':')) {
        const paramNames = [...uri.matchAll(/:([^/]+)/g)].map(m => m[1]);
        const regex = new RegExp(`^${uri.replace(/:([^/]+)/g, '([^/]+)')}$`);

        dynamicRoutes.push({regex, paramNames, controller});
      } else {
        staticRoute[uri] = controller;
      }
    }

    router[method] = {staticRoute, dynamicRoutes};
  }

  return {
    /** @param {string} method */
    hasMethod(method) {
      return method in router;
    },

    /**
     * @param {string} method
     * @param {string} url
     * @returns {{ controller: Controller, params?: Object<string, string> } | null}
     */
    findController(method, url) {
      const route = router[method];
      if (!route) return null;

      if (route.staticRoute[url]) {
        return {controller: route.staticRoute[url]};
      }

      for (const {regex, paramNames, controller} of route.dynamicRoutes) {
        const urlMatch = url.match(regex);

        if (urlMatch) {
          const params = Object.fromEntries(paramNames.map((name, i) => [name, urlMatch[i + 1]]));

          return {controller, params};
        }
      }

      return null;
    }
  };
};

export default createRouter;
