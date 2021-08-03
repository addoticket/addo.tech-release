(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-validate-order-code-validate-order-code-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/validate-order-code/validate-order-code.page.html":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/validate-order-code/validate-order-code.page.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesValidateOrderCodeValidateOrderCodePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n  <ion-button id=\"back\" size=\"small\" shape=\"round\" color=\"dark\" (click)=\"goBack()\">\n    <ion-label>{{'Common.back' | translate}}</ion-label>\n  </ion-button>\n\n  <div id=\"code-wrapper\">\n    <div>\n      <ion-item lines=\"none\">\n        <ion-input #input type=\"text\" readonly [placeholder]=\"'ValidateOrderCode.code_placeholder' | translate\"\n          [(ngModel)]=\"code\">\n        </ion-input>\n      </ion-item>\n      <ion-slides #handler>\n        <ion-slide>\n          <ion-button id=\"validate\" fill=\"outline\" shape=\"round\" color=\"dark\" (click)=\"validate()\">\n            <ion-label>{{'ValidateOrderCode.validate' | translate}}</ion-label>\n          </ion-button>\n        </ion-slide>\n        <ion-slide class=\"errorMessage\" [innerHTML]=\"'Errors.' + errorMessage | translate\"></ion-slide>\n      </ion-slides>\n\n    </div>\n  </div>\n\n  <div id=\"keyboard-wrapper\">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-grid class=\"keyboard\">\n            <ion-row *ngFor=\"let line of characters\">\n              <ion-col size=\"1\" class=\"key-wrapper\" *ngFor=\"let c of line\">\n                <div class=\"key\" (click)=\"pressKey(c)\">\n                  <div>{{c}}</div>\n                </div>\n              </ion-col>\n              <ion-col *ngIf=\"line.length == 9\" class=\"key-wrapper\" size='1'>\n                <div class=\"key negate\" (click)=\"backspace()\">\n                  <div style=\"text-transform: uppercase; padding: 1em 0.8em\">\n                    <ion-icon name=\"backspace-sharp\" style=\"--padding-start:0; --padding-end: 0;\"></ion-icon>\n                  </div>\n                </div>\n              </ion-col>\n              <ion-col *ngIf=\"line.length == 7\" class=\"key-wrapper\" size='3'>\n                <div class=\"key negate\" (click)=\"validate()\">\n                  <div style=\"text-transform: uppercase;\">{{'ValidateOrderCode.validate' | translate}}</div>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/validate-order-code/validate-order-code-routing.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/validate-order-code/validate-order-code-routing.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ValidateOrderCodePageRoutingModule */

    /***/
    function srcAppPagesValidateOrderCodeValidateOrderCodeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateOrderCodePageRoutingModule", function () {
        return ValidateOrderCodePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _validate_order_code_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./validate-order-code.page */
      "./src/app/pages/validate-order-code/validate-order-code.page.ts");

      var routes = [{
        path: '',
        component: _validate_order_code_page__WEBPACK_IMPORTED_MODULE_3__["ValidateOrderCodePage"]
      }];

      var ValidateOrderCodePageRoutingModule = function ValidateOrderCodePageRoutingModule() {
        _classCallCheck(this, ValidateOrderCodePageRoutingModule);
      };

      ValidateOrderCodePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ValidateOrderCodePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/validate-order-code/validate-order-code.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/validate-order-code/validate-order-code.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ValidateOrderCodePageModule */

    /***/
    function srcAppPagesValidateOrderCodeValidateOrderCodeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateOrderCodePageModule", function () {
        return ValidateOrderCodePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _validate_order_code_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./validate-order-code-routing.module */
      "./src/app/pages/validate-order-code/validate-order-code-routing.module.ts");
      /* harmony import */


      var _validate_order_code_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./validate-order-code.page */
      "./src/app/pages/validate-order-code/validate-order-code.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

      var ValidateOrderCodePageModule = function ValidateOrderCodePageModule() {
        _classCallCheck(this, ValidateOrderCodePageModule);
      };

      ValidateOrderCodePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _validate_order_code_routing_module__WEBPACK_IMPORTED_MODULE_5__["ValidateOrderCodePageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
        declarations: [_validate_order_code_page__WEBPACK_IMPORTED_MODULE_6__["ValidateOrderCodePage"]]
      })], ValidateOrderCodePageModule);
      /***/
    },

    /***/
    "./src/app/pages/validate-order-code/validate-order-code.page.scss":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/validate-order-code/validate-order-code.page.scss ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesValidateOrderCodeValidateOrderCodePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".key-wrapper > div {\n  margin: 0.1em;\n  border-radius: 0.5em;\n  border: 1px solid white;\n  display: flex;\n  align-items: center;\n}\n.key-wrapper > div > div {\n  margin: 0 auto;\n  padding: 1em;\n  text-align: center;\n}\nion-grid.keyboard {\n  --ion-grid-columns: 10;\n}\nion-slides ion-slide {\n  width: 100% !important;\n}\n.negate {\n  border: 3px solid white;\n}\n#code-wrapper {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  align-items: center;\n}\n#code-wrapper > div {\n  margin: 0 auto;\n  text-align: center;\n}\n#code-wrapper > div ion-item {\n  zoom: 3;\n  max-width: 50vw;\n  text-align: center;\n}\n#code-wrapper > div ion-button {\n  margin-top: 1em;\n  text-transform: uppercase;\n}\n#keyboard-wrapper {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n#back {\n  position: absolute;\n  top: 1em;\n  left: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmFsaWRhdGUtb3JkZXItY29kZS92YWxpZGF0ZS1vcmRlci1jb2RlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHUTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQU1BO0VBQ0ksc0JBQUE7QUFISjtBQU9JO0VBQ0ksc0JBQUE7QUFKUjtBQVFBO0VBQ0ksdUJBQUE7QUFMSjtBQVFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQU9JO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBTFI7QUFPUTtFQUNJLE9BQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFMWjtBQVFRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0FBTlo7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0FBUko7QUFXQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFSSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZhbGlkYXRlLW9yZGVyLWNvZGUvdmFsaWRhdGUtb3JkZXItY29kZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIua2V5LXdyYXBwZXIge1xuICAgIFxuICAgID4gZGl2IHtcbiAgICAgICAgbWFyZ2luOiAwLjFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41ZW07XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBcbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1ncmlkLmtleWJvYXJkIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICBpb24tc2xpZGUgeyBcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5uZWdhdGUge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xufVxuXG4jY29kZS13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA+IGRpdiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgem9vbTogMztcbiAgICAgICAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ja2V5Ym9hcmQtd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwOyBcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuI2JhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFlbTtcbiAgICBsZWZ0OiAxZW07XG59XG5cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/validate-order-code/validate-order-code.page.ts":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/validate-order-code/validate-order-code.page.ts ***!
      \***********************************************************************/

    /*! exports provided: ValidateOrderCodePage */

    /***/
    function srcAppPagesValidateOrderCodeValidateOrderCodePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ValidateOrderCodePage", function () {
        return ValidateOrderCodePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/global */
      "./src/app/services/global.ts");
      /* harmony import */


      var _services_orders_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/orders.service */
      "./src/app/services/orders.service.ts");
      /* harmony import */


      var _services_printer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/printer.service */
      "./src/app/services/printer.service.ts");

      var ValidateOrderCodePage = /*#__PURE__*/function () {
        function ValidateOrderCodePage(navCtrl, ordersService, loadingCtrl, printerService) {
          _classCallCheck(this, ValidateOrderCodePage);

          this.navCtrl = navCtrl;
          this.ordersService = ordersService;
          this.loadingCtrl = loadingCtrl;
          this.printerService = printerService;
          this.code = '';
          this.characters = [['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'], ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'], ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'], ['Z', 'X', 'C', 'V', 'B', 'N', 'M']];
        }

        _createClass(ValidateOrderCodePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.handler.lockSwipes(true);
            this.timeout = setTimeout(function () {
              _this.navCtrl.back();
            }, 3 * 60 * 1000);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            clearTimeout(this.timeout);
          }
        }, {
          key: "pressKey",
          value: function pressKey(key) {
            this.code += key;
          }
        }, {
          key: "backspace",
          value: function backspace() {
            this.code = this.code.substring(0, this.code.length - 1);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }, {
          key: "validate",
          value: function validate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var loading, canPrint, err;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        message: "loading..."
                      });

                    case 2:
                      loading = _context.sent;
                      loading.present();
                      _context.next = 6;
                      return this.printerService.canPrint();

                    case 6:
                      canPrint = _context.sent;

                      if (canPrint) {
                        _context.next = 15;
                        break;
                      }

                      err = {
                        error: {
                          code: "_CANT_PRINT"
                        }
                      };

                      _services_global__WEBPACK_IMPORTED_MODULE_3__["Global"].validationError.emit(err);

                      this.errorMessage = err.error.code;
                      _context.next = 13;
                      return loading.dismiss();

                    case 13:
                      this.showError();
                      return _context.abrupt("return");

                    case 15:
                      this.ordersService.validateAndPrint(this.code).subscribe(function (res) {
                        loading.dismiss();

                        _services_global__WEBPACK_IMPORTED_MODULE_3__["Global"].validationSuccess.emit(true);

                        _this2.navCtrl.back();

                        console.log(res);
                      }, function (err) {
                        _this2.errorMessage = err.error.code;
                        loading.dismiss();

                        _this2.showError();
                      }); // this.ordersService.validateOrderByCode(this.code)
                      //   .subscribe(async (res: any) => {
                      //     loading.dismiss();
                      //     if (res)
                      //       await this.printerService.printOrder(res);
                      //     Global.validationSuccess.emit(true);
                      //     this.navCtrl.back();
                      //   }, err => {
                      //     this.errorMessage = err.error.code;
                      //     loading.dismiss();
                      //     this.showError();
                      //   })

                    case 16:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showError",
          value: function showError() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var $input;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.handler.lockSwipes(false);
                      this.handler.slideTo(1);
                      this.handler.lockSwipes(true);
                      $input = this.input.el;
                      $input.className += ' shake';
                      setTimeout(function () {
                        _this3.handler.lockSwipes(false);

                        _this3.handler.slideTo(0);

                        _this3.handler.lockSwipes(true);

                        _this3.code = '';
                        $input.className = $input.className.replace(' shake', '');
                      }, 3000);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ValidateOrderCodePage;
      }();

      ValidateOrderCodePage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_orders_service__WEBPACK_IMPORTED_MODULE_4__["OrdersService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_printer_service__WEBPACK_IMPORTED_MODULE_5__["PrinterService"]
        }];
      };

      ValidateOrderCodePage.propDecorators = {
        handler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['handler']
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['input']
        }]
      };
      ValidateOrderCodePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-validate-order-code',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./validate-order-code.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/validate-order-code/validate-order-code.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./validate-order-code.page.scss */
        "./src/app/pages/validate-order-code/validate-order-code.page.scss"))["default"]]
      })], ValidateOrderCodePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-validate-order-code-validate-order-code-module-es5.js.map