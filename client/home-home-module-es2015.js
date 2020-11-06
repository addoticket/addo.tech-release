(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header [translucent]=\"true\" no-border>\n  <ion-toolbar no-border>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n\n\n  <!-- <ion-icon id=\"faq\" name=\"help-circle-outline\" color=\"dark\"></ion-icon> -->\n\n  <!-- <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n  <div style=\"display:flex; height: 100%; align-items: center\">\n    <div id=\"container\" class=\"ion-text-center\">\n      <img id=\"marker\" src=\"assets/totem-animation.gif\" style=\"width: 80%\" />\n      <div class=\"actions\">\n        <div class=\"instructions\">\n          {{'HomePage.info' | translate}}\n          <!-- <ol class=\"number-circle-list\">\n            <li class=\"number-circle-list--list-item\">Acquista tramite ADDO</li>\n            <li class=\"number-circle-list--list-item\">Scansiona il QRCode</li>\n            <li class=\"number-circle-list--list-item\">Consegna la drink al bar</li>\n          </ol> -->\n        </div>\n      </div>\n      <!-- <img id=\"marker\" src=\"assets/icon/addo-logo.png\" style=\"width: 100px\" />\n      \n      <div class=\"actions\">\n            <div class=\"instructions\" *ngIf=\"!errorMessage\">\n              <ol class=\"number-circle-list\">\n                <li class=\"number-circle-list--list-item\">Acquista tramite ADDO</li>\n                <li class=\"number-circle-list--list-item\">Scansiona il QRCode</li>\n                <li class=\"number-circle-list--list-item\">Consegna la drink al bar</li>\n              </ol>\n            </div>\n      </div> -->\n      <!-- <div class=\"errorMessage\" *ngIf=\"errorMessage\" style=\"font-size: 2em\">\n        {{'Errors.' + errorMessage | translate}}\n      </div> -->\n    </div>\n  </div>\n  <!-- <drink-ticket></drink-ticket> -->\n  <ion-button id=\"validate\" size=\"small\" fill=\"outline\" shape=\"round\" color=\"dark\"\n    [routerLink]=\"'/validate-order-code'\">\n    <ion-label>{{'HomePage.manual_validation' | translate}}</ion-label>\n  </ion-button>\n  <ion-button id=\"faq\" size=\"small\" fill=\"outline\" shape=\"round\" color=\"dark\" [routerLink]=\"'/faq'\">\n    <ion-label>{{'Common.help' | translate}}</ion-label>\n  </ion-button>\n  <!-- <ion-button routerLink=\"/confirm-order/5f199243d4f6cff743fc0ff0\">TEST</ion-button>\n  <ion-button (click)=\"printer.printText('Nice! Work fine!')\">PRINT TEST</ion-button> -->\n</ion-content>\n<!-- <ion-footer [translucent]=\"true\" no-border>\n  <ion-toolbar>\n    <ion-button fill=\"clear\" size=\"icon-only\" [routerLink]=\"'/admin/settings'\">\n      <ion-icon name=\"settings-sharp\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-footer> -->");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");









