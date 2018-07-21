(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_3__["NewComponent"] },
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_4__["EditComponent"] },
    { path: 'pets/:id', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: '', pathMatch: 'full', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n  <nav>\n    <div class=\"nav-wrapper\">\n      <a href=\"#\" class=\"brand-logo\">Pet Shelter</a>\n    </div>\n  </nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s8\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _pet_pet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pet/pet.component */ "./src/app/pet/pet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_7__["NewComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_8__["DetailComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _pet_pet_component__WEBPACK_IMPORTED_MODULE_10__["PetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.css":
/*!*********************************************!*\
  !*** ./src/app/detail/detail.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Details for {{curPet.name}}</h3>\n\n<p>Type: {{curPet.type}}</p>\n\n<p>Type: {{curPet.description}}</p>\n\n<p [(ngModel)] = \"likes\">Like: {{likes}}</p>\n\n<p>Skills</p>\n<p *ngFor = \"let skill of skills\">\n\t{{skill.skill}}\n</p>\n\n<button (click) = \"likePet(curPet._id, curPet)\" [disabled] = \"liked\">Like this pet</button>\n\n<button (click) = \"adoptPet(curPet._id)\">Adopt this pet</button>\n\n<button [routerLink] = \"['/']\" >Home</button>"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailComponent = /** @class */ (function () {
    function DetailComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.liked = false;
        this.curPet = {};
        this.skills = [];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getPet(this.p_id)
        this._route.params.subscribe(function (params) {
            _this.getPet(params['id']);
        });
    };
    DetailComponent.prototype.getPet = function (id) {
        var _this = this;
        var obvs = this._http.getPet(id);
        obvs.subscribe(function (data) {
            _this.curPet = data;
            _this.skills = _this.curPet.skills;
            _this.likes = data["likes"];
            console.log(data);
        });
    };
    DetailComponent.prototype.adoptPet = function (id) {
        var obvs = this._http.removePet(id);
        obvs.subscribe(function (data) { return console.log(data); });
        this._router.navigate(['/']);
    };
    DetailComponent.prototype.likePet = function (id, pet) {
        var _this = this;
        this.liked = true;
        this.likes++;
        var obvs = this._http.addLike(id, pet);
        obvs.subscribe(function (data) {
            console.log(data);
            _this.getPet(id);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailComponent.prototype, "p_id", void 0);
    DetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.css */ "./src/app/detail/detail.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form  #editForm=\"ngForm\" (submit) = \"updatePet(curPet._id, curPet)\">\n\t<h4>Edit pet:</h4>\n\t<div class=\"card-panel red white-text\" *ngIf = \"errors\">{{errors}}</div>\n\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"card-panel red white-text\">\n\t  <div *ngIf=\"name.errors.required\">\n\t    Name is required.\n\t  </div>\n\t  <div *ngIf=\"name.errors.minlength\">\n\t    Name must be at least 3 characters long.\n\t  </div>\n\t</div>\n\t<div *ngIf=\"type.invalid && (type.dirty || type.touched)\" class=\"card-panel red white-text\">\n\t  <div *ngIf=\"type.errors.required\">\n\t    Type is required.\n\t  </div>\n\t  <div *ngIf=\"type.errors.minlength\">\n\t    Type must be at least 3 characters long.\n\t  </div>\n\t</div>\n\t<div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"card-panel red white-text\">\n\t  <div *ngIf=\"description.errors.required\">\n\t    Description is required.\n\t  </div>\n\t  <div *ngIf=\"description.errors.minlength\">\n\t    Description must be at least 3 characters long.\n\t  </div>\n\t</div>\n\n\n\t<input type=\"text\" name=\"curPet.name\" minlength=\"3\" required [(ngModel)] = \"curPet.name\" #name=\"ngModel\" placeholder=\"Name\">\n\t<input type=\"text\" name=\"curPet.type\" minlength=\"3\" required [(ngModel)] = \"curPet.type\" #type=\"ngModel\" placeholder=\"Type\">\n\t<input type=\"text\" name=\"curPet.description\" minlength=\"3\" required [(ngModel)] = \"curPet.description\" #description=\"ngModel\" placeholder=\"Description\">\n\t<p>Skills:</p>\n\t<input type=\"text\" name=\"skill1\" minlength=\"3\" [(ngModel)] = \"skill1\" #skills1=\"ngModel\">\n\t<input type=\"text\" name=\"skill2\" minlength=\"3\" [(ngModel)] = \"skill2\" #skills2=\"ngModel\">\n\t<input type=\"text\" name=\"skill3\" minlength=\"3\" [(ngModel)] = \"skill3\" #skills3=\"ngModel\">\n\t<button class=\"waves-effect waves-light btn-large\" type=\"submit\" [disabled] = \"editForm.form.invalid\"><i class=\"material-icons left\">pets</i>Update Pet</button>\n\t<button class=\"waves-effect waves-light btn-large red\" [routerLink] = \"['/']\">Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditComponent = /** @class */ (function () {
    function EditComponent(_http, _route, _router) {
        this._http = _http;
        this._route = _route;
        this._router = _router;
        this.curPet = { name: "", type: "", description: "", likes: 0 };
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.getPet(params['id']);
        });
    };
    EditComponent.prototype.getPet = function (id) {
        var _this = this;
        var obvs = this._http.getPet(id);
        obvs.subscribe(function (data) {
            console.log(data);
            _this.curPet = data;
            console.log(_this.curPet);
            _this.skills = _this.curPet.skills;
            _this.skill1 = _this.skills[0].skill;
            _this.skill2 = _this.skills[1].skill;
            _this.skill3 = _this.skills[2].skill;
        });
    };
    EditComponent.prototype.updatePet = function (pet, data) {
        var _this = this;
        var newpet = {
            name: this.curPet.name,
            type: this.curPet.type,
            description: this.curPet.description,
            skillsArr: [this.skill1, this.skill2, this.skill3]
        };
        console.log("newPet", newpet);
        var obvs = this._http.updatePet(pet, newpet);
        obvs.subscribe(function (data) {
            if (data['message']) {
                _this.errors = data["errors"].name.message;
            }
            else {
                _this._router.navigate(['/']);
            }
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"row\">\n<button [routerLink] = \"['new']\" class=\"waves-effect waves-light btn-large\" ><i class=\"material-icons left\">plus_one</i>Add a pet</button>\n</div>\n<div class = \"row\">\n<div *ngFor = \"let pet of allPets\" class=\"col s12 m4\">\n    <div class=\"card\">\n        <div class=\"card-content \">\n          <span class=\"card-title\">Name: {{pet.name}}</span>\n          <p>Type: {{pet.type}}</p>\n          <p>{{pet.description}}</p>\n        </div>\n        <div class=\"card-action\">\n          <a [routerLink] = \"['pets', pet._id]\">Details</a>\n          <a [routerLink] = \"['edit', pet._id]\">Edit</a>\n        </div>\n\t</div>\n</div>\n<div class = \"row\">"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_http) {
        this._http = _http;
        this.allPets = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPets();
    };
    HomeComponent.prototype.getPets = function () {
        var _this = this;
        var obvs = this._http.getPets();
        obvs.subscribe(function (data) { return _this.allPets = data; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    // addAuthor(data){
    // 	return this._http.post('/api/authors', data);
    // }
    HttpService.prototype.addPet = function (data) {
        return this._http.post('/api/pets', data);
    };
    // getAuthor(author){
    //   return this._http.get('/api/authors/' + author);
    // }
    HttpService.prototype.getPet = function (id) {
        return this._http.get('/api/pets/' + id);
    };
    // getAuthors(){
    // 	console.log("getting authors")
    // 	return this._http.get('/api/authors');
    // }
    HttpService.prototype.getPets = function () {
        console.log("getting pets");
        return this._http.get('/api/pets');
    };
    HttpService.prototype.updatePet = function (pet, data) {
        console.log("data:", pet, data);
        return this._http.patch('/api/pets/' + pet, data);
    };
    HttpService.prototype.removePet = function (id) {
        return this._http.delete('/api/pets/' + id);
    };
    HttpService.prototype.addLike = function (id, pet) {
        return this._http.patch('/api/likes/' + id, pet);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form #newForm = \"ngForm\" (submit) = \"addPet(newPet)\">\n\t<h4>Add a pet:</h4>\n\t<div class=\"card-panel red white-text\" *ngIf = \"errors\">{{errors}}</div>\n\t<div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"card-panel red white-text\">\n\t  <div *ngIf=\"name.errors.required\">\n\t    Name is required.\n\t  </div>\n\t  <div *ngIf=\"name.errors.minlength\">\n\t    Name must be at least 3 characters long.\n\t  </div>\n\t</div>\n\t<div *ngIf=\"type.invalid && (type.dirty || type.touched)\" class=\"card-panel red white-text\">\n\t  <div *ngIf=\"type.errors.required\">\n\t    Type is required.\n\t  </div>\n\t  <div *ngIf=\"type.errors.minlength\">\n\t    Type must be at least 3 characters long.\n\t  </div>\n\t</div>\n\t<div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"card-panel red white-text\">\n\t  <div *ngIf=\"description.errors.required\">\n\t    Description is required.\n\t  </div>\n\t  <div *ngIf=\"description.errors.minlength\">\n\t    Description must be at least 3 characters long.\n\t  </div>\n\t</div>\n\n\n\t<input type=\"text\" name=\"newPet.name\" minlength=\"3\" required [(ngModel)] = \"newPet.name\" #name=\"ngModel\" placeholder=\"Name\">\n\t<input type=\"text\" name=\"newPet.type\" minlength=\"3\" required [(ngModel)] = \"newPet.type\" #type=\"ngModel\" placeholder=\"Type\">\n\t<input type=\"text\" name=\"newPet.description\" minlength=\"3\" required [(ngModel)] = \"newPet.description\" #description=\"ngModel\" placeholder=\"Description\">\n\t<p>Skills: (Optional)</p>\n\t<input type=\"text\" name=\"skill1\" minlength=\"3\"  [(ngModel)] = \"skill1\" #skills1=\"ngModel\">\n\t<input type=\"text\" name=\"skill2\" minlength=\"3\"  [(ngModel)] = \"skill2\" #skills2=\"ngModel\">\n\t<input type=\"text\" name=\"skill3\" minlength=\"3\"  [(ngModel)] = \"skill3\" #skills3=\"ngModel\">\n\t<button class=\"waves-effect waves-light btn-large\" type=\"submit\" [disabled] = \"newForm.form.invalid\"><i class=\"material-icons left\">pets</i>Add Pet</button>\n\t<button class=\"waves-effect waves-light btn-large red\" [routerLink] = \"['/']\">Cancel</button>\n</form>\n"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewComponent = /** @class */ (function () {
    function NewComponent(_http, _router) {
        this._http = _http;
        this._router = _router;
        this.newPet = {
            name: "",
            type: "",
            description: "",
            skills: []
        };
    }
    NewComponent.prototype.ngOnInit = function () {
    };
    NewComponent.prototype.addPet = function (pet) {
        var _this = this;
        // console.log("Making pets");
        //  pet.skills = [this.skill1, this.skill2, this.skill3]
        //  console.log("Skills" ,pet.skills)
        var newpet = {
            name: this.newPet.name,
            type: this.newPet.type,
            description: this.newPet.description,
            skillsArr: [this.skill1, this.skill2, this.skill3]
        };
        var obvs = this._http.addPet(newpet);
        obvs.subscribe(function (data) {
            console.log(data);
            if (data["message"]) {
                _this.errors = data["errors"].name.message;
                console.log(data["message"]);
            }
            else {
                console.log("routing");
                _this._router.navigate(['/']);
            }
        });
    };
    NewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pet/pet.component.css":
/*!***************************************!*\
  !*** ./src/app/pet/pet.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pet/pet.component.html":
/*!****************************************!*\
  !*** ./src/app/pet/pet.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  pet works!\n</p>\n"

/***/ }),

/***/ "./src/app/pet/pet.component.ts":
/*!**************************************!*\
  !*** ./src/app/pet/pet.component.ts ***!
  \**************************************/
/*! exports provided: PetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetComponent", function() { return PetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PetComponent = /** @class */ (function () {
    function PetComponent() {
    }
    PetComponent.prototype.ngOnInit = function () {
    };
    PetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pet',
            template: __webpack_require__(/*! ./pet.component.html */ "./src/app/pet/pet.component.html"),
            styles: [__webpack_require__(/*! ./pet.component.css */ "./src/app/pet/pet.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PetComponent);
    return PetComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chrislange/Documents/CodeDojo/MEAN Class/belt_exam_mean/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map