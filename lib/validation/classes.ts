
///<reference path="./interfaces.ts"/>

export namespace Validation {
    export class MySystemArrayValidator implements ArrayValidator {
        isValidArray(arr: any[]): boolean {
            return arr.length > 10;
        }
    }
}
