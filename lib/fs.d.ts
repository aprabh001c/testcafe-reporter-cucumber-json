export declare const getFilesRecursivelyIn: (directoryPath: string, fileFilter?: ((path: string) => boolean) | undefined) => string[];
export declare const writeJsonFileSync: (data: unknown, ...paths: string[]) => void;
export declare const writeReportSync: (data: string, ...paths: string[]) => void;
export declare const readAllLines: (filePath: string) => string[];
export declare const getParentDirs: (filePath: string) => string[];
export declare const getFilename: (filePath: string) => string | undefined;
export declare const jsonFrom: (filePath: string) => unknown;
export declare const fileExists: (filePath: string) => boolean;
export declare const fileExtension: (filePath: string) => string;
export declare const toBase64DataImageUrl: (path: string) => string;
export declare const userAgentToFilename: (userAgent: string) => string;
export declare const dateToFilename: (date: Date) => string;
