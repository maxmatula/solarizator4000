(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\r\n  <div class=\"col-sm-12\">\r\n      <app-sixnums></app-sixnums>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sixnums/sixnums.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sixnums/sixnums.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 mb-5\">\r\n  <h2>Witaj w loterii SIXNUMS!</h2>\r\n  <hr>\r\n  <p class=\"desc\">WSZELKIE WYGRANE SĄ FIKCYJNE! <br>jest to tylko symulacja gry na 6 liczb aby pokazać\r\n    jaka jest szansa na wygraną :) <br> HCN = HajsCoin</p>\r\n  <div class=\"mb-2 col-sm-12 mt-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-4 text-center\">\r\n        <p>Iteracja: {{iteration}} | Wygrana: <span class=\"badge badge-success\">{{allTimeWinnings | number}} HCN</span>\r\n        </p>\r\n      </div>\r\n      <div class=\"col-sm-4 text-center\">\r\n        <p>Bilans: <span class=\"badge badge-secondary\">{{allTimeWinnings - allGamesTicket | number}} HCN</span></p>\r\n      </div>\r\n      <div class=\"col-sm-4 text-center\">\r\n        <p>Cena losu: {{ticketPrice}} HCN <br> Na wszystkie losy wydano <span\r\n            class=\"badge badge-danger\">{{allGamesTicket | number}} HCN</span></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"win-section2\">\r\n      <h3>Szóstka trafiona <span class=\"badge badge-success\">{{winmodel.sixes}}</span> razy!</h3>\r\n    </div>\r\n    <div class=\"win-section\">\r\n      <p class=\"wincount\">Jedynka: <span class=\"badge badge-danger\">{{winmodel.ones}}</span> | Dwójka: <span\r\n          class=\"badge badge-danger\">{{winmodel.twos}}</span> | Trójka: <span\r\n          class=\"badge badge-danger\">{{winmodel.threes}}</span> | Czwórka: <span class=\"badge badge-danger\">{{winmodel.fours}}</span> | Piątka: <span\r\n          class=\"badge badge-danger\">{{winmodel.fives}}</span></p>\r\n    </div>\r\n  </div>\r\n  <p>Ile razy chcesz zagrać?  <input type=\"number\" min=1 max=100000 value=\"1\" name=\"howManyPlay\" [(ngModel)]=\"howManyPlay\" class=\"form-control-sm\"\r\n    disabled readonly> <span class=\"textsmall\"> (max. 100 000)</span></p>\r\n    <div class=\"btn-group mb-3 fkd\">\r\n      <button class=\"btn btn-sm btn-secondary\" (click)=\"howManyPlay = 1\">1</button>\r\n      <button class=\"btn btn-sm btn-secondary\" (click)=\"howManyPlay = 100\">100</button>\r\n      <button class=\"btn btn-sm btn-secondary\" (click)=\"howManyPlay = 1000\">1 000</button>\r\n      <button class=\"btn btn-sm btn-secondary\" (click)=\"howManyPlay = 10000\">10 000</button>\r\n      <button class=\"btn btn-sm btn-secondary\" (click)=\"howManyPlay = 100000\">100 000</button>\r\n    </div>\r\n  <br>\r\n  <div class=\"btn-group fkc\">\r\n    <button class=\"btn btn-lg btn-warning\" (click)=\"clear()\">WYCZYŚĆ</button>\r\n    <button class=\"btn btn-lg btn-success\" (click)=\"startLottery(howManyPlay)\"> --- GRAJ ---</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_models/Lottery.ts":
/*!************************************!*\
  !*** ./src/app/_models/Lottery.ts ***!
  \************************************/
/*! exports provided: Lottery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lottery", function() { return Lottery; });
class Lottery {
}


/***/ }),

/***/ "./src/app/_models/winmodel.ts":
/*!*************************************!*\
  !*** ./src/app/_models/winmodel.ts ***!
  \*************************************/
/*! exports provided: Winmodel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Winmodel", function() { return Winmodel; });
class Winmodel {
    constructor() {
        this.ones = 0;
        this.twos = 0;
        this.threes = 0;
        this.fours = 0;
        this.fives = 0;
        this.sixes = 0;
    }
}


/***/ }),

/***/ "./src/app/_services/lotto.service.ts":
/*!********************************************!*\
  !*** ./src/app/_services/lotto.service.ts ***!
  \********************************************/