let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild()
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  text-transform: uppercase;\n}\n\n#container {\n  text-align: center;\n  width: 100vw;\n}\n\n#faq {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n}\n\n#validate {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.actions {\n  text-align: center;\n  font-size: 2em;\n}\n\n.instructions {\n  width: 100%;\n  font-size: 1em;\n  margin-top: 1em;\n}\n\n#arrow {\n  -webkit-animation: slideDown 1s infinite;\n          animation: slideDown 1s infinite;\n  font-size: 2em;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n  }\n  100% {\n    transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);\n  }\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);\n  }\n  100% {\n    transform: scale(0.97);\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n  }\n}\n\n@-webkit-keyframes slideDown {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(10vh);\n  }\n}\n\n@keyframes slideDown {\n  0% {\n    transform: translateY(0);\n  }\n  100% {\n    transform: translateY(10vh);\n  }\n}\n\n.number-circle-list {\n  list-style: none;\n  padding-left: 1rem;\n  counter-reset: circle-counter;\n  text-align: left;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n}\n\n.number-circle-list--list-item {\n  font-size: 0.8em;\n  counter-increment: circle-counter;\n  margin-bottom: 0.5rem;\n}\n\n.number-circle-list--list-item:before {\n  content: counter(circle-counter);\n  background-color: transparent;\n  border: 2px solid #fff;\n  width: 2.55rem;\n  height: 2.55rem;\n  border-radius: 50%;\n  display: inline-block;\n  font-size: 1.275rem;\n  line-height: 2.55rem;\n  color: white;\n  text-align: center;\n  margin-right: 0.5rem;\n  position: relative;\n  top: -2px;\n}\n\n.number-circle-list--list-item:last-child {\n  margin-bottom: 0;\n}\n\n.number-circle-list--list-item .number-circle-list--list-item {\n  margin-left: 0.25rem;\n}\n\n.number-circle-list--primary-color .number-circle-list--list-item:before {\n  background-color: #0d5cab;\n  color: white;\n}\n\n.number-circle-list--secondary-color .number-circle-list--list-item:before {\n  background-color: #72c267;\n  color: white;\n}\n\n.number-circle-list--tertiary-color .number-circle-list--list-item:before {\n  background-color: #168dde;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFiRjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBYkY7O0FBZ0JBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFmRjs7QUFrQkE7RUFDRSxxQkFBQTtBQWZGOztBQWtCQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQWZGOztBQWtCQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQWZKOztBQWtCQTtFQUNFLHdDQUFBO1VBQUEsZ0NBQUE7RUFDQSxjQUFBO0FBZkY7O0FBa0JBO0VBQ0M7SUFDQyxzQkFBQTtJQUNBLHNDQUFBO0VBZkE7RUFrQkQ7SUFDQyxtQkFBQTtJQUNBLHVDQUFBO0VBaEJBO0VBbUJEO0lBQ0Msc0JBQUE7SUFDQSxvQ0FBQTtFQWpCQTtBQUNGOztBQUdBO0VBQ0M7SUFDQyxzQkFBQTtJQUNBLHNDQUFBO0VBZkE7RUFrQkQ7SUFDQyxtQkFBQTtJQUNBLHVDQUFBO0VBaEJBO0VBbUJEO0lBQ0Msc0JBQUE7SUFDQSxvQ0FBQTtFQWpCQTtBQUNGOztBQW1CQTtFQUNDO0lBQ0Msd0JBQUE7RUFqQkE7RUFvQkQ7SUFDQywyQkFBQTtFQWxCQTtBQUNGOztBQVdBO0VBQ0M7SUFDQyx3QkFBQTtFQWpCQTtFQW9CRDtJQUNDLDJCQUFBO0VBbEJBO0FBQ0Y7O0FBdUNBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFwQks7RUFxQkwsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGNBQUE7QUFyQ0o7O0FBd0NBO0VBQ0UsZ0JBQUE7RUFDRSxpQ0FBQTtFQUNBLHFCQUFBO0FBckNKOztBQXNDSTtFQUNJLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQXZDUTtFQXdDUixrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBcENSOztBQXNDSTtFQUNJLGdCQUFBO0FBcENSOztBQXNDSTtFQUNJLG9CQUFBO0FBcENSOztBQTBDUTtFQUNJLHlCQS9DSTtFQWdESixZQS9DYTtBQVF6Qjs7QUE4Q1E7RUFDSSx5QkF0RE07RUF1RE4sWUF0RGU7QUFXM0I7O0FBa0RRO0VBQ0kseUJBN0RLO0VBOERMLFlBN0RjO0FBYzFCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwdnc7XG5cblxuICBpbWd7XG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIGxlZnQ6IDA7XG4gICAgLy8gcmlnaHQ6IDA7XG4gICAgLy8gdG9wOiA1MCU7XG4gICAgLy8gdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDEpO1xuICAgIC8vIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLy8gYW5pbWF0aW9uOiBwdWxzZSAwLjVzIGluZmluaXRlO1xuICB9XG59XG5cbiNmYXEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICByaWdodDogMWVtO1xufVxuXG4jdmFsaWRhdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICBsZWZ0OiAxZW07XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG4gIH1cblxuI2Fycm93IHtcbiAgYW5pbWF0aW9uOiBzbGlkZURvd24gMXMgaW5maW5pdGU7XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC45Nyk7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDAuNyk7XG5cdH1cblxuXHQ3MCUge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSk7XG5cdFx0Ym94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDApO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk3KTtcblx0XHRib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG5cdH1cbn1cbkBrZXlmcmFtZXMgc2xpZGVEb3duIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZoKTtcblx0fVxufVxuXG4kc3BhY2VyOiAxcmVtO1xuJGZvbnQtc2l6ZS0tYmFzZTogMS43cmVtO1xuJGRlZmF1bHQtY29sb3I6IHdoaXRlO1xuJGNvbG9yOiAjZmZmO1xuJGdyYXk6ICNmZmY7XG4kZ3JheS0tbGlnaHQ6IGxpZ2h0ZW4oJGdyYXksMTAlKTtcbiRncmF5LS1saWdodGVyOiBsaWdodGVuKCRncmF5LDIwJSk7XG4kZ3JheS0tbGlnaHRlc3Q6IGxpZ2h0ZW4oJGdyYXksMzUlKTtcbiRncmF5LS1kYXJrOiBkYXJrZW4oJGdyYXksMTAlKTtcbiRncmF5LS1kYXJrZXI6IGRhcmtlbigkZ3JheSwyMCUpO1xuJGdyYXktLWRhcmtlc3Q6IGRhcmtlbigkZ3JheSwzMCUpO1xuJHByaW1hcnktY29sb3I6ICMwZDVjYWI7XG4kcHJpbWFyeS1jb2xvci0taW52ZXJzZTogd2hpdGU7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzJjMjY3O1xuJHNlY29uZGFyeS1jb2xvci0taW52ZXJzZTogd2hpdGU7XG4kdGVydGlhcnktY29sb3I6ICMxNjhkZGU7XG4kdGVydGlhcnktY29sb3ItLWludmVyc2U6IHdoaXRlO1xuXG4ubnVtYmVyLWNpcmNsZS1saXN0IHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogJHNwYWNlcjtcbiAgICBjb3VudGVyLXJlc2V0OiBjaXJjbGUtY291bnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm51bWJlci1jaXJjbGUtbGlzdC0tbGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgICBjb3VudGVyLWluY3JlbWVudDogY2lyY2xlLWNvdW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogJHNwYWNlciouNTtcbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IGNvdW50ZXIoY2lyY2xlLWNvdW50ZXIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yO1xuICAgICAgICB3aWR0aDogJGZvbnQtc2l6ZS0tYmFzZSoxLjU7XG4gICAgICAgIGhlaWdodDogJGZvbnQtc2l6ZS0tYmFzZSoxLjU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmb250LXNpemU6ICRmb250LXNpemUtLWJhc2UqLjc1O1xuICAgICAgICBsaW5lLWhlaWdodDogJGZvbnQtc2l6ZS0tYmFzZSoxLjU7XG4gICAgICAgIGNvbG9yOiAkZGVmYXVsdC1jb2xvcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6ICRzcGFjZXIqLjU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMnB4O1xuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAubnVtYmVyLWNpcmNsZS1saXN0LS1saXN0LWl0ZW0ge1xuICAgICAgICBtYXJnaW4tbGVmdDogJHNwYWNlciouMjU7XG4gICAgfVxufVxuXG4ubnVtYmVyLWNpcmNsZS1saXN0LS1wcmltYXJ5LWNvbG9yIHtcbiAgICAubnVtYmVyLWNpcmNsZS1saXN0LS1saXN0LWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvci0taW52ZXJzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm51bWJlci1jaXJjbGUtbGlzdC0tc2Vjb25kYXJ5LWNvbG9yIHtcbiAgICAubnVtYmVyLWNpcmNsZS1saXN0LS1saXN0LWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3ItLWludmVyc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5udW1iZXItY2lyY2xlLWxpc3QtLXRlcnRpYXJ5LWNvbG9yIHtcbiAgICAubnVtYmVyLWNpcmNsZS1saXN0LS1saXN0LWl0ZW0ge1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVydGlhcnktY29sb3I7XG4gICAgICAgICAgICBjb2xvcjogJHRlcnRpYXJ5LWNvbG9yLS1pbnZlcnNlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/global */ "./src/app/services/global.ts");



let HomePage = class HomePage {
    constructor() {
        _services_global__WEBPACK_IMPORTED_MODULE_2__["Global"].validationError.subscribe(res => {
            this.errorMessage = res.error.code;
            setTimeout(() => {
                //this.showError();
            }, 100);
        });
    }
    showError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let $input = document.querySelector('.errorMessage');
            $input.className += ' shake';
            setTimeout(() => {
                this.errorMessage = "";
                $input.className = $input.className.replace(' shake', '');
            }, 3000);
        });
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map