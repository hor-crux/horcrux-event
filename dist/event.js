define(["require", "exports"], function (require, exports) {
    var Event = (function () {
        function Event(data) {
            this.__data__ = data;
        }
        Object.defineProperty(Event.prototype, "data", {
            get: function () {
                return this.__data__;
            },
            enumerable: true,
            configurable: true
        });
        Event.eventName = function (eventClass) {
            return eventClass.toString().match(/function\s*(\w+)/)[1];
        };
        return Event;
    })();
    exports.Event = Event;
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV2ZW50LnRzIl0sIm5hbWVzIjpbIkV2ZW50IiwiRXZlbnQuY29uc3RydWN0b3IiLCJFdmVudC5kYXRhIiwiRXZlbnQuZXZlbnROYW1lIl0sIm1hcHBpbmdzIjoiO0lBQUE7UUFHQ0EsZUFBWUEsSUFBT0E7WUFDbEJDLElBQUlBLENBQUNBLFFBQVFBLEdBQUdBLElBQUlBLENBQUNBO1FBQ3RCQSxDQUFDQTtRQUVERCxzQkFBSUEsdUJBQUlBO2lCQUFSQTtnQkFDQ0UsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsUUFBUUEsQ0FBQUE7WUFDckJBLENBQUNBOzs7V0FBQUY7UUFFTUEsZUFBU0EsR0FBaEJBLFVBQWlCQSxVQUE4QkE7WUFDOUNHLE1BQU1BLENBQUNBLFVBQVVBLENBQUNBLFFBQVFBLEVBQUVBLENBQUNBLEtBQUtBLENBQUNBLGtCQUFrQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQUE7UUFDMURBLENBQUNBO1FBQ0ZILFlBQUNBO0lBQURBLENBZEEsQUFjQ0EsSUFBQTtJQUVPLGFBQUssU0FGWjtJQUVhIiwiZmlsZSI6ImV2ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiYWJzdHJhY3QgY2xhc3MgRXZlbnQ8VD4ge1xyXG5cdHByaXZhdGUgX19kYXRhX186IFQ7XHJcblx0XHJcblx0Y29uc3RydWN0b3IoZGF0YT86VCkge1xyXG5cdFx0dGhpcy5fX2RhdGFfXyA9IGRhdGE7XHJcblx0fVxyXG5cdFxyXG5cdGdldCBkYXRhKCk6IFQge1xyXG5cdFx0cmV0dXJuIHRoaXMuX19kYXRhX19cclxuXHR9XHJcblx0XHJcblx0c3RhdGljIGV2ZW50TmFtZShldmVudENsYXNzOiB7bmV3KCk6RXZlbnQ8YW55Pn0pOiBzdHJpbmcge1xyXG5cdFx0cmV0dXJuIGV2ZW50Q2xhc3MudG9TdHJpbmcoKS5tYXRjaCgvZnVuY3Rpb25cXHMqKFxcdyspLylbMV1cclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB7RXZlbnR9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
