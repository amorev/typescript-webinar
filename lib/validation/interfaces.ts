export namespace Validation {
    export interface StringValidator {
        isValidString(str: string): boolean;
    }

    export interface ArrayValidator {
        isValidArray(arr: any[]): boolean;
    }
}
