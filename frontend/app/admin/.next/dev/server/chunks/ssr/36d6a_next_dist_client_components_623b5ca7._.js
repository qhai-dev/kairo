module.exports = [
	"[project]/node_modules/.pnpm/next@16.0.10_@playwright+test@1.59.1_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_1fc69c9160eaa12b7c8dc80ee4bf043f/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)",
	(__turbopack_context__, module, exports) => {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true,
		});
		0 &&
			(module.exports = {
				HTTPAccessErrorStatus: null,
				HTTP_ERROR_FALLBACK_ERROR_CODE: null,
				getAccessFallbackErrorTypeByStatus: null,
				getAccessFallbackHTTPStatus: null,
				isHTTPAccessFallbackError: null,
			});
		function _export(target, all) {
			for (var name in all)
				Object.defineProperty(target, name, {
					enumerable: true,
					get: all[name],
				});
		}
		_export(exports, {
			HTTPAccessErrorStatus: function () {
				return HTTPAccessErrorStatus;
			},
			HTTP_ERROR_FALLBACK_ERROR_CODE: function () {
				return HTTP_ERROR_FALLBACK_ERROR_CODE;
			},
			getAccessFallbackErrorTypeByStatus: function () {
				return getAccessFallbackErrorTypeByStatus;
			},
			getAccessFallbackHTTPStatus: function () {
				return getAccessFallbackHTTPStatus;
			},
			isHTTPAccessFallbackError: function () {
				return isHTTPAccessFallbackError;
			},
		});
		const HTTPAccessErrorStatus = {
			NOT_FOUND: 404,
			FORBIDDEN: 403,
			UNAUTHORIZED: 401,
		};
		const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
		const HTTP_ERROR_FALLBACK_ERROR_CODE = "NEXT_HTTP_ERROR_FALLBACK";
		function isHTTPAccessFallbackError(error) {
			if (
				typeof error !== "object" ||
				error === null ||
				!("digest" in error) ||
				typeof error.digest !== "string"
			) {
				return false;
			}
			const [prefix, httpStatus] = error.digest.split(";");
			return (
				prefix === HTTP_ERROR_FALLBACK_ERROR_CODE &&
				ALLOWED_CODES.has(Number(httpStatus))
			);
		}
		function getAccessFallbackHTTPStatus(error) {
			const httpStatus = error.digest.split(";")[1];
			return Number(httpStatus);
		}
		function getAccessFallbackErrorTypeByStatus(status) {
			switch (status) {
				case 401:
					return "unauthorized";
				case 403:
					return "forbidden";
				case 404:
					return "not-found";
				default:
					return;
			}
		}
		if (
			(typeof exports.default === "function" ||
				(typeof exports.default === "object" &&
					exports.default !== null)) &&
			typeof exports.default.__esModule === "undefined"
		) {
			Object.defineProperty(exports.default, "__esModule", {
				value: true,
			});
			Object.assign(exports.default, exports);
			module.exports = exports.default;
		} //# sourceMappingURL=http-access-fallback.js.map
	},
	"[project]/node_modules/.pnpm/next@16.0.10_@playwright+test@1.59.1_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_1fc69c9160eaa12b7c8dc80ee4bf043f/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)",
	(__turbopack_context__, module, exports) => {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true,
		});
		Object.defineProperty(exports, "notFound", {
			enumerable: true,
			get: function () {
				return notFound;
			},
		});
		const _httpaccessfallback = __turbopack_context__.r(
			"[project]/node_modules/.pnpm/next@16.0.10_@playwright+test@1.59.1_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_1fc69c9160eaa12b7c8dc80ee4bf043f/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)",
		);
		/**
		 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
		 * within a route segment as well as inject a tag.
		 *
		 * `notFound()` can be used in
		 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
		 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
		 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
		 *
		 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
		 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
		 *
		 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
		 */ const DIGEST = `${_httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE};404`;
		function notFound() {
			const error = Object.defineProperty(
				new Error(DIGEST),
				"__NEXT_ERROR_CODE",
				{
					value: "E394",
					enumerable: false,
					configurable: true,
				},
			);
			error.digest = DIGEST;
			throw error;
		}
		if (
			(typeof exports.default === "function" ||
				(typeof exports.default === "object" &&
					exports.default !== null)) &&
			typeof exports.default.__esModule === "undefined"
		) {
			Object.defineProperty(exports.default, "__esModule", {
				value: true,
			});
			Object.assign(exports.default, exports);
			module.exports = exports.default;
		} //# sourceMappingURL=not-found.js.map
	},
	"[project]/node_modules/.pnpm/next@16.0.10_@playwright+test@1.59.1_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_1fc69c9160eaa12b7c8dc80ee4bf043f/node_modules/next/dist/client/components/builtin/default.js [app-rsc] (ecmascript)",
	(__turbopack_context__, module, exports) => {
		"use strict";

		Object.defineProperty(exports, "__esModule", {
			value: true,
		});
		0 &&
			(module.exports = {
				PARALLEL_ROUTE_DEFAULT_PATH: null,
				default: null,
			});
		function _export(target, all) {
			for (var name in all)
				Object.defineProperty(target, name, {
					enumerable: true,
					get: all[name],
				});
		}
		_export(exports, {
			PARALLEL_ROUTE_DEFAULT_PATH: function () {
				return PARALLEL_ROUTE_DEFAULT_PATH;
			},
			default: function () {
				return ParallelRouteDefault;
			},
		});
		const _notfound = __turbopack_context__.r(
			"[project]/node_modules/.pnpm/next@16.0.10_@playwright+test@1.59.1_babel-plugin-react-compiler@1.0.0_react-dom@19.2.0_1fc69c9160eaa12b7c8dc80ee4bf043f/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)",
		);
		const PARALLEL_ROUTE_DEFAULT_PATH =
			"next/dist/client/components/builtin/default.js";
		function ParallelRouteDefault() {
			(0, _notfound.notFound)();
		}
		if (
			(typeof exports.default === "function" ||
				(typeof exports.default === "object" &&
					exports.default !== null)) &&
			typeof exports.default.__esModule === "undefined"
		) {
			Object.defineProperty(exports.default, "__esModule", {
				value: true,
			});
			Object.assign(exports.default, exports);
			module.exports = exports.default;
		} //# sourceMappingURL=default.js.map
	},
];

//# sourceMappingURL=36d6a_next_dist_client_components_623b5ca7._.js.map
