abstract class Event<T> {
	private __data__: T;
	
	constructor(data?:T) {
		this.__data__ = data;
	}
	
	get data(): T {
		return this.__data__
	}
	
	static eventName(eventClass: {new():Event<any>}): string {
		return eventClass.toString().match(/function\s*(\w+)/)[1]
	}
}

export {Event}