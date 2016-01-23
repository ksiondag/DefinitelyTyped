// Type definitions for Nunjucks 2.3.x
// Project: https://mozilla.github.io/nunjucks/
// Definitions by: Silent K <https://github.com/ksiondag/>
// Definitions: https://github.com/ksiondag/DefinitelyTyped

// NOTE: This is incomplete and being updated as I use nunjucks

/* =================== USAGE ===================

    import * as nunjucks from "nunjucks";

 =============================================== */


declare module "nunjucks" {
    import * as express from "express";

    interface Environment {
    }

    export interface SyntaxSettings {
        blockStart?: string;
        blockEnd?: string;
        variableStart?: string;
        variableEnd?: string;
        commentStart?: string;
        commentEnd?: string;
    }

    export interface ConfigOptions {
        autoescape?: boolean;
        throwOnUndefine?: boolean;
        trimBlocks?: boolean;
        lstripBlocks?: boolean;
        watch?: boolean;
        noCache?: boolean;
        web?: {useCache?: boolean, async?: boolean};
        express?: express.Express;
        tags?: SyntaxSettings;
    }

    export function configure(path?: string, opt?: ConfigOptions): Environment;
}

