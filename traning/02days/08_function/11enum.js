var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
;
console.log(Color.red, Color.blue, Color.green);
var DAY;
(function (DAY) {
    DAY[DAY["mon"] = 1] = "mon";
    DAY[DAY["tue"] = 2] = "tue";
    DAY[DAY["wed"] = 3] = "wed";
})(DAY || (DAY = {}));
;
console.log(DAY.mon, DAY.tue, DAY.wed);
