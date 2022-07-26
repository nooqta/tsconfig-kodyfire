export declare const concept: {
    type: string;
    properties: {
        name: {
            type: string;
        };
        template: {
            type: string;
            enum: string[];
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const tsconfig: {
    type: string;
    properties: {
        name: {
            enum: any[];
        };
        outputDir: {
            type: string;
        };
    };
};
export declare const conceptArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                type: string;
            };
            template: {
                type: string;
                enum: string[];
            };
            outputDir: {
                type: string;
            };
        };
    };
};
export declare const tsConfigArray: {
    type: string;
    items: {
        type: string;
        properties: {
            name: {
                enum: any[];
            };
            outputDir: {
                type: string;
            };
        };
    };
};
export declare const schema: {
    type: string;
    properties: {
        project: {
            type: string;
        };
        name: {
            type: string;
        };
        rootDir: {
            type: string;
        };
        concept: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        type: string;
                    };
                    template: {
                        type: string;
                        enum: string[];
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
        tsconfig: {
            type: string;
            items: {
                type: string;
                properties: {
                    name: {
                        enum: any[];
                    };
                    outputDir: {
                        type: string;
                    };
                };
            };
        };
    };
    required: string[];
};
