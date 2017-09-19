webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_note_component__ = __webpack_require__("../../../../../src/app/note/note.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/book', pathMatch: 'full' },
    { path: 'book', component: __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */] },
    { path: 'note', component: __WEBPACK_IMPORTED_MODULE_4__note_note_component__["a" /* NoteComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(routes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h1 class=\"title\">Welcome</h1>-->\n<!--<nav class=\"nav\">-->\n  <!--<a routerLink=\"/book\" class=\"link\">Address Book</a>-->\n  <!--<a routerLink=\"/note\" class=\"link\">Note</a>-->\n<!--</nav>-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__note_note_component__ = __webpack_require__("../../../../../src/app/note/note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_toggle_disable_directive__ = __webpack_require__("../../../../../src/app/book/toggle-disable.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_5__note_note_component__["a" /* NoteComponent */],
            __WEBPACK_IMPORTED_MODULE_7__book_toggle_disable_directive__["a" /* ToggleDisableDirective */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            // import the FormsModule before binding with [(ngModel)]
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        // add servers to providers array
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  font-size: 0;\n}\n.header .title, .header .btn {\n  display: inline-block;\n  vertical-align: middle;\n}\n.header .title {\n  font-size: 20px;\n  font-weight: bold;\n  color: #333;\n}\n.header .btn {\n  font-size: 14px;\n  color: #999;\n  text-decoration: none;\n  margin-left: 30px;\n  transition: 150ms all linear 0ms;\n}\n.header .btn:hover {\n  color: #000;\n  text-decoration: underline;\n}\n.table {\n  width: 100%;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  border-collapse: collapse;\n}\n.row {\n  background-color: aliceblue;\n}\n.row:nth-of-type(2n) {\n  background-color: antiquewhite;\n}\n.row-header {\n  background-color: antiquewhite;\n  line-height: 1.3;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.row-header .item.clickable {\n  cursor: pointer;\n  transition: 150ms all linear 0ms;\n}\n.row-header .item.clickable:hover {\n  background-color: rgba(0, 0, 0, .2);\n  font-weight: bold;\n}\n.row-header .item.clickable:active {\n  background-color: rgba(0, 0, 0, .6);\n  color: #fff;\n}\n.row-body {\n  border-top: 1px solid #ccc;\n  line-height: 1.8;\n}\n.row-footer {\n  border-top: 1px solid #ccc;\n  line-height: 1.8;\n}\n.item {\n  text-align: center;\n  font-size: 14px;\n  padding: 0;\n  transition: 150ms all linear 0ms;\n}\n.btn {\n  font-weight: bold;\n  color: #fff;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  transition: 150ms all linear 0ms;\n}\n.btn:active {\n  box-shadow: 1px 1px 1px 1px #ccc inset;\n}\n.btn-delete {\n  background-color: #804e39;\n}\n.btn-delete:hover {\n  background-color: #481c09;\n}\n.btn-update {\n  background-color: #215f21;\n}\n.btn-update:hover {\n  background-color: #0b3c0b;\n}\n.btn-add {\n  background-color: #3c3ce2;\n}\n.btn-add:hover {\n  background-color: #151598;\n}\n.item.selected .field-text, .item.selected .field-id {\n  background-color: rgba(0, 0, 0, .6);\n  color: #fff;\n}\n.field-text {\n  display: inline-block;\n  vertical-align: middle;\n  color: inherit;\n  background-color: inherit;\n  font-size: 14px;\n  line-height: 22px;\n  border: none;\n  box-sizing: border-box;\n  padding: 0 4px;\n}\n.field-id {\n  display: inline-block;\n  vertical-align: middle;\n  color: inherit;\n  background-color: inherit;\n  font-size: 14px;\n  line-height: 22px;\n  border: none;\n  box-sizing: border-box;\n  padding: 0 4px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1 class=\"header\">\n  <span class=\"title\">{{title}}</span>\n  <!--<a routerLink=\"/note\" class=\"btn btn-see-note\">See Notes</a>-->\n  <span (click)=\"toSeeNotes()\" class=\"btn btn-see-note\">See Notes</span>\n</h1>\n<table class=\"table\">\n  <tr class=\"row row-header\">\n    <td\n      (click)=\"toggleAllFields()\"\n      rowspan=\"2\" class=\"item clickable\">{{isAllFieldsSelected() ? '[v]' : '[ ]'}}</td>\n    <td\n      (click)=\"sortColumn('id')\"\n      rowspan=\"2\" class=\"item clickable\">ID</td>\n    <td\n      (click)=\"sortColumn('name')\"\n      rowspan=\"2\" class=\"item clickable\">Name</td>\n    <td\n      (click)=\"sortColumn('location')\"\n      rowspan=\"2\" class=\"item clickable\">Location</td>\n    <td\n      (click)=\"sortColumn('office')\"\n      rowspan=\"2\" class=\"item clickable\">Office</td>\n    <td colspan=\"2\" class=\"item\">Phone</td>\n  </tr>\n  <tr class=\"row row-header\">\n    <td\n      (click)=\"sortColumn('phoneOffice')\"\n      class=\"item clickable\">Office</td>\n    <td\n      (click)=\"sortColumn('phoneCell')\"\n      class=\"item clickable\">Cell</td>\n  </tr>\n  <tr\n    *ngFor=\"let item of addresses\"\n    [class.selected]=\"isAllRowFieldsSelected(item.fields)\"\n    class=\"row row-body\">\n    <td\n      (click)=\"toggleRow(item.fields)\"\n      [class.selected]=\"isAllRowFieldsSelected(item.fields)\"\n      class=\"item\">{{isAllRowFieldsSelected(item.fields) ? '[v]' : '[ ]'}}</td>\n    <td\n      (click)=\"toggleFieldSelectStatus(item.fields.id)\"\n      [class.selected]=\"item.fields.id.selected\"\n      class=\"item\">\n      <span class=\"field-id\">{{item.fields.id.value}}</span>\n    </td>\n    <td\n      (click)=\"toggleFieldSelectStatus(item.fields.name)\"\n      [class.selected]=\"item.fields.name.selected\"\n      class=\"item\">\n      <input\n        *ngIf=\"item.status !== 'toUpdate'\"\n        [(ngModel)]=\"item.fields.name.value\"\n        type=\"text\"\n        class=\"field-text\"\n        readonly=\"readonly\"\n        placeholder=\"name\">\n      <input\n        *ngIf=\"item.status === 'toUpdate'\"\n        [(ngModel)]=\"item.fields.name.value\"\n        type=\"text\"\n        class=\"field-text\"\n        placeholder=\"name\">\n    </td>\n    <td\n      (click)=\"toggleFieldSelectStatus(item.fields.location)\"\n      [class.selected]=\"item.fields.location.selected\"\n      class=\"item\">\n      <input\n        *ngIf=\"item.status !== 'toUpdate'\"\n        [(ngModel)]=\"item.fields.location.value\"\n        type=\"text\"\n        class=\"field-text\"\n        readonly=\"readonly\"\n        placeholder=\"location\">\n      <input\n        *ngIf=\"item.status === 'toUpdate'\"\n        [(ngModel)]=\"item.fields.location.value\"\n        type=\"text\"\n        class=\"field-text\"\n        placeholder=\"location\">\n    </td>\n    <td\n      (click)=\"toggleFieldSelectStatus(item.fields.office)\"\n      [class.selected]=\"item.fields.office.selected\"\n      class=\"item\">\n      <input\n        *ngIf=\"item.status !== 'toUpdate'\"\n        [(ngModel)]=\"item.fields.office.value\"\n        type=\"text\"\n        class=\"field-text\"\n        readonly=\"readonly\"\n        placeholder=\"office\">\n      <input\n        *ngIf=\"item.status === 'toUpdate'\"\n        [(ngModel)]=\"item.fields.office.value\"\n        type=\"text\"\n        class=\"field-text\"\n        placeholder=\"office\">\n    </td>\n    <td\n      (click)=\"toggleFieldSelectStatus(item.fields.phoneOffice)\"\n      [class.selected]=\"item.fields.phoneOffice.selected\"\n      class=\"item\">\n      <input\n        *ngIf=\"item.status !== 'toUpdate'\"\n        [(ngModel)]=\"item.fields.phoneOffice.value\"\n        type=\"text\"\n        class=\"field-text\"\n        readonly=\"readonly\"\n        placeholder=\"office phone\">\n      <input\n        *ngIf=\"item.status === 'toUpdate'\"\n        [(ngModel)]=\"item.fields.phoneOffice.value\"\n        type=\"text\"\n        class=\"field-text\"\n        placeholder=\"office phone\">\n    </td>\n    <td\n      (click)=\"toggleFieldSelectStatus(item.fields.phoneCell)\"\n      [class.selected]=\"item.fields.phoneCell.selected\"\n      class=\"item\">\n      <input\n        type=\"text\"\n        class=\"field-text\"\n        readonly=\"readonly\"\n        appToggleDisable\n        [(ngModel)]=\"item.fields.phoneCell.value\"\n        placeholder=\"cell phone\">\n    </td>\n  </tr>\n  <tr\n    *ngFor=\"let item of addressPlaceholders\"\n    class=\"row row-body\">\n    <td class=\"item\">[]</td>\n    <td class=\"item\"></td>\n    <td class=\"item\"></td>\n    <td class=\"item\"></td>\n    <td class=\"item\"></td>\n    <td class=\"item\"></td>\n    <td class=\"item\"></td>\n  </tr>\n  <tr class=\"row row-footer\">\n    <td class=\"item\"></td>\n    <td\n      (click)=\"toDeleteItems()\"\n      class=\"item btn btn-delete\">Delete</td>\n    <td class=\"item\"></td>\n    <td class=\"item\"></td>\n    <td class=\"item\"></td>\n    <td\n      (click)=\"toUpdateItems()\"\n      class=\"item btn btn-update\">Update</td>\n    <td\n      (click)=\"toAddItems()\"\n      class=\"item btn btn-add\">Add</td>\n  </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_service__ = __webpack_require__("../../../../../src/app/book/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = (function () {
    function BookComponent(addressService, router) {
        this.addressService = addressService;
        this.router = router;
        this.title = 'Address Book';
        this.sort = 'asc';
        this.sortFieldName = 'name';
        this.id = '0';
        this.addresses = [];
    }
    BookComponent.prototype.getAddresses = function () {
        var _this = this;
        this.addressService.getAddressesSlowly().then(function (addresses) { return _this.addresses = addresses; });
    };
    BookComponent.prototype.getAddressPlaceholders = function () {
        this.addressPlaceholders = this.addressService.getAddressesPlaceholders();
    };
    BookComponent.prototype.toDeleteItems = function () {
        this.addresses = this.addresses.filter(function (addr) {
            return Object.keys(addr.fields).filter(function (field) { return !addr.fields[field].selected; }).length > 0;
        });
    };
    BookComponent.prototype.toUpdateItems = function () {
        var _this = this;
        var rowsToUpdate = this.addresses.filter(function (row) { return row.status === 'toUpdate'; });
        if (rowsToUpdate.length === 0) {
            window.alert('No address is to be updated!');
            return;
        }
        var ids = [];
        for (var i = 0, len = rowsToUpdate.length; i < len; i++) {
            var row = rowsToUpdate[i];
            if (!this.validateRowData(row)) {
                window.alert('No empty field value is allowed.');
                return;
            }
            while (this.addresses.filter(function (addr) { return addr.fields.id.value === _this.id; }).length > 0) {
                this.id = '' + (parseInt(this.id, 10) + 1);
            }
            ids.push(this.id);
            row.fields.id.value = this.id;
            row.status = 'readable';
        }
        window.alert("Addresses to be updated will have ID values: " + ids.join(',') + ".");
    };
    BookComponent.prototype.validateRowData = function (row) {
        var fields = Object.keys(row.fields).filter(function (fieldName) { return fieldName !== 'id'; });
        for (var i = 0, len = fields.length; i < len; i++) {
            var val = row.fields[fields[i]].value;
            if (val === null || val === undefined || val === null || val === '') {
                return false;
            }
        }
        return true;
    };
    BookComponent.prototype.toAddItems = function () {
        this.addresses.push({
            status: 'toUpdate',
            fields: {
                id: {
                    value: '',
                    selected: false,
                    editable: false
                },
                name: {
                    value: '',
                    selected: false,
                    editable: true
                },
                location: {
                    value: '',
                    selected: false,
                    editable: true
                },
                office: {
                    value: '',
                    selected: false,
                    editable: true
                },
                phoneOffice: {
                    value: '',
                    selected: false,
                    editable: true
                },
                phoneCell: {
                    value: '',
                    selected: false,
                    editable: true
                }
            }
        });
    };
    // logVal(val: String): void {
    //   window.console.log(val);
    // }
    BookComponent.prototype.isAllRowFieldsSelected = function (fields) {
        return Object.keys(fields).filter(function (field) { return !fields[field].selected; }).length === 0;
    };
    BookComponent.prototype.setRow = function (fields, bool) {
        Object.keys(fields).forEach(function (field) { return fields[field].selected = bool; });
    };
    BookComponent.prototype.toggleFieldSelectStatus = function (field) {
        this.setAllAddressesFieldsSelectStatus(false);
        field.selected = !field.selected;
    };
    BookComponent.prototype.toggleRow = function (fields) {
        this.setRow(fields, !this.isAllRowFieldsSelected(fields));
    };
    BookComponent.prototype.toSeeNotes = function () {
        this.router.navigate(['/note']);
    };
    BookComponent.prototype.setAllAddressesFieldsSelectStatus = function (bool) {
        this.addresses.forEach(function (addr) {
            Object.keys(addr.fields).forEach(function (field) { return addr.fields[field].selected = bool; });
        });
    };
    BookComponent.prototype.isAllFieldsSelected = function () {
        var isAllFieldsSelected = true;
        for (var i = 0, len = this.addresses.length; i < len; i++) {
            var addr = this.addresses[i];
            var fields = Object.keys(addr.fields);
            for (var j = 0, length = fields.length; j < length; j++) {
                if (addr.fields[fields[j]].selected === false) {
                    isAllFieldsSelected = false;
                    break;
                }
            }
        }
        return isAllFieldsSelected;
    };
    BookComponent.prototype.toggleAllFields = function () {
        if (!this.isAllFieldsSelected()) {
            this.setAllAddressesFieldsSelectStatus(true);
        }
        else {
            this.setAllAddressesFieldsSelectStatus(false);
        }
    };
    BookComponent.prototype.sortColumn = function (fieldName) {
        this.setAllAddressesFieldsSelectStatus(false);
        var sort = this.sort;
        if (fieldName === this.sortFieldName) {
            sort = sort === 'asc' ? 'desc' : 'asc';
        }
        else {
            this.sortFieldName = fieldName;
            sort = 'asc';
        }
        this.sort = sort;
        this.addresses = this.addresses.sort(function (a, b) {
            if (sort === 'asc') {
                return a.fields[fieldName].value > b.fields[fieldName].value ? 1 : -1;
            }
            else {
                return b.fields[fieldName].value > a.fields[fieldName].value ? 1 : -1;
            }
        });
    };
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAddresses();
        this.getAddressPlaceholders();
        window.addEventListener('beforeunload', function (e) {
            window.localStorage.setItem('addresses', encodeURIComponent(JSON.stringify(_this.addresses)));
        });
    };
    BookComponent.prototype.ngOnDestroy = function () {
        window.localStorage.setItem('addresses', encodeURIComponent(JSON.stringify(this.addresses)));
    };
    return BookComponent;
}());
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book',
        template: __webpack_require__("../../../../../src/app/book/book.component.html"),
        styles: [__webpack_require__("../../../../../src/app/book/book.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], BookComponent);

var _a, _b;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_addresses__ = __webpack_require__("../../../../../src/app/book/mock-addresses.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BookService = (function () {
    function BookService() {
    }
    BookService.prototype.getAddresses = function () {
        var localAddresses = window.localStorage.getItem('addresses');
        if (localAddresses) {
            return Promise.resolve(JSON.parse(decodeURIComponent(localAddresses)));
        }
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_addresses__["a" /* ADDRESSES */]);
    };
    // to semulate a slow connection
    BookService.prototype.getAddressesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getAddresses()); }, 0);
        });
    };
    BookService.prototype.getAddressesPlaceholders = function () {
        return __WEBPACK_IMPORTED_MODULE_1__mock_addresses__["b" /* ADDRESSPLACEHOLDERS */];
    };
    BookService.prototype.getAddress = function (id) {
        return this.getAddresses().then(function (addresses) { return addresses.find(function (addr) { return addr.fields.id.value === id; }); });
    };
    return BookService;
}());
BookService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], BookService);

