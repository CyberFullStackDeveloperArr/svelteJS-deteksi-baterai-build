export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["ghostcodenight.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.D7tiLMcG.js","app":"_app/immutable/entry/app.ie9i79Ua.js","imports":["_app/immutable/entry/start.D7tiLMcG.js","_app/immutable/chunks/entry.DGD-zQtL.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.ie9i79Ua.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.NXekTHeV.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