/*! exports provided: LottoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LottoService", function() { return LottoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LottoService = class LottoService {
    constructor() { }
    generateSixNumbersFromFourty() {
        return [...Array(39).keys()]
            .map(x => x + 1)
            .sort(() => Math.random() - 0.5)
            .slice(0, 6);
    }
    getNumbersMatch(lottoNumbers, userNumbers) {
        return lottoNumbers.filter(x => userNumbers.includes(x)).length;
    }
    getPriceFromMatch(match) {
        switch (match) {
            case 1: return 0;
            case 2: return 0;
            case 3: return 24;
            case 4: return 268;
            case 5: return 6510;
            case 6: return 2000000;
        }
        return 0;
    }
    addWinmodelWinnings(match, winmodel) {
        switch (match) {
            case 1:
                winmodel.ones += 1;
                break;
            case 2:
                winmodel.twos += 1;
                break;
            case 3:
                winmodel.threes += 1;
                break;
            case 4:
                winmodel.fours += 1;
                break;
            case 5:
                winmodel.fives += 1;
                break;
            case 6:
                winmodel.sixes += 1;
                break;
        }
        return 0;
    }
};
LottoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LottoService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".awesome {\r\n  color: #fff;\r\n  font-size: 45px;\r\n  font-weight: bold;\r\n  -webkit-animation: colorchange 20s infinite alternate;\r\n          animation: colorchange 20s infinite alternate;\r\n}\r\n\r\n@-webkit-keyframes colorchange {\r\n  0% {\r\n    color: white;\r\n  }\r\n  10% {\r\n    color: #d294ec;\r\n  }\r\n  20% {\r\n    color: #f1d743;\r\n  }\r\n  30% {\r\n    color: #d35400;\r\n  }\r\n  40% {\r\n    color: greenyellow;\r\n  }\r\n  50% {\r\n    color: red;\r\n  }\r\n  60% {\r\n    color: white;\r\n  }\r\n  70% {\r\n    color: #2980b9;\r\n  }\r\n  80% {\r\n    color: #f1c40f;\r\n  }\r\n  90% {\r\n    color: #2980b9;\r\n  }\r\n  100% {\r\n    color: pink;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxREFBNkM7VUFBN0MsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXdlc29tZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGFuaW1hdGlvbjogY29sb3JjaGFuZ2UgMjBzIGluZmluaXRlIGFsdGVybmF0ZTtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGNvbG9yY2hhbmdlIHtcclxuICAwJSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIDEwJSB7XHJcbiAgICBjb2xvcjogI2QyOTRlYztcclxuICB9XHJcbiAgMjAlIHtcclxuICAgIGNvbG9yOiAjZjFkNzQzO1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgY29sb3I6ICNkMzU0MDA7XHJcbiAgfVxyXG4gIDQwJSB7XHJcbiAgICBjb2xvcjogZ3JlZW55ZWxsb3c7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gIH1cclxuICA2MCUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgY29sb3I6ICMyOTgwYjk7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICBjb2xvcjogI2YxYzQwZjtcclxuICB9XHJcbiAgOTAlIHtcclxuICAgIGNvbG9yOiAjMjk4MGI5O1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGNvbG9yOiBwaW5rO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Lotto';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sixnums_sixnums_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sixnums/sixnums.component */ "./src/app/sixnums/sixnums.component.ts");
/* harmony import */ var _services_lotto_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_services/lotto.service */ "./src/app/_services/lotto.service.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _sixnums_sixnums_component__WEBPACK_IMPORTED_MODULE_5__["SixnumsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        providers: [
            _services_lotto_service__WEBPACK_IMPORTED_MODULE_6__["LottoService"],
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/sixnums/sixnums.component.css":
/*!***********************************************!*\
  !*** ./src/app/sixnums/sixnums.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wincount {\r\n  font-size: 1.4rem;\r\n}\r\n\r\n.win-section {\r\n  border: 1px solid  rgb(250, 149, 208);\r\n  padding: 15px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  background: rgb(14, 1, 12);\r\n}\r\n\r\n.win-section2 {\r\n  border: 1px solid  rgb(250, 149, 208);\r\n  border-bottom: none;\r\n  padding: 15px;\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  background: rgb(14, 1, 12);\r\n}\r\n\r\n.desc {\r\n  font-size: .9rem;\r\n  font-style: italic;\r\n}\r\n\r\n.textsmall {\r\n  font-weight: 100;\r\n  font-size: .8rem;\r\n  font-style: italic;\r\n}\r\n\r\n.form-control-sm {\r\n  border-radius: 0;\r\n  border: 1px solid  rgb(250, 149, 208);\r\n}\r\n\r\ninput:disabled {\r\n  background: rgb(14, 1, 12);\r\n  color: white;\r\n}\r\n\r\n.fkc .btn {\r\n  font-weight: 700;\r\n  color: rgb(14, 1, 12);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l4bnVtcy9zaXhudW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFdBQVc7RUFDWCxjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsV0FBVztFQUNYLGNBQWM7RUFDZCwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9zaXhudW1zL3NpeG51bXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aW5jb3VudCB7XHJcbiAgZm9udC1zaXplOiAxLjRyZW07XHJcbn1cclxuXHJcbi53aW4tc2VjdGlvbiB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIHJnYigyNTAsIDE0OSwgMjA4KTtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxNCwgMSwgMTIpO1xyXG59XHJcblxyXG4ud2luLXNlY3Rpb24yIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAgcmdiKDI1MCwgMTQ5LCAyMDgpO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTQsIDEsIDEyKTtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4udGV4dHNtYWxsIHtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLXNtIHtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICByZ2IoMjUwLCAxNDksIDIwOCk7XHJcbn1cclxuXHJcbmlucHV0OmRpc2FibGVkIHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTQsIDEsIDEyKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ma2MgLmJ0biB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiKDE0LCAxLCAxMik7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/sixnums/sixnums.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sixnums/sixnums.component.ts ***!
  \**********************************************/
/*! exports provided: SixnumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SixnumsComponent", function() { return SixnumsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_Lottery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/Lottery */ "./src/app/_models/Lottery.ts");
/* harmony import */ var _models_winmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/winmodel */ "./src/app/_models/winmodel.ts");
/* harmony import */ var _services_lotto_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/lotto.service */ "./src/app/_services/lotto.service.ts");