//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/book/mock-addresses.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADDRESSPLACEHOLDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDRESSES; });
var ADDRESSPLACEHOLDERS = [
    {
        status: 'placeholder',
        fields: {
            id: {
                value: '',
                selected: false,
                editable: false
            },
            name: {
                value: '',
                selected: false,
                editable: false
            },
            location: {
                value: '',
                selected: false,
                editable: false
            },
            office: {
                value: '',
                selected: false,
                editable: false
            },
            phoneOffice: {
                value: '',
                selected: false,
                editable: false
            },
            phoneCell: {
                value: '',
                selected: false,
                editable: false
            }
        }
    }
];
var ADDRESSES = [
    {
        status: 'readable',
        fields: {
            id: {
                value: '501',
                selected: false,
                editable: false
            },
            name: {
                value: 'Khali Zhang',
                selected: false,
                editable: false
            },
            location: {
                value: 'Shanghai',
                selected: false,
                editable: false
            },
            office: {
                value: 'C-103',
                selected: false,
                editable: false
            },
            phoneOffice: {
                value: 'x55778',
                selected: false,
                editable: false
            },
            phoneCell: {
                value: '650-353-1239',
                selected: false,
                editable: false
            }
        }
    },
    {
        status: 'readable',
        fields: {
            id: {
                value: '502',
                selected: false,
                editable: false
            },
            name: {
                value: 'Khali Zhang222',
                selected: false,
                editable: false
            },
            location: {
                value: 'Shanghai2222',
                selected: false,
                editable: false
            },
            office: {
                value: 'C-104',
                selected: false,
                editable: false
            },
            phoneOffice: {
                value: 'x55779',
                selected: false,
                editable: false
            },
            phoneCell: {
                value: '650-353-1240',
                selected: false,
                editable: false
            }
        }
    }
];
//# sourceMappingURL=mock-addresses.js.map

