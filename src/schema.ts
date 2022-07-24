import { getTsConfigNames }  from 'tsconfig-templates'
export const concept = {
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
export const tsconfig = {
  type: 'object',
  properties: {
    name: { enum: getTsConfigNames() },
    outputDir: { type: 'string' },
  },
};

export const conceptArray = {
  type: 'array',
  items: concept,
};
export const tsConfigArray = {
  type: 'array',
  items: tsconfig,
};
export const schema = {
  type: 'object',
  properties: {
    project: { type: 'string' },
    name: { type: 'string' },
    rootDir: { type: 'string' },
    concept: conceptArray,
    tsconfig: tsConfigArray,
  },
  required: ['name'],
};
