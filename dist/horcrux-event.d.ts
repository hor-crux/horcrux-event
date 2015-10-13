declare module "horcrux-event" {


    private __data__;
    constructor(data?: T);
    data: T;
    static eventName(eventClass: {
        new (): Event<any>;
    }): string;
}
 class EventBus {
    private id;
    private listeners;
    dispatch(e: Event<any>): void;
    addEventListener<T>(type: {
        new (): Event<T>;
    }, listener: (data: Event<T>) => any, self?: any): number;
    removeEventListener<T>(type: {
        new (): Event<T>;
    }, id: number): void;
}
}