/***/ }),

/***/ "../../../../../src/app/book/toggle-disable.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleDisableDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleDisableDirective = (function () {
    function ToggleDisableDirective(el) {
        this.el = el;
    }
    ToggleDisableDirective.prototype.onDblClick = function () {
        this.setDisableStatus(false);
    };
    ToggleDisableDirective.prototype.onMouseLeave = function () {
        this.setDisableStatus(true);
    };
    // private toggleDisableStatus() {
    //   const isReadonly = this.el.nativeElement.getAttribute('readonly') || false;
    //   if (isReadonly) {
    //     this.setDisableStatus(false);
    //   } else {
    //     this.setDisableStatus(true);
    //   }
    // }
    ToggleDisableDirective.prototype.setDisableStatus = function (bool) {
        if (bool) {
            this.el.nativeElement.setAttribute('readonly', 'readonly');
        }
        else {
            this.el.nativeElement.removeAttribute('readonly');
        }
    };
    return ToggleDisableDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('dblclick'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToggleDisableDirective.prototype, "onDblClick", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToggleDisableDirective.prototype, "onMouseLeave", null);
ToggleDisableDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appToggleDisable]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], ToggleDisableDirective);

var _a;
//# sourceMappingURL=toggle-disable.directive.js.map

/***/ }),

