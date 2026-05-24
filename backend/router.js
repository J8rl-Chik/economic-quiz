const routes = [];

const router = {
  get(path, handler) {
    routes.push({ method: "GET", path, handler });
  },

  resolve(method, url) {
    for (const route of routes) {
      if (route.method !== method) continue;

      const match = matchPath(route.path, url);
      if (match) return { handler: route.handler, params: match };
    }
    return null;
  },
};

function matchPath(routePath, url) {
  const [urlPath] = url.split("?");
  const routeParts = routePath.split("/");
  const urlParts = urlPath.split("/");

  if (routeParts.length !== urlParts.length) return null;

  const params = {};
  for (let i = 0; i < routeParts.length; i++) {
    if (routeParts[i].startsWith(":")) {
      params[routeParts[i].slice(1)] = urlParts[i];
    } else if (routeParts[i] !== urlParts[i]) {
      return null;
    }
  }
  return params;
}

export default router;
