/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from "events";
import type { ReactElement } from "react";
import type { WriteStream } from "tty";
export declare function renderToString(tree: ReactElement): string;
interface Instance {
    output: string;
    unmount: () => void;
    cleanup: () => void;
    stdout: OutputStream;
    stderr: OutputStream;
    frames: string[];
}
export declare class OutputStream extends EventEmitter {
    private _originalStream;
    readonly frames: string[];
    private _lastFrame?;
    get columns(): number;
    get rows(): number;
    constructor(_originalStream: WriteStream);
    write: (frame: string) => void;
    lastFrame: () => string | undefined;
}
export declare const render: (tree: ReactElement) => Instance;
export {};