/***/ "../../../../../src/app/note/note.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  height: 50px;\n  line-height: 50px;\n  font-size: 30px;\n  text-align: center;\n}\n.article {\n  margin-top: 20px;\n  font-size: 14px;\n  line-height: 1.3;\n  padding: 10px 20px;\n  text-align: center;\n}\n.btns {\n  margin-top: 20px;\n  text-align: center;\n}\n.btn {\n  display: inline-block;\n  vertical-align: middle;\n  height: 30px;\n  line-height: 30px;\n  font-size: 14px;\n  color: #fff;\n  background-color: #3478cd;\n  padding: 0 8px;\n  border-radius: 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n.btn:active {\n  box-shadow: 1px 1px 1px 1px #ccc;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/note/note.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Note</h1>\n<article class=\"article\">This is an Angular Address Book demo ^_^</article>\n<footer class=\"btns\">\n  <span (click)=\"goBack()\" class=\"btn btn-back\">Back</span>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/note/note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteComponent = (function () {
    function NoteComponent(location) {
        this.location = location;
    }
    NoteComponent.prototype.goBack = function () {
        this.location.back();
    };
    NoteComponent.prototype.ngOnInit = function () {
    };
    return NoteComponent;
}());
NoteComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-note',
        template: __webpack_require__("../../../../../src/app/note/note.component.html"),
        styles: [__webpack_require__("../../../../../src/app/note/note.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _a || Object])
], NoteComponent);

var _a;
//# sourceMappingURL=note.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map