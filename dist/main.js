var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var searchStr = "foo";
var hasSearchedString = any(function (el) { return el.contains(searchStr); }, [
    "fooooo",
    "bar",
    "baz",
]);
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user = {
    name: "Jack",
    data: {
        meta: "foo"
    },
    meta: "bar"
};
var user2 = {
    name: "John",
    data: ["foo", "bar", "baz"]
};
var result = addId(user);
console.log("result", result);
