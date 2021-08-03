(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  \n  <ion-button id=\"back\" size=\"small\" shape=\"round\" color=\"dark\" (click)=\"goBack()\">\n    <ion-label>{{'Common.back' | translate}}</ion-label>\n  </ion-button>\n  \n  <div id=\"faq-wrapper\">\n    <div class=\"collapse-content\">\n      <h3 style=\"text-align: center; margin-bottom:2em\">{{'Common.help' | translate}}</h3>\n      <div class=\"collapse\" *ngFor=\"let o of options\">\n        <ion-button expand=\"full\" fill=\"outline\" shape=\"round\" color=\"dark\"\n          (click)=\"checkbox.checked = !checkbox.checked\">\n          <ion-label>{{o.button}}</ion-label>\n        </ion-button>\n        <input #checkbox type=\"checkbox\" style=\"display:none\" />\n        <div class=\"content\">\n          <div class=\"inner-content\" [innerHTML]=\"o.description\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/faq/faq-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/faq/faq.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "./src/app/pages/faq/faq-routing.module.ts");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "./src/app/pages/faq/faq.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");








let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "./src/app/pages/faq/faq.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".collapse-content {\n  width: 100%;\n  margin: auto;\n}\n\n.collapse a {\n  display: block;\n  position: relative;\n}\n\n.collapse a:before {\n  content: \"\";\n  position: absolute;\n}\n\n.content {\n  max-height: 0em;\n  transition: 0.5s linear 0s;\n  overflow: hidden;\n}\n\n.collapse input[type=checkbox]:checked + .content {\n  max-height: 15em;\n  padding: 1em;\n}\n\n#faq-wrapper {\n  background: black;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n\n#faq-wrapper > div {\n  margin: 0 auto;\n  max-width: 70%;\n}\n\n#back {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n}\n\n#validate {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL2ZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFHRTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFFTTtFQUNJLGNBQUE7RUFDQSxjQUFBO0FBQVY7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXEvZmFxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb2xsYXBzZS1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gIH1cbiAgXG4gIC5jb2xsYXBzZSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5jb2xsYXBzZSBhOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIH1cbiAgXG4gIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAwZW07XG4gICAgdHJhbnNpdGlvbjogMC41cyBsaW5lYXIgMHM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmNvbGxhcHNlIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIC5jb250ZW50IHtcbiAgICBtYXgtaGVpZ2h0OiAxNWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgfVxuXG5cbiAgI2ZhcS13cmFwcGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgaGVpZ2h0OjEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICA+IGRpdiB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiA3MCVcbiAgICAgIH1cbiAgfVxuXG4jYmFjayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMWVtO1xuICAgIGxlZnQ6IDFlbTtcbn1cblxuI3ZhbGlkYXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxZW07XG4gICAgbGVmdDogMWVtO1xuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/faq/faq.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let FaqPage = class FaqPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.options = [
            {
                button: 'COME ACQUISTO E STAMPO UNA DRINK?',
                description: 'Scarica l’app “Addo – Che si fa stasera?” dallo store, registrati e acquista online la drink dell’evento in cui ti trovi. Paga con carta, GooglePay o ApplePay, scansiona il codice QR e stampa la drink da questo totem. Presentala al Bar per ordinare il tuo cocktail.'
            },
            {
                button: 'LO SCANNER NON FUNZIONA',
                description: 'Se lo scanner non funziona puoi cliccare sul pulsante “VALIDA MANUALMENTE” e inserire il codice ordine del tuo acquisto, per validare e stampare la tua drink.'
            },
            {
                button: 'LA STAMPANTE NON FUNZIONA',
                description: 'Se la stampante non funziona o il totem è offline recati in cassa per segnalare il problema e validare la drink acquistata.'
            },
            {
                button: 'LA MIA DRINK PUÒ ESSERE RIMBORSATA?',
                description: 'Si ma solo in particolare casi. <br> Puoi trovarli in termini e condizioni online nel nostro sito, o nell’app “Addo – Che si fa stasera?”.'
            },
        ];
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.timeout = setTimeout(() => {
            this.navCtrl.back();
        }, 3 * 60 * 1000);
    }
    ionViewWillLeave() {
        clearTimeout(this.timeout);
    }
    goBack() {
        this.navCtrl.back();
    }
};
FaqPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faq.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faq.page.scss */ "./src/app/pages/faq/faq.page.scss")).default]
    })
], FaqPage);



/***/ })

}]);
//# sourceMappingURL=pages-faq-faq-module-es2015.js.map