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

module.exports = "<div class=\"container text-center\">\n  <div class=\"col-sm-12\">\n      <h6 class=\"mt-4 mb-2\">Totalizator</h6>\n      <h1 class=\"awesome\">SOLARIZATOR-4000</h1>\n      <hr>\n      <app-sixnums></app-sixnums>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sixnums/sixnums.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sixnums/sixnums.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-2\">\n  <h4>Witaj w loterii SIXNUMS!</h4>\n  <p class=\"desc\">coś jak lotto tylko lepsze bo nie trzeba czekać na wynik, <br>\n    ale też nic się nie da wygrać xD</p>\n  <div class=\"mb-2 col-sm-12\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 text-center\">\n        <p>Iteracja: {{iteration}} | Wygrana: <span class=\"badge badge-success\">{{allTimeWinnings}} PLN</span></p>\n      </div>\n      <div class=\"col-sm-6 text-center\">\n          <p>Cena losu: {{ticketPrice}} PLN | Na wszystkie losy wydano <span class=\"badge badge-warning\">{{allGamesTicket}} PLN</span></p>\n        </div>\n    </div>\n    <h3>Szóstka trafiona <span class=\"badge badge-success\">{{winCount}}</span> razy!</h3>\n    <br>\n    <div class=\"win-section\">\n      <p class=\"wincount\">Jedynka: <span class=\"badge badge-danger\">{{winmodel.ones}}</span> | Dwójka: <span\n          class=\"badge badge-danger\">{{winmodel.twos}}</span> | Trójka: <span\n          class=\"badge badge-danger\">{{winmodel.threes}}</span></p>\n      <p class=\"wincount\">Czwórka: <span class=\"badge badge-danger\">{{winmodel.fours}}</span> | Piątka: <span\n          class=\"badge badge-danger\">{{winmodel.fives}}</span></p>\n    </div>\n  </div>\n  <p>How many times you want to play? <input type=\"number\" min=1 max=50000 value=\"1\" name=\"howManyPlay\"\n      [(ngModel)]=\"howManyPlay\"></p>\n  <button class=\"btn btn-sm btn-warning mr-5\" (click)=\"clear()\">WYCZYŚĆ</button>\n  <button class=\"btn btn-lg btn-success\" (click)=\"lotto(howManyPlay)\">GRAJ!</button>\n</div>\n"

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
    }
}


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
        providers: [],
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

module.exports = ".wincount {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.win-section {\r\n  border: 1px solid  rgb(250, 149, 208);\r\n  padding: 15px;\r\n  width: 50%;\r\n  margin: 0 auto;\r\n  background: rgb(14, 1, 12);\r\n}\r\n\r\n.desc {\r\n  font-size: .9rem;\r\n  font-style: italic;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2l4bnVtcy9zaXhudW1zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3NpeG51bXMvc2l4bnVtcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndpbmNvdW50IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLndpbi1zZWN0aW9uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAgcmdiKDI1MCwgMTQ5LCAyMDgpO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBiYWNrZ3JvdW5kOiByZ2IoMTQsIDEsIDEyKTtcclxufVxyXG5cclxuLmRlc2Mge1xyXG4gIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcbiJdfQ== */"

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




let SixnumsComponent = class SixnumsComponent {
    constructor() {
        this.minNumber = 1;
        this.maxNumber = 40;
        this.winCount = 0;
        this.iteration = 0;
        this.howManyPlay = 1;
        this.availiableNumbersUser = [];
        this.availiableNumbersLotto = [];
        this.lottery = new _models_Lottery__WEBPACK_IMPORTED_MODULE_2__["Lottery"]();
        this.lotteriesHistory = new Array();
        this.winmodel = new _models_winmodel__WEBPACK_IMPORTED_MODULE_3__["Winmodel"]();
        this.ticketPrice = 3.00;
        this.allGamesTicket = 0;
        this.allTimeWinnings = 0;
    }
    ngOnInit() {
        this.resetLottoNumbers();
    }
    clear() {
        this.lottery = new _models_Lottery__WEBPACK_IMPORTED_MODULE_2__["Lottery"]();
        this.lotteriesHistory = new Array();
        this.winmodel = new _models_winmodel__WEBPACK_IMPORTED_MODULE_3__["Winmodel"]();
        this.winCount = 0;
        this.iteration = 0;
        this.allGamesTicket = 0;
        this.allTimeWinnings = 0;
    }
    resetLottoNumbers() {
        this.availiableNumbersUser = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
            33, 34, 35, 36, 37, 38, 39, 40];
        this.availiableNumbersLotto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
            16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
            33, 34, 35, 36, 37, 38, 39, 40];
    }
    lotto(times) {
        for (let i = 0; i < times; i++) {
            setTimeout(() => {
                let matchCount = 0;
                this.lottery.userNumbers = this.generateSixnumUser();
                this.lottery.lotteryNumbers = this.generateSixnumLotto();
                this.lottery.iteration = this.iteration;
                this.lottery.lotteryNumbers.forEach(lottNum => {
                    this.lottery.userNumbers.forEach(usrNum => {
                        if (lottNum === usrNum) {
                            matchCount += 1;
                        }
                    });
                });
                if (matchCount === 6) {
                    this.winCount += 1;
                    this.allTimeWinnings += 2000000;
                }
                if (matchCount === 1) {
                    this.winmodel.ones += 1;
                }
                if (matchCount === 2) {
                    this.winmodel.twos += 1;
                }
                if (matchCount === 3) {
                    this.winmodel.threes += 1;
                    this.allTimeWinnings += 24;
                }
                if (matchCount === 4) {
                    this.winmodel.fours += 1;
                    this.allTimeWinnings += 268;
                }
                if (matchCount === 5) {
                    this.winmodel.fives += 1;
                    this.allTimeWinnings += 6510;
                }
                this.lottery.machCount = matchCount;
                this.iteration += 1;
                this.lotteriesHistory.push(this.lottery);
                this.allGamesTicket += this.ticketPrice;
                this.resetLottoNumbers();
            }, 400);
        }
    }
    generateNumberUser() {
        const num = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
        if (this.availiableNumbersUser.some(x => x === num)) {
            this.availiableNumbersUser = this.availiableNumbersUser.filter(x => x !== num);
            return num;
        }
        else {
            this.generateNumberUser();
        }
    }
    generateNumberLotto() {
        const num = Math.floor(Math.random() * (this.maxNumber - this.minNumber + 1) + this.minNumber);
        if (this.availiableNumbersLotto.some(x => x === num)) {
            this.availiableNumbersLotto = this.availiableNumbersLotto.filter(x => x !== num);
            return num;
        }
        else {
            this.generateNumberUser();
        }
    }
    generateSixnumUser() {
        const six = [this.generateNumberUser(),
            this.generateNumberUser(), this.generateNumberUser(),
            this.generateNumberUser(), this.generateNumberUser(),
            this.generateNumberUser()];
        return six;
    }
    generateSixnumLotto() {
        const six = [this.generateNumberLotto(),
            this.generateNumberLotto(), this.generateNumberLotto(),
            this.generateNumberLotto(), this.generateNumberLotto(),
            this.generateNumberLotto()];
        return six;
    }
};
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

module.exports = __webpack_require__(/*! C:\Users\MaxSolisR\Desktop\lotto\Lotto\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map