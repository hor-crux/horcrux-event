/// <reference path="../typings/tsd.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
define(["require", "exports", 'horcrux-di', './event'], function (require, exports, horcrux_di_1, event_1) {
    var EventBus = (function () {
        function EventBus() {
            this.id = 0;
            this.listeners = {};
        }
        EventBus.prototype.dispatch = function (e) {
            var key = event_1.Event.eventName(e.constructor);
            for (var id in this.listeners[key]) {
                this.listeners[key][id](e);
            }
        };
        EventBus.prototype.addEventListener = function (type, listener, self) {
            var key = event_1.Event.eventName(type);
            this.listeners[key] = this.listeners[key] || {};
            this.listeners[key][++this.id](!!self ? listener.bind(self) : listener);
            return this.id;
        };
        EventBus.prototype.removeEventListener = function (type, id) {
            var key = event_1.Event.eventName(type);
            delete this.listeners[key][id];
        };
        EventBus = __decorate([
            horcrux_di_1.register
        ], EventBus);
        return EventBus;
    })();
    exports.EventBus = EventBus;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50YnVzLnRzIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiRXZlbnRCdXMuY29uc3RydWN0b3IiLCJFdmVudEJ1cy5kaXNwYXRjaCIsIkV2ZW50QnVzLmFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudEJ1cy5yZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7SUFPNUM7UUFBQUE7WUFHU0MsT0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsY0FBU0EsR0FBMENBLEVBQUVBLENBQUNBO1FBd0IvREEsQ0FBQ0E7UUF0Qk9ELDJCQUFRQSxHQUFmQSxVQUFnQkEsQ0FBYUE7WUFDNUJFLElBQUlBLEdBQUdBLEdBQUdBLGFBQUtBLENBQUNBLFNBQVNBLENBQXFCQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUU3REEsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7Z0JBQ2xDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFFTUYsbUNBQWdCQSxHQUF2QkEsVUFBMkJBLElBQXNCQSxFQUFFQSxRQUE4QkEsRUFBRUEsSUFBU0E7WUFDM0ZHLElBQUlBLEdBQUdBLEdBQUdBLGFBQUtBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUFBO1lBRS9CQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUNoREEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFFeEVBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQUVNSCxzQ0FBbUJBLEdBQTFCQSxVQUE4QkEsSUFBc0JBLEVBQUVBLEVBQVNBO1lBQzlESSxJQUFJQSxHQUFHQSxHQUFHQSxhQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFBQTtZQUUvQkEsT0FBT0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDaENBLENBQUNBO1FBM0JGSjtZQUFDQSxxQkFBUUE7cUJBNEJSQTtRQUFEQSxlQUFDQTtJQUFEQSxDQTVCQSxBQTRCQ0EsSUFBQTtJQUVPLGdCQUFRLFlBRmY7SUFFZ0IiLCJmaWxlIjoiZXZlbnRidXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICdob3JjcnV4LWRpJyBcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL2V2ZW50JztcclxuXHJcblxyXG5AcmVnaXN0ZXJcclxuY2xhc3MgRXZlbnRCdXMge1xyXG5cdFxyXG5cdHByaXZhdGUgaWQgPSAwO1xyXG5cdHByaXZhdGUgbGlzdGVuZXJzOntbdHlwZTpzdHJpbmddOntbaWQ6bnVtYmVyXTpGdW5jdGlvbn19ID0ge307XHJcblx0XHJcblx0cHVibGljIGRpc3BhdGNoKGU6IEV2ZW50PGFueT4pOiB2b2lkIHtcclxuXHRcdGxldCBrZXkgPSBFdmVudC5ldmVudE5hbWUoPHtuZXcoKTpFdmVudDxhbnk+fT5lLmNvbnN0cnVjdG9yKTtcclxuXHJcblx0XHRmb3IobGV0IGlkIGluIHRoaXMubGlzdGVuZXJzW2tleV0pe1xyXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1trZXldW2lkXShlKTtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIGFkZEV2ZW50TGlzdGVuZXI8VD4odHlwZToge25ldygpOkV2ZW50PFQ+fSwgbGlzdGVuZXI6IChkYXRhOkV2ZW50PFQ+KT0+YW55LCBzZWxmPzphbnkpOiBudW1iZXIge1xyXG5cdFx0bGV0IGtleSA9IEV2ZW50LmV2ZW50TmFtZSh0eXBlKVxyXG5cdFx0XHJcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldID0gdGhpcy5saXN0ZW5lcnNba2V5XSB8fCB7fTtcclxuXHRcdHRoaXMubGlzdGVuZXJzW2tleV1bKyt0aGlzLmlkXSghIXNlbGYgPyBsaXN0ZW5lci5iaW5kKHNlbGYpIDogbGlzdGVuZXIpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdGhpcy5pZDtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHJlbW92ZUV2ZW50TGlzdGVuZXI8VD4odHlwZToge25ldygpOkV2ZW50PFQ+fSwgaWQ6bnVtYmVyKTogdm9pZCB7XHJcblx0XHRsZXQga2V5ID0gRXZlbnQuZXZlbnROYW1lKHR5cGUpXHJcblx0XHRcclxuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1trZXldW2lkXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnRCdXN9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
