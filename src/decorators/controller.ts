type Constructor = { new(...args: any[]): any; }

export function RouterController(route: string) {
    return function <T extends Constructor>(construct: T): T {
        return class extends construct {
            public path = route;
        };
    };
}
