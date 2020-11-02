namespace local {
    export const rider = {
        fastRide() {
            console.log('riding fast');
        }
    };
}

export namespace PublicNamespace {
    type Vehicle = {
        size: number
    }

    export interface Moto extends Vehicle {
        ride()
    }

    export const moto: Moto = {
        size: 10,
        ride() {
            local.rider.fastRide();
        }
    };

}
