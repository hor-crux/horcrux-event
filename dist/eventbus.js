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
            this.listeners[key][++this.id] = (!!self ? listener.bind(self) : listener);
            return this.id;
        };
        EventBus.prototype.removeEventListener = function (id) {
            for (var key in this.listeners) {
                if (id in this.listeners[key]) {
                    delete this.listeners[key][id];
                    return;
                }
            }
            console.log("Could not remove EventListener for ID '" + id + "'");
        };
        EventBus = __decorate([
            horcrux_di_1.register
        ], EventBus);
        return EventBus;
    })();
    exports.EventBus = EventBus;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50YnVzLnRzIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiRXZlbnRCdXMuY29uc3RydWN0b3IiLCJFdmVudEJ1cy5kaXNwYXRjaCIsIkV2ZW50QnVzLmFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudEJ1cy5yZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7SUFPNUM7UUFBQUE7WUFHU0MsT0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsY0FBU0EsR0FBMENBLEVBQUVBLENBQUNBO1FBNkIvREEsQ0FBQ0E7UUEzQk9ELDJCQUFRQSxHQUFmQSxVQUFnQkEsQ0FBYUE7WUFDNUJFLElBQUlBLEdBQUdBLEdBQUdBLGFBQUtBLENBQUNBLFNBQVNBLENBQXFCQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUU3REEsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7Z0JBQ2xDQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUM1QkEsQ0FBQ0E7UUFDRkEsQ0FBQ0E7UUFFTUYsbUNBQWdCQSxHQUF2QkEsVUFBMkJBLElBQXNCQSxFQUFFQSxRQUE4QkEsRUFBRUEsSUFBU0E7WUFDM0ZHLElBQUlBLEdBQUdBLEdBQUdBLGFBQUtBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLENBQUFBO1lBRS9CQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxFQUFFQSxDQUFDQTtZQUNoREEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsSUFBSUEsR0FBR0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsR0FBR0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7WUFFM0VBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBO1FBQ2hCQSxDQUFDQTtRQUVNSCxzQ0FBbUJBLEdBQTFCQSxVQUE4QkEsRUFBU0E7WUFDdENJLEdBQUdBLENBQUFBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLENBQUNBLENBQUNBO2dCQUMvQkEsRUFBRUEsQ0FBQUEsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQzlCQSxPQUFPQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtvQkFDL0JBLE1BQU1BLENBQUNBO2dCQUNSQSxDQUFDQTtZQUNGQSxDQUFDQTtZQUVEQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSx5Q0FBeUNBLEdBQUdBLEVBQUVBLEdBQUdBLEdBQUdBLENBQUNBLENBQUNBO1FBQ25FQSxDQUFDQTtRQWhDRko7WUFBQ0EscUJBQVFBO3FCQWlDUkE7UUFBREEsZUFBQ0E7SUFBREEsQ0FqQ0EsQUFpQ0NBLElBQUE7SUFFTyxnQkFBUSxZQUZmO0lBRWdCIiwiZmlsZSI6ImV2ZW50YnVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxyXG5cclxuXHJcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnaG9yY3J1eC1kaScgXHJcbmltcG9ydCB7IEV2ZW50IH0gZnJvbSAnLi9ldmVudCc7XHJcblxyXG5cclxuQHJlZ2lzdGVyXHJcbmNsYXNzIEV2ZW50QnVzIHtcclxuXHRcclxuXHRwcml2YXRlIGlkID0gMDtcclxuXHRwcml2YXRlIGxpc3RlbmVyczp7W3R5cGU6c3RyaW5nXTp7W2lkOm51bWJlcl06RnVuY3Rpb259fSA9IHt9O1xyXG5cdFxyXG5cdHB1YmxpYyBkaXNwYXRjaChlOiBFdmVudDxhbnk+KTogdm9pZCB7XHJcblx0XHRsZXQga2V5ID0gRXZlbnQuZXZlbnROYW1lKDx7bmV3KCk6RXZlbnQ8YW55Pn0+ZS5jb25zdHJ1Y3Rvcik7XHJcblxyXG5cdFx0Zm9yKGxldCBpZCBpbiB0aGlzLmxpc3RlbmVyc1trZXldKXtcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnNba2V5XVtpZF0oZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyBhZGRFdmVudExpc3RlbmVyPFQ+KHR5cGU6IHtuZXcoKTpFdmVudDxUPn0sIGxpc3RlbmVyOiAoZGF0YTpFdmVudDxUPik9PmFueSwgc2VsZj86YW55KTogbnVtYmVyIHtcclxuXHRcdGxldCBrZXkgPSBFdmVudC5ldmVudE5hbWUodHlwZSlcclxuXHRcdFxyXG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSA9IHRoaXMubGlzdGVuZXJzW2tleV0gfHwge307XHJcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldWysrdGhpcy5pZF0gPSAoISFzZWxmID8gbGlzdGVuZXIuYmluZChzZWxmKSA6IGxpc3RlbmVyKTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRoaXMuaWQ7XHJcblx0fVxyXG5cdFxyXG5cdHB1YmxpYyByZW1vdmVFdmVudExpc3RlbmVyPFQ+KGlkOm51bWJlcik6IHZvaWQge1xyXG5cdFx0Zm9yKHZhciBrZXkgaW4gdGhpcy5saXN0ZW5lcnMpIHtcclxuXHRcdFx0aWYoaWQgaW4gdGhpcy5saXN0ZW5lcnNba2V5XSkge1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1trZXldW2lkXTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2coXCJDb3VsZCBub3QgcmVtb3ZlIEV2ZW50TGlzdGVuZXIgZm9yIElEICdcIiArIGlkICsgXCInXCIpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHtFdmVudEJ1c30iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
