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
                }).call(this, id);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50YnVzLnRzIl0sIm5hbWVzIjpbIkV2ZW50QnVzIiwiRXZlbnRCdXMuY29uc3RydWN0b3IiLCJFdmVudEJ1cy5kaXNwYXRjaCIsIkV2ZW50QnVzLmFkZEV2ZW50TGlzdGVuZXIiLCJFdmVudEJ1cy5yZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSw0Q0FBNEM7Ozs7Ozs7Ozs7SUFPNUM7UUFBQUE7WUFHU0MsT0FBRUEsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDUEEsY0FBU0EsR0FBMENBLEVBQUVBLENBQUNBO1FBK0IvREEsQ0FBQ0E7UUE3Qk9ELDJCQUFRQSxHQUFmQSxVQUFnQkEsQ0FBYUE7WUFDNUJFLElBQUlBLEdBQUdBLEdBQUdBLGFBQUtBLENBQUNBLFNBQVNBLENBQXFCQSxDQUFDQSxDQUFDQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUU3REEsR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsRUFBRUEsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUEsQ0FBQ0E7Z0JBQ2xDQSxDQUFDQSxVQUFTQSxFQUFFQTtvQkFBWCxpQkFFQTtvQkFEQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFPLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLENBQUNBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUVBLEVBQUVBLENBQUNBLENBQUFBO1lBQ2xCQSxDQUFDQTtRQUNGQSxDQUFDQTtRQUVNRixtQ0FBZ0JBLEdBQXZCQSxVQUEyQkEsSUFBc0JBLEVBQUVBLFFBQStDQSxFQUFFQSxJQUFTQTtZQUM1R0csSUFBSUEsR0FBR0EsR0FBR0EsYUFBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQUE7WUFFL0JBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ2hEQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxFQUFFQSxJQUFJQSxDQUFDQSxFQUFFQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxHQUFHQSxRQUFRQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxRQUFRQSxDQUFDQSxDQUFDQTtZQUUzRUEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0E7UUFDaEJBLENBQUNBO1FBRU1ILHNDQUFtQkEsR0FBMUJBLFVBQThCQSxFQUFTQTtZQUN0Q0ksR0FBR0EsQ0FBQUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsR0FBR0EsSUFBSUEsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQy9CQSxFQUFFQSxDQUFBQSxDQUFDQSxFQUFFQSxJQUFJQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtvQkFDOUJBLE9BQU9BLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO29CQUMvQkEsTUFBTUEsQ0FBQ0E7Z0JBQ1JBLENBQUNBO1lBQ0ZBLENBQUNBO1lBRURBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLHlDQUF5Q0EsR0FBR0EsRUFBRUEsR0FBR0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDbkVBLENBQUNBO1FBbENGSjtZQUFDQSxxQkFBUUE7cUJBbUNSQTtRQUFEQSxlQUFDQTtJQUFEQSxDQW5DQSxBQW1DQ0EsSUFBQTtJQUVPLGdCQUFRLFlBRmY7SUFFZ0IiLCJmaWxlIjoiZXZlbnRidXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy90c2QuZC50c1wiIC8+XHJcblxyXG5cclxuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICdob3JjcnV4LWRpJyBcclxuaW1wb3J0IHsgRXZlbnQgfSBmcm9tICcuL2V2ZW50JztcclxuXHJcblxyXG5AcmVnaXN0ZXJcclxuY2xhc3MgRXZlbnRCdXMge1xyXG5cdFxyXG5cdHByaXZhdGUgaWQgPSAwO1xyXG5cdHByaXZhdGUgbGlzdGVuZXJzOntbdHlwZTpzdHJpbmddOntbaWQ6bnVtYmVyXTpGdW5jdGlvbn19ID0ge307XHJcblx0XHJcblx0cHVibGljIGRpc3BhdGNoKGU6IEV2ZW50PGFueT4pOiB2b2lkIHtcclxuXHRcdGxldCBrZXkgPSBFdmVudC5ldmVudE5hbWUoPHtuZXcoKTpFdmVudDxhbnk+fT5lLmNvbnN0cnVjdG9yKTtcclxuXHJcblx0XHRmb3IobGV0IGlkIGluIHRoaXMubGlzdGVuZXJzW2tleV0pe1xyXG5cdFx0XHQoZnVuY3Rpb24oaWQpIHtcclxuXHRcdFx0XHR0aGlzLmxpc3RlbmVyc1trZXldW2lkXShlLCAoKSA9PiB7dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGlkKTt9KTtcclxuXHRcdFx0fSkuY2FsbCh0aGlzLCBpZClcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0cHVibGljIGFkZEV2ZW50TGlzdGVuZXI8VD4odHlwZToge25ldygpOkV2ZW50PFQ+fSwgbGlzdGVuZXI6IChkYXRhOkV2ZW50PFQ+LCByZW1vdmU6RnVuY3Rpb24pPT5hbnksIHNlbGY/OmFueSk6IG51bWJlciB7XHJcblx0XHRsZXQga2V5ID0gRXZlbnQuZXZlbnROYW1lKHR5cGUpXHJcblx0XHRcclxuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0gPSB0aGlzLmxpc3RlbmVyc1trZXldIHx8IHt9O1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XVsrK3RoaXMuaWRdID0gKCEhc2VsZiA/IGxpc3RlbmVyLmJpbmQoc2VsZikgOiBsaXN0ZW5lcik7XHJcblx0XHRcclxuXHRcdHJldHVybiB0aGlzLmlkO1xyXG5cdH1cclxuXHRcclxuXHRwdWJsaWMgcmVtb3ZlRXZlbnRMaXN0ZW5lcjxUPihpZDpudW1iZXIpOiB2b2lkIHtcclxuXHRcdGZvcih2YXIga2V5IGluIHRoaXMubGlzdGVuZXJzKSB7XHJcblx0XHRcdGlmKGlkIGluIHRoaXMubGlzdGVuZXJzW2tleV0pIHtcclxuXHRcdFx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnNba2V5XVtpZF07XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGNvbnNvbGUubG9nKFwiQ291bGQgbm90IHJlbW92ZSBFdmVudExpc3RlbmVyIGZvciBJRCAnXCIgKyBpZCArIFwiJ1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnRCdXN9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
