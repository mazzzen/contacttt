"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAPIRoute = isAPIRoute;

function isAPIRoute(value) {
    return value === "/api" || Boolean(value == null ? void 0 : value.startsWith("/api/"));
}

//# sourceMappingURL=is-api-route.js.map