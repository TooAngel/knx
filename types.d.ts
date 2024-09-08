declare module "src/KnxLog" {
    export function get(options: any): any;
}
declare module "src/KnxConstants" {
    export const APCICODES: string[];
    export function keyText(mapref: any, value: any): string;
    export namespace SERVICE_TYPE {
        let SEARCH_REQUEST: number;
        let SEARCH_RESPONSE: number;
        let DESCRIPTION_REQUEST: number;
        let DESCRIPTION_RESPONSE: number;
        let CONNECT_REQUEST: number;
        let CONNECT_RESPONSE: number;
        let CONNECTIONSTATE_REQUEST: number;
        let CONNECTIONSTATE_RESPONSE: number;
        let DISCONNECT_REQUEST: number;
        let DISCONNECT_RESPONSE: number;
        let DEVICE_CONFIGURATION_REQUEST: number;
        let DEVICE_CONFIGURATION_ACK: number;
        let TUNNELING_REQUEST: number;
        let TUNNELING_ACK: number;
        let ROUTING_INDICATION: number;
        let ROUTING_LOST_MESSAGE: number;
        let UNKNOWN: number;
    }
    export namespace CONNECTION_TYPE {
        let DEVICE_MGMT_CONNECTION: number;
        let TUNNEL_CONNECTION: number;
        let REMOTE_LOGGING_CONNECTION: number;
        let REMOTE_CONFIGURATION_CONNECTION: number;
        let OBJECT_SERVER_CONNECTION: number;
    }
    export namespace PROTOCOL_TYPE {
        let IPV4_UDP: number;
        let IPV4_TCP: number;
    }
    export namespace KNX_LAYER {
        let LINK_LAYER: number;
        let RAW_LAYER: number;
        let BUSMONITOR_LAYER: number;
    }
    export namespace FRAMETYPE {
        let EXTENDED: number;
        let STANDARD: number;
    }
    export namespace RESPONSECODE {
        let NO_ERROR: number;
        let E_HOST_PROTOCOL_TYPE: number;
        let E_VERSION_NOT_SUPPORTED: number;
        let E_SEQUENCE_NUMBER: number;
        let E_CONNSTATE_LOST: number;
        let E_CONNECTION_ID: number;
        let E_CONNECTION_TYPE: number;
        let E_CONNECTION_OPTION: number;
        let E_NO_MORE_CONNECTIONS: number;
        let E_DATA_CONNECTION: number;
        let E_KNX_CONNECTION: number;
        let E_TUNNELING_LAYER: number;
    }
    export const MESSAGECODES: {
        'L_Raw.req': number;
        'L_Data.req': number;
        'L_Poll_Data.req': number;
        'L_Poll_Data.con': number;
        'L_Data.ind': number;
        'L_Busmon.ind': number;
        'L_Raw.ind': number;
        'L_Data.con': number;
        'L_Raw.con': number;
        'ETS.Dummy1': number;
    };
}
declare module "src/IpRoutingConnection" {
    export = IpRoutingConnection;
    /**
      Initializes a new KNX routing connection with provided values. Make
     sure the local system allows UDP messages to the multicast group.
    **/
    function IpRoutingConnection(instance: any): any;
}
declare module "src/IpTunnelingConnection" {
    export = IpTunnelingConnection;
    function IpTunnelingConnection(instance: any): any;
}
declare module "src/FSM" {
    const _exports: any;
    export = _exports;
}
declare module "src/dptlib/index" {
    export function resolve(dptid: any): any;
    export function populateAPDU(value: any, apdu: any, dptid: any): any;
    export function fromBuffer(buf: any, dpt: any): any;
}
declare module "src/Address" {
    export namespace TYPE {
        let PHYSICAL: number;
        let GROUP: number;
    }
    export function toString(buf: any, addrtype: any, twoLevelAddressing: any): string;
    export function parse(addr: any, addrtype: any, twoLevelAddressing: any): Buffer;
}
declare module "src/KnxProtocol" {
    export = KnxProtocol;
    const KnxProtocol: any;
}
declare module "src/Connection" {
    export = Connection;
    /**
     * @callback connected
     * @return {void}
     */
    /**
     * @callback disconnected
     * @return {void}
     */
    /**
     * @callback emitEvent
     * @param {string} evt
     * @param {string} src
     * @param {string} dest
     * @param {Buffer} value
     * @return {void}
     */
    /**
     * @callback error
     * @param {any} connstatus
     * @return {void}
     */
    /**
    * @typedef {Object} HandlerSpec
    * @property {connected} [connected]
    * @property {disconnected} [disconnected]
    * @property {emitEvent} [event]
    * @property {error} [error]
    **/
    /**
    * @typedef {Object} ConnectionSpec
    * @property {string} [ipAddr] - ip address of the KNX router or interface
    * @property {number} [ipPort] - port of the KNX router or interface
    * @property {string} [interface] - in case you need to specify the multicast interface (say if you have more than one)
    * @property {string} [physAddr] - the KNX physical address we'd like to use
    * @property {string} [loglevel] - set the log level for messsages printed on the console. This can be 'error', 'warn', 'info' (default), 'debug', or 'trace'.
    * @property {boolean} [manualConnect] - do not automatically connect, but use connection.Connect() to establish connection
    * @property {boolean} [forceTunneling] - use tunneling with multicast (router) - this is NOT supported by all routers! See README-resilience.md
    * @property {number} [minimumDelay] - wait at least 10 millisec between each datagram
    * @property {boolean} [suppress_ack_ldatareq] - enable this option to suppress the acknowledge flag with outgoing L_Data.req requests. LoxOne needs this
    * @property {boolean} [localEchoInTunneling] - In tunneling mode, echoes the sent message by emitting a new emitEvent, so other object with same group address, can receive the sent message. Default is false.
    * @property {HandlerSpec[]} [handlers] - event handlers. You can also bind them later with connection.on(event, fn)
    */
    /**
     *
     * @param {ConnectionSpec} options
     * @returns
     */
    function Connection(options: ConnectionSpec): any;
    namespace Connection {
        export { connected, disconnected, emitEvent, error, HandlerSpec, ConnectionSpec };
    }
    type connected = () => void;
    type disconnected = () => void;
    type emitEvent = (evt: string, src: string, dest: string, value: Buffer) => void;
    type error = (connstatus: any) => void;
    type HandlerSpec = {
        connected?: connected;
        disconnected?: disconnected;
        event?: emitEvent;
        /**
         * **
         */
        error?: error;
    };
    type ConnectionSpec = {
        /**
         * - ip address of the KNX router or interface
         */
        ipAddr?: string;
        /**
         * - port of the KNX router or interface
         */
        ipPort?: number;
        /**
         * - in case you need to specify the multicast interface (say if you have more than one)
         */
        interface?: string;
        /**
         * - the KNX physical address we'd like to use
         */
        physAddr?: string;
        /**
         * - set the log level for messsages printed on the console. This can be 'error', 'warn', 'info' (default), 'debug', or 'trace'.
         */
        loglevel?: string;
        /**
         * - do not automatically connect, but use connection.Connect() to establish connection
         */
        manualConnect?: boolean;
        /**
         * - use tunneling with multicast (router) - this is NOT supported by all routers! See README-resilience.md
         */
        forceTunneling?: boolean;
        /**
         * - wait at least 10 millisec between each datagram
         */
        minimumDelay?: number;
        /**
         * - enable this option to suppress the acknowledge flag with outgoing L_Data.req requests. LoxOne needs this
         */
        suppress_ack_ldatareq?: boolean;
        /**
         * - In tunneling mode, echoes the sent message by emitting a new emitEvent, so other object with same group address, can receive the sent message. Default is false.
         */
        localEchoInTunneling?: boolean;
        /**
         * - event handlers. You can also bind them later with connection.on(event, fn)
         */
        handlers?: HandlerSpec[];
    };
}
declare module "src/Datapoint" {
    export = Datapoint;
    class Datapoint extends EventEmitter<[never]> {
        constructor(options: any, conn: any);
        options: any;
        dptid: any;
        dpt: any;
        current_value: any;
        bind(conn: any): void;
        conn: any;
        update(jsvalue: any, src: any): void;
        write(value: any): void;
        read(callback: any): void;
    }
    import { EventEmitter } from "events";
}
declare module "src/devices/BinarySwitch" {
    export = BinarySwitch;
    class BinarySwitch {
        constructor(options: any, conn: any);
        control_ga: any;
        status_ga: any;
        log: any;
        bind(conn: any): void;
        conn: any;
        control: Datapoint;
        status: Datapoint;
        on(...args: any[]): void;
        switchOn(): void;
        switchOff(): void;
        write(v: any): void;
    }
    import Datapoint = require("src/Datapoint");
}
declare module "src/devices/index" {
    export const BinarySwitch: typeof import("src/devices/BinarySwitch");
}
declare module "index" {
    export const Connection: typeof import("src/Connection");
    export const Datapoint: typeof import("src/Datapoint");
    export const Devices: typeof import("src/devices");
    export const Log: {
        get: (options: any) => any;
    };
}
