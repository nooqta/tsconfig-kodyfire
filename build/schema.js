"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = exports.tsConfigArray = exports.conceptArray = exports.tsconfig = exports.concept = void 0;
const tsconfig_templates_1 = require("tsconfig-templates");
exports.concept = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        template: {
            type: 'string',
            enum: ['sample.html.template'],
        },
        outputDir: { type: 'string' },
    },
};
exports.tsconfig = {
    type: 'object',
    properties: {
        name: { enum: (0, tsconfig_templates_1.getTsConfigNames)() },
        outputDir: { type: 'string' },
    },
};
exports.conceptArray = {
    type: 'array',
    items: exports.concept,
};
exports.tsConfigArray = {
    type: 'array',
    items: exports.tsconfig,
};
exports.schema = {
    type: 'object',
    properties: {
        project: { type: 'string' },
        name: { type: 'string' },
        rootDir: { type: 'string' },
        concept: exports.conceptArray,
        tsconfig: exports.tsConfigArray,
    },
    required: ['name'],
};
//# sourceMappingURL=schema.js.map