let SixnumsComponent = class SixnumsComponent {
    constructor(lottoService) {
        this.lottoService = lottoService;
        this.iteration = 0;
        this.howManyPlay = 1;
        this.lottery = new _models_Lottery__WEBPACK_IMPORTED_MODULE_2__["Lottery"]();
        this.lotteriesHistory = new Array();
        this.winmodel = new _models_winmodel__WEBPACK_IMPORTED_MODULE_3__["Winmodel"]();
        this.ticketPrice = 3.00;
        this.allGamesTicket = 0;
        this.allTimeWinnings = 0;
    }
    ngOnInit() {
        this.clear();
    }
    clear() {
        this.lottery = new _models_Lottery__WEBPACK_IMPORTED_MODULE_2__["Lottery"]();
        this.lotteriesHistory = new Array();
        this.winmodel = new _models_winmodel__WEBPACK_IMPORTED_MODULE_3__["Winmodel"]();
        this.iteration = 0;
        this.allGamesTicket = 0;
        this.allTimeWinnings = 0;
    }
    startLottery(times) {
        while (times > 0) {
            this.lotto();
            times--;
        }
    }
    lotto() {
        setTimeout(() => {
            this.lottery = new _models_Lottery__WEBPACK_IMPORTED_MODULE_2__["Lottery"]();
            this.lottery.userNumbers = this.lottoService.generateSixNumbersFromFourty();
            this.lottery.lotteryNumbers = this.lottoService.generateSixNumbersFromFourty();
            this.lottery.iteration = this.iteration;
            const match = this.lottoService.getNumbersMatch(this.lottery.lotteryNumbers, this.lottery.userNumbers);
            const win = this.lottoService.getPriceFromMatch(match);
            this.allTimeWinnings += win;
            this.lottoService.addWinmodelWinnings(match, this.winmodel);
            this.lottery.machCount = match;
            this.iteration += 1;
            this.lotteriesHistory.push(this.lottery);
            this.allGamesTicket += this.ticketPrice;
        }, 5);
    }
};
SixnumsComponent.ctorParameters = () => [
    { type: _services_lotto_service__WEBPACK_IMPORTED_MODULE_4__["LottoService"] }
];
SixnumsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sixnums',
        template: __webpack_require__(/*! raw-loader!./sixnums.component.html */ "./node_modules/raw-loader/index.js!./src/app/sixnums/sixnums.component.html"),
        styles: [__webpack_require__(/*! ./sixnums.component.css */ "./src/app/sixnums/sixnums.component.css")]
    })
], SixnumsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MaxSolisR\Desktop\lotto\solarizator4000\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map