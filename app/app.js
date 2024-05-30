var Ellipsoid = /** @class */ (function () {
    function Ellipsoid() {
        this.bindHtml();
        this.handleEvent();
    }
    Ellipsoid.prototype.bindHtml = function () {
        this.aIn = document.querySelector("#ain");
        this.bIn = document.querySelector("#bin");
        this.cIn = document.querySelector("#cin");
        this.Vol = document.querySelector("#vol");
        this.Calc = document.querySelector("#Calcbutton");
    };
    Ellipsoid.prototype.handleEvent = function () {
        var _this = this;
        var _a;
        (_a = this.Calc) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
            _this.StartCalc();
        });
    };
    Ellipsoid.prototype.StartCalc = function () {
        var _a, _b, _c;
        var a = Number((_a = this.aIn) === null || _a === void 0 ? void 0 : _a.value);
        var b = Number((_b = this.bIn) === null || _b === void 0 ? void 0 : _b.value);
        var c = Number((_c = this.cIn) === null || _c === void 0 ? void 0 : _c.value);
        var volume = this.VolumeCalc(a, b, c);
        this.rederResult(volume);
    };
    Ellipsoid.prototype.VolumeCalc = function (a, b, c) {
        return (4 / 3) * Math.PI * a * b * c;
    };
    Ellipsoid.prototype.calcArea = function (side, alpha) {
        var rad = alpha * Math.PI / 180;
        return Math.pow(side, 2) * Math.sin(rad);
    };
    Ellipsoid.prototype.rederResult = function (volume) {
        if (this.Vol) {
            this.Vol.value = String(volume);
        }
    };
    return Ellipsoid;
}());
new Ellipsoid();
