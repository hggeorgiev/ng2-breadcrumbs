webpackJsonp([0,8],{

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book_component__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__books_component__ = __webpack_require__(495);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksModule", function() { return BooksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BOOK_ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__books_component__["a" /* BooksComponent */]
    },
    {
        path: 'book/:id/:breadcrumb',
        component: __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */]
    }
];
var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forChild(BOOK_ROUTES),
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__books_component__["a" /* BooksComponent */], __WEBPACK_IMPORTED_MODULE_3__book_book_component__["a" /* BookComponent */]]
    })
], BooksModule);

//# sourceMappingURL=books.module.js.map

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
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
    function BookComponent() {
        this.book = {
            "Id": 908,
            "Name": "THE FELLOWSHIP OF THE RING",
            "Price": 9.0,
            "Author": " J. R. R. Tolkien",
            "PictureURL": "http://www.tolkien.co.uk/file/IfbTdA8/e48239f6-ba35-4e69-858e-efd680f449b0.jpg",
            "Rating": 5
        };
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    return BookComponent;
}());
BookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-book',
        template: __webpack_require__(502),
        styles: [__webpack_require__(498)]
    }),
    __metadata("design:paramtypes", [])
], BookComponent);

//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(60);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BooksComponent = (function () {
    function BooksComponent(router, route) {
        this.router = router;
        this.route = route;
        this.books = [];
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.books.push({
            "Id": 908,
            "Name": "THE FELLOWSHIP OF THE RING",
            "Price": 9.0,
            "Author": " J. R. R. Tolkien",
            "PictureURL": "http://www.tolkien.co.uk/file/IfbTdA8/e48239f6-ba35-4e69-858e-efd680f449b0.jpg",
            "Rating": 5
        }, {
            "Id": 910,
            "Name": "THE RETURN OF THE KING",
            "Price": 13.0,
            "Author": " J. R. R. Tolkien",
            "PictureURL": "http://www.tolkien.co.uk/file/IfbTdA8/fc3a59a7-1abc-4be2-96ce-83266a98a2e8.jpg",
            "Rating": 4
        }, {
            "Id": 912,
            "Name": "Harry Potter and the Philosopher's Stone",
            "Price": 10.0,
            "Author": "J. K. Rowling",
            "PictureURL": "http://t0.gstatic.com/images?q=tbn:ANd9GcSXGpfJzjAobQVs1AmpnWQf4amf8RzgLbc7twV6nOLncOwASjUM",
            "Rating": 4
        }, {
            "Id": 913,
            "Name": "Harry Potter and the Chamber of Secrets",
            "Price": 13.0,
            "Author": "J. K. Rowling",
            "PictureURL": "http://t0.gstatic.com/images?q=tbn:ANd9GcS4oHYYPXATs31IpUW4VWiX0KTuxLgDr-hLQ0Ov4_WPfPTvk8Zt",
            "Rating": 5
        });
    };
    BooksComponent.prototype.goToBook = function (book) {
        this.router.navigate(['book', book.Id, book.Name], { relativeTo: this.route });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-books',
        template: __webpack_require__(503),
        styles: [__webpack_require__(500)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object])
], BooksComponent);

var _a, _b;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ 498:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(43)();
// imports


// module
exports.push([module.i, "img {\r\n    height: 300px;\r\n}\r\n\r\n\r\n.details-btn {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6 mt-4\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"{{book?.PictureURL}}\">\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\">{{book.Name}}</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 503:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-6 col-md-4 col-lg-3 mt-4\" *ngFor=\"let book of books\">\r\n            <div class=\"card\">\r\n                <img class=\"card-img-top\" src=\"{{book?.PictureURL}}\">\r\n                <div class=\"card-block\">\r\n                    <h6 class=\"card-title\">{{book.Name}}</h6>\r\n                    <div class=\"details-btn\">\r\n                        <a (click)=\"goToBook(book)\" class=\"btn btn-block btn-primary\">\r\n                            Details\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ })

});
//# sourceMappingURL=0.chunk.js.map