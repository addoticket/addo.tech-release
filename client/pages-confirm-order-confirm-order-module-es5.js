(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-confirm-order-confirm-order-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirm-order/confirm-order.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirm-order/confirm-order.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesConfirmOrderConfirmOrderPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>confirm-order</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ng-container *ngIf=\"order\">\n    <ion-grid class=\"order\">\n      <ion-row>\n        <ion-col></ion-col>\n      </ion-row>\n      <ion-row class=\"header\">\n        <ion-col size=\"6\">{{'ConfirmOrderPage.table.row.name' | translate}}</ion-col>\n        <ion-col size=\"3\">{{'ConfirmOrderPage.table.row.qta' | translate}}</ion-col>\n        <ion-col size=\"3\">{{'ConfirmOrderPage.table.row.price' | translate}}</ion-col>\n      </ion-row>\n      <ion-row class=\"body\" *ngFor=\"let r of order.rows\">\n        <ion-col size=\"6\">{{r.name}}</ion-col>\n        <ion-col size=\"3\">{{r.qta}}</ion-col>\n        <ion-col size=\"3\">{{((r.price || 0)/100).toFixed(2)}}€</ion-col>\n      </ion-row>\n      <ion-row class=\"footer\">\n        <ion-col size=\"9\"></ion-col>\n        <ion-col size=\"3\">{{'ConfirmOrderPage.table.total' | translate}}: {{total.toFixed(2)}}€</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <div class=\"ion-text-center\" *ngIf=\"!order.validated\">\n      <ion-text color=\"success\">\n        {{'ConfirmOrderPage.scan_to_print' | translate}}\n      </ion-text>\n    </div>\n    <div class=\"ion-text-center\" *ngIf=\"order.validated\">\n      <ion-text color=\"danger\">\n        {{'ConfirmOrderPage.order_not_valid' | translate}} {{order.validated | date:('Common.Date.datetime'|translate)}}\n      </ion-text>\n    </div>\n  </ng-container>\n  <!-- \n  <pre *ngIf=\"order\">\n    {{order | json}}\n  </pre> -->\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-button [disabled]=\"order && order.validated\" (click)=\"validate()\">\n      {{'ConfirmOrderPage.print' | translate}}\n    </ion-button>\n  </ion-toolbar>\n</ion-footer>\n\n<loading #loading *ngIf=\"printerAnimation\" [components]=\"[printerAnimation]\"></loading>\n";
      /***/
    },

    /***/
    "./src/app/pages/confirm-order/confirm-order-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/confirm-order/confirm-order-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: ConfirmOrderPageRoutingModule */

    /***/
    function srcAppPagesConfirmOrderConfirmOrderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageRoutingModule", function () {
        return ConfirmOrderPageRoutingModule;
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


      var _confirm_order_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./confirm-order.page */
      "./src/app/pages/confirm-order/confirm-order.page.ts");

      var routes = [{
        path: '',
        component: _confirm_order_page__WEBPACK_IMPORTED_MODULE_3__["ConfirmOrderPage"]
      }];

      var ConfirmOrderPageRoutingModule = function ConfirmOrderPageRoutingModule() {
        _classCallCheck(this, ConfirmOrderPageRoutingModule);
      };

      ConfirmOrderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ConfirmOrderPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/confirm-order/confirm-order.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/confirm-order/confirm-order.module.ts ***!
      \*************************************************************/

    /*! exports provided: ConfirmOrderPageModule */

    /***/
    function srcAppPagesConfirmOrderConfirmOrderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmOrderPageModule", function () {
        return ConfirmOrderPageModule;
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


      var _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./confirm-order-routing.module */
      "./src/app/pages/confirm-order/confirm-order-routing.module.ts");
      /* harmony import */


      var _confirm_order_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./confirm-order.page */
      "./src/app/pages/confirm-order/confirm-order.page.ts");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../components/components.module */
      "./src/app/components/components.module.ts");

      var ConfirmOrderPageModule = function ConfirmOrderPageModule() {
        _classCallCheck(this, ConfirmOrderPageModule);
      };

      ConfirmOrderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _confirm_order_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConfirmOrderPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()],
        declarations: [_confirm_order_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmOrderPage"]]
      })], ConfirmOrderPageModule);
      /***/
    },

    /***/
    "./src/app/pages/confirm-order/confirm-order.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/confirm-order/confirm-order.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesConfirmOrderConfirmOrderPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".order ion-col {\n  padding: 1em 0;\n}\n.order ion-row.header > ion-col {\n  font-weight: 900;\n  border-bottom: 1px solid;\n}\n.order ion-row.body ion-col {\n  padding: 1em 0 0 0;\n}\n.order ion-row.body > ion-col:last-child {\n  padding: 1em 0;\n}\n.order ion-row.footer > ion-col {\n  font-weight: 900;\n  border-top: 1px solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29uZmlybS1vcmRlci9jb25maXJtLW9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGNBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQUZSO0FBTVE7RUFDSSxrQkFBQTtBQUpaO0FBT1E7RUFDSSxjQUFBO0FBTFo7QUFTSTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFQUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbmZpcm0tb3JkZXIvY29uZmlybS1vcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3JkZXIge1xuXG4gICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgIH1cblxuICAgIGlvbi1yb3cuaGVhZGVyPmlvbi1jb2wge1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XG4gICAgfVxuXG4gICAgaW9uLXJvdy5ib2R5IHtcbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxZW0gMCAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICA+aW9uLWNvbDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFlbSAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLXJvdy5mb290ZXI+aW9uLWNvbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/confirm-order/confirm-order.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/confirm-order/confirm-order.page.ts ***!
      \***********************************************************/

    /*! exports provided: ConfirmOrderPage */

    /***/
    function srcAppPagesConfirmOrderConfirmOrderPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfirmOrderPage", function () {
        return ConfirmOrderPage;
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


      var _services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/orders.service */
      "./src/app/services/orders.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _components_printer_animation_printer_animation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../components/printer-animation/printer-animation.component */
      "./src/app/components/printer-animation/printer-animation.component.ts");

      var ConfirmOrderPage = /*#__PURE__*/function () {
        function ConfirmOrderPage(route, ordersService, loadingCtrl, navCtrl) {
          _classCallCheck(this, ConfirmOrderPage);

          this.route = route;
          this.ordersService = ordersService;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.total = 0;
          this.printerAnimation = _components_printer_animation_printer_animation_component__WEBPACK_IMPORTED_MODULE_5__["PrinterAnimationComponent"];
        }

        _createClass(ConfirmOrderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.timeout = setTimeout(function () {
                        _this.navCtrl.navigateRoot('/');
                      }, 20000);
                      _context.next = 3;
                      return this.loadingCtrl.create({
                        message: "loading..."
                      });

                    case 3:
                      loading = _context.sent;
                      loading.present();
                      this.ordersService.findById(this.route.snapshot.params.id).subscribe(function (res) {
                        loading.dismiss();
                        _this.order = res;
                        _this.total = _this.order.rows.map(function (r) {
                          return r.price * r.qta;
                        }).reduce(function (a, b) {
                          return a + b;
                        }, 0) / 100;
                      }, function (err) {
                        loading.dismiss();
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            clearTimeout(this.timeout);
          }
        }, {
          key: "validate",
          value: function validate() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.loading.show();
                      clearTimeout(this.timeout); // let loading = await this.loadingCtrl.create({message: "loading..."});
                      // loading.present();

                      this.ordersService.validateOrder(this.order).subscribe(function (res) {
                        _this2.order = res; // loading.dismiss();

                        _this2.loading.hide();
                      }, function (err) {
                        // loading.dismiss();
                        _this2.loading.hide();
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ConfirmOrderPage;
      }();

      ConfirmOrderPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_orders_service__WEBPACK_IMPORTED_MODULE_3__["OrdersService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      ConfirmOrderPage.propDecorators = {
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['loading']
        }]
      };
      ConfirmOrderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-order',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./confirm-order.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/confirm-order/confirm-order.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./confirm-order.page.scss */
        "./src/app/pages/confirm-order/confirm-order.page.scss"))["default"]]
      })], ConfirmOrderPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-confirm-order-confirm-order-module-es5.js.map