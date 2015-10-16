/// <reference path="../typings/tsd.d.ts" />


import { register } from 'horcrux-di' 
import { Event } from './event';


@register
class EventBus {
	
	private id = 0;
	private listeners:{[type:string]:{[id:number]:Function}} = {};
	
	public dispatch(e: Event<any>): void {
		let key = Event.eventName(<{new():Event<any>}>e.constructor);

		for(let id in this.listeners[key]){
			(function(id) {
				this.listeners[key][id](e, () => {this.removeEventListener(id);});
			}).call(this, id)
		}
	}
	
	public addEventListener<T>(type: {new():Event<T>}, listener: (data:Event<T>, remove:Function)=>any, self?:any): number {
		let key = Event.eventName(type)
		
		this.listeners[key] = this.listeners[key] || {};
		this.listeners[key][++this.id] = (!!self ? listener.bind(self) : listener);
		
		return this.id;
	}
	
	public removeEventListener<T>(id:number): void {
		for(var key in this.listeners) {
			if(id in this.listeners[key]) {
				delete this.listeners[key][id];
				return;
			}
		}
		
		console.log("Could not remove EventListener for ID '" + id + "'");
	}
}

export {EventBus}