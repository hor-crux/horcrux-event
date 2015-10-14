declare module "horcrux-event" {
export {	Event,	EventBus}
 abstract class Event<T> {
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
    removeEventListener<T>(id: number): void;
}
}