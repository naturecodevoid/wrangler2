/// <reference types="node" />
import type Protocol from "devtools-protocol";
/**
 * `useInspector` is a hook for debugging Workers applications
 *  when using `wrangler dev`.
 *
 * When we start a session with `wrangler dev`, the Workers platform
 * also exposes a debugging websocket that implements the DevTools
 * Protocol. While we could just start up DevTools and connect to this
 * URL, that URL changes every time we make a change to the
 * worker, or when the session expires. Instead, we start up a proxy
 * server locally that acts as a bridge between the remote DevTools
 * server and the local DevTools instance. So whenever the URL changes,
 * we can can silently connect to it and keep the local DevTools instance
 * up to date. Further, we also intercept these messages and selectively
 * log them directly to the terminal (namely, calls to `console.<x>`,
 * and exceptions)
 */
/**
 * TODO:
 * - clear devtools whenever we save changes to the worker
 * - clear devtools when we switch between local/remote modes
 * - handle more methods from console
 */
interface InspectorProps {
    /**
     * The port that the local proxy server should listen on.
     */
    port: number;
    /**
     * The websocket URL exposed by Workers that the inspector should connect to.
     */
    inspectorUrl: string | undefined;
    /**
     * Whether console statements and exceptions should be logged to the terminal.
     * (We don't log them in local mode because they're already getting
     * logged to the terminal by nature of them actually running in node locally.)
     */
    logToTerminal: boolean;
    /**
     * Sourcemap path, so that stacktraces can be interpretted
     */
    sourceMapPath?: string | undefined;
    host?: string;
}
export default function useInspector(props: InspectorProps): void;
/**
 * This function converts a message serialised as a devtools event
 * into arguments suitable to be called by a console method, and
 * then actually calls the method with those arguments. Effectively,
 * we're just doing a little bit of the work of the devtools console,
 * directly in the terminal.
 */
export declare const mapConsoleAPIMessageTypeToConsoleMethod: {
    [key in Protocol.Runtime.ConsoleAPICalledEvent["type"]]: Exclude<keyof Console, "Console">;
};
/**
 * Opens the chrome debugger
 */
export declare const openInspector: (inspectorPort: number) => Promise<void>;
export {};
