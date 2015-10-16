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
                (function (id) {
                    var _this = this;
                    this.listeners[key][id](e, function () { _this.removeEventListener(id); });
                })(id);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50YnVzLnRzIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiRXZlbnRCdXMuY29uc3RydWN0b3IiLCJFdmVudEJ1cy5kaXNwYXRjaCIsIkV2ZW50QnVzLmFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudEJ1cy5yZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7SUFPNUM7UUFBQUE7WUFHU0MsT0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsY0FBU0EsR0FBMENBLEVBQUVBLENBQUNBO1FBK0IvREEsQ0FBQ0E7UUE3Qk9ELDJCQUFRQSxHQUFmQSxVQUFnQkEsQ0FBYUE7WUFDNUJFLElBQUlBLEdBQUdBLEdBQUdBLGFBQUtBLENBQUNBLFNBQVNBLENBQXFCQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUU3REEsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQSxVQUFTQSxFQUFFQTtvQkFBWCxpQkFFQTtvQkFEQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUFBO1lBQ1BBLENBQUNBO1FBQ0ZBLENBQUNBO1FBRU1GLG1DQUFnQkEsR0FBdkJBLFVBQTJCQSxJQUFzQkEsRUFBRUEsUUFBK0NBLEVBQUVBLElBQVNBO1lBQzVHRyxJQUFJQSxHQUFHQSxHQUFHQSxhQUFLQSxDQUFDQSxTQUFTQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFBQTtZQUUvQkEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsRUFBRUEsQ0FBQ0E7WUFDaERBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEdBQUdBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLFFBQVFBLENBQUNBLENBQUNBO1lBRTNFQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNoQkEsQ0FBQ0E7UUFFTUgsc0NBQW1CQSxHQUExQkEsVUFBOEJBLEVBQVNBO1lBQ3RDSSxHQUFHQSxDQUFBQSxDQUFDQSxHQUFHQSxDQUFDQSxHQUFHQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQTtnQkFDL0JBLEVBQUVBLENBQUFBLENBQUNBLEVBQUVBLElBQUlBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO29CQUM5QkEsT0FBT0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7b0JBQy9CQSxNQUFNQSxDQUFDQTtnQkFDUkEsQ0FBQ0E7WUFDRkEsQ0FBQ0E7WUFFREEsT0FBT0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EseUNBQXlDQSxHQUFHQSxFQUFFQSxHQUFHQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNuRUEsQ0FBQ0E7UUFsQ0ZKO1lBQUNBLHFCQUFRQTtxQkFtQ1JBO1FBQURBLGVBQUNBO0lBQURBLENBbkNBLEFBbUNDQSxJQUFBO0lBRU8sZ0JBQVEsWUFGZjtJQUVnQiIsImZpbGUiOiJldmVudGJ1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBpbmdzL3RzZC5kLnRzXCIgLz5cclxuXHJcblxyXG5pbXBvcnQgeyByZWdpc3RlciB9IGZyb20gJ2hvcmNydXgtZGknIFxyXG5pbXBvcnQgeyBFdmVudCB9IGZyb20gJy4vZXZlbnQnO1xyXG5cclxuXHJcbkByZWdpc3RlclxyXG5jbGFzcyBFdmVudEJ1cyB7XHJcblx0XHJcblx0cHJpdmF0ZSBpZCA9IDA7XHJcblx0cHJpdmF0ZSBsaXN0ZW5lcnM6e1t0eXBlOnN0cmluZ106e1tpZDpudW1iZXJdOkZ1bmN0aW9ufX0gPSB7fTtcclxuXHRcclxuXHRwdWJsaWMgZGlzcGF0Y2goZTogRXZlbnQ8YW55Pik6IHZvaWQge1xyXG5cdFx0bGV0IGtleSA9IEV2ZW50LmV2ZW50TmFtZSg8e25ldygpOkV2ZW50PGFueT59PmUuY29uc3RydWN0b3IpO1xyXG5cclxuXHRcdGZvcihsZXQgaWQgaW4gdGhpcy5saXN0ZW5lcnNba2V5XSl7XHJcblx0XHRcdChmdW5jdGlvbihpZCkge1xyXG5cdFx0XHRcdHRoaXMubGlzdGVuZXJzW2tleV1baWRdKGUsICgpID0+IHt0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoaWQpO30pO1xyXG5cdFx0XHR9KShpZClcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIGFkZEV2ZW50TGlzdGVuZXI8VD4odHlwZToge25ldygpOkV2ZW50PFQ+fSwgbGlzdGVuZXI6IChkYXRhOkV2ZW50PFQ+LCByZW1vdmU6RnVuY3Rpb24pPT5hbnksIHNlbGY/OmFueSk6IG51bWJlciB7XHJcblx0XHRsZXQga2V5ID0gRXZlbnQuZXZlbnROYW1lKHR5cGUpXHJcblx0XHRcclxuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0gPSB0aGlzLmxpc3RlbmVyc1trZXldIHx8IHt9O1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XVsrK3RoaXMuaWRdID0gKCEhc2VsZiA/IGxpc3RlbmVyLmJpbmQoc2VsZikgOiBsaXN0ZW5lcik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzLmlkO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcjxUPihpZDpudW1iZXIpOiB2b2lkIHtcclxuXHRcdGZvcih2YXIga2V5IGluIHRoaXMubGlzdGVuZXJzKSB7XHJcblx0XHRcdGlmKGlkIGluIHRoaXMubGlzdGVuZXJzW2tleV0pIHtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnNba2V5XVtpZF07XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlbW92ZSBFdmVudExpc3RlbmVyIGZvciBJRCAnXCIgKyBpZCArIFwiJ1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnRCdXN9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
