function aa5(aaa) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    console.log(aaa, y);
}
aa5(2, '이름');
aa5(2, 'a', 'b');
