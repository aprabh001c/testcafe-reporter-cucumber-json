import { Browser, BrowserName, NameVersion, Platform } from './cucumber-json-interfaces';
export declare function getPlatformFrom(userAgent: string | undefined): Platform;
export declare function getDeviceFrom(userAgent: string | undefined): string;
export declare function isMacOsX(platformName: string | undefined): boolean;
export declare function isLinux(platformName: string | undefined): boolean;
export declare function isWindows(platformName: string | undefined): boolean;
export declare function extractNameAndVersion(input: string | undefined | null): NameVersion;
export declare function getBrowserFrom(userAgent: string | undefined): Browser;
export declare const browserNameMapping: {
    [index: string]: BrowserName;
};
