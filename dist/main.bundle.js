webpackJsonp(["main"], {

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__demo_service__ = __webpack_require__("./src/app/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
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
    function AppComponent(_demoService) {
        this._demoService = _demoService;
        this.accounts = [];
        this.books = [];
        this.movies = [];
        this.account = {
            guid: '',
            email: '',
            merchant: '',
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAccounts();
        console.log("Vaidy 1");
        this.getBooksAndMovies();
    };
    AppComponent.prototype.getAccounts = function () {
        var _this = this;
        this._demoService.getAccounts().subscribe(
        // the first argument is a function which runs on success
        function (data) { _this.accounts = data; },
        // the second argument is a function which runs on error
        function (err) { return console.error(err); },
        // the third argument is a function which runs on completion
        function () { return console.log('done loading accounts'); });
    };
    AppComponent.prototype.getBooksAndMovies = function () {
        var _this = this;
        this._demoService.getBooksAndMovies().subscribe(function (data) {
            _this.books = data[0];
            _this.movies = data[1];
        }
        // No error or completion callbacks here. They are optional, but
        // you will get console errors if the Observable is in an error state.
        );
    };
    AppComponent.prototype.createAccount = function (account) {
        var _this = this;
        account.email = account.email;
        account.merchant = account.merchant;
        account.guid = account.guid;
        var acc = { name: name };
        this._demoService.createAccount(account).subscribe(function (data) {
            // refresh the list
            _this.getAccounts();
            return true;
        }, function (error) {
            console.error("Error saving Account!");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    AppComponent.prototype.updateFood = function (food) {
        var _this = this;
        this._demoService.updateFood(food).subscribe(function (data) {
            // refresh the list
            _this.getAccounts();
            return true;
        }, function (error) {
            console.error("Error saving food!");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    AppComponent.prototype.deleteAccount = function (account) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + account.email + "?")) {
            this._demoService.deleteAccount(account).subscribe(function (data) {
                // refresh the list
                _this.getAccounts();
                return true;
            }, function (error) {
                console.error("Error deleting food!");
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
            });
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'demo-app',
            template: `n  <!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js" ></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular-route.js" ></script>
    <script type="text/javascript" src="app.js"></script>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

   <link href="https://fonts.googleapis.com/css?family=Ubuntu:400,400i,700,700i" rel="stylesheet">

   <style type="text/css">

   .body{
     word-wrap: break-word;
     text-align: center;
     font-family: 'Ubuntu', sans-serif;
   }

   .a{
     color:#000;
   }

   .a:hover{
     text-decoration-line: underline;
     color:black;
   }

   .container{
     margin-top:80px;
     margin-left: auto;
   }


   #left-side{
     height:340px;
     background: linear-gradient(#E2F9F2,#DAF7FB);
     color:#292B2C;
     width:100%;
     text-align: center;
     font-family: 'Ubuntu', sans-serif;
     border-radius: 38px 0px 0px 0px;
   }

   #left-side:hover{
   }

   #logo{
     font-size: 20px;
     text-align: center;
     width:90%;
     padding-left: 5%;
     font-weight: bold;
     padding-top:150px;
   }



   #logo-info{
     padding-top:20px;
     font-size: 14px;
     text-align: center;
     width:90%;
     padding-left: 5%;
   }

   #logo-info:hover{
   }



   #right-side{
     height:340px;
     background-color: white;
     width:100%;
     text-align: left;
     font-family: 'Ubuntu', sans-serif;
     border-style: solid;
     border-color: #292B2C;
     border-radius: 0px 0px 38px 0px;
     border-width: thin;
     padding-left: 20px;
     padding-right: 20px;

   }

   .title{
     font-size: 19px;
     font-weight: bold;
     padding-bottom: 10px;
     padding-top: 20px;
   }


   .createAcc{
     justify-content: right;
     padding-top: -29px;
   }




   </style>



 </head>
 <body ng-app="app">

   <div ng-view>

   </div>

 <div class="container">
   <div class="row">

     <div class="col-sm-2">
     </div>



       <div class="col-sm-4">

             <div id="left-side">
               <div id="logo">
                 make an account today
               </div>
               <div id="logo-info">
                 a service to purchase and keep track of offers
               </div>
             </div>
           </div>



         <div class="col-sm-4">
           <div id="right-side">
             <div class="title">
               Sign Up
             </div>


             <form>
               <div class="form-group">
                 <label for=\"merchant\">Merchant</label>
                 <input type=\"text\" name=\"merchant\" [(ngModel)]=\"account.merchant\">
               </div>
               <div class="form-group">
                 <label for=\"email\">Email</label>
                 <input type=\"text\" name=\"email\" [(ngModel)]=\"account.email\">
               </div>
               <div class="form-group">
                 <label for=\"Guid\">Guid</label>
                 <input type=\"text\" name=\"guid\" [(ngModel)]=\"account.guid\">
               </div>


              <span style="text-align: right">
                <button (click)=\"createAccount(account)\">Save</button>
              </span>


            </form>

            </div>
           </div>



     <div class="col-sm-2">
     </div>

   </div>
 </div>
 </body>

</html>\n  `
}),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__demo_service__["a" /* DemoService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__demo_service__ = __webpack_require__("./src/app/demo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__demo_service__["a" /* DemoService */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/demo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var DemoService = (function () {
    function DemoService(http) {
        this.http = http;
    }
    // NOTE: all API calls in this file use simple endpoints served by
    // an Express app in the file app.js in the repo root. See that file
    // for all back-end code.
    // Uses http.get() to load data from a single API endpoint
    DemoService.prototype.getAccounts = function () {
        return this.http.get('http://localhost:8080/getAccounts');
    };
    // Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
    // The entire operation will result in an error state if any single request fails.
    DemoService.prototype.getBooksAndMovies = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http.get('/api/books'), this.http.get('/api/movies'));
    };
    // send a POST request to the API to create a new data object
    DemoService.prototype.createAccount = function (account) {
        var body = JSON.stringify(account);
        console.log("the body is " + body);
        return this.http.post('http://localhost:8080/register/', body, httpOptions);
    };
    // send a PUT request to the API to update a data object
    DemoService.prototype.updateFood = function (food) {
        var body = JSON.stringify(food);
        return this.http.put('/api/food/' + food.id, body, httpOptions);
    };
    // send a DELETE request to the API to delete a data object
    DemoService.prototype.deleteAccount = function (account) {
        return this.http.delete('/api/food/' + account.email);
    };
    DemoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DemoService);
    return DemoService;
}());



/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__("./src/app/app.module.ts");


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
