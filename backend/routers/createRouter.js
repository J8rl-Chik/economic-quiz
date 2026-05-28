/** @import { HttpHandler } from '../../types.js' */

/** @param {import('../../types.js').QuizRouter} methodRoutes */
const createRouter = methodRoutes => {
  /** @type {Object<string, { staticRoutes: Object<string, HttpHandler>, dynamicRoutes: { regex: RegExp, paramNames: string[], controller: HttpHandler }[] }>} */
  const compiled = {};

  for (const [method, route] of Object.entries(methodRoutes)) {
    /** @type {Object<string, HttpHandler>} */
    const staticRoutes = {};
    const dynamicRoutes = [];

    for (const [uri, controller] of Object.entries(route)) {
      if (uri.includes(':')) {
        const paramNames = [...uri.matchAll(/:([^/]+)/g)].map(m => m[1]);
        const regex = new RegExp(`^${uri.replace(/:([^/]+)/g, '([^/]+)')}$`);
        dynamicRoutes.push({regex, paramNames, controller});
      } else {
        staticRoutes[uri] = controller;
      }
    }

    compiled[method] = {staticRoutes, dynamicRoutes};
  }

  return {
    /** @param {string} method */
    hasMethod(method) {
      return method in compiled;
    },

    /**
     * @param {string} method
     * @param {string} url
     * @returns {{ controller: HttpHandler, params: Object<string, string> } | null}
     */
    findController(method, url) {
      const routes = compiled[method];
      if (!routes) return null;

      if (routes.staticRoutes[url]) {
        return {controller: routes.staticRoutes[url], params: {}};
      }

      for (const {regex, paramNames, controller} of routes.dynamicRoutes) {
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
