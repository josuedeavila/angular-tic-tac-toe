"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MarvelService = void 0;
var core_1 = require("@angular/core");
var md5_1 = require("ts-md5/dist/md5");
var PrivateKey = "138b1070325798ba8a096240ae8c174ae139a6a5";
var PublicKey = "ce9ad06420b49c7ae4578d38c8890466";
var TimeStamp = new Date().getTime();
var hash = md5_1.Md5.hashStr(TimeStamp + PrivateKey + PublicKey).toString();
var MarvelService = /** @class */ (function () {
    function MarvelService(http) {
        this.http = http;
    }
    MarvelService.prototype.getAllCharacters = function () {
        return this.http.get('http://gateway.marvel.com/v1/public/characters?ts=' + TimeStamp + '&apikey=' + PublicKey + '&hash=' + hash + '&limit=100')
            .map(function (res) { return res.json(); });
    };
    MarvelService = __decorate([
        core_1.Injectable(
        //{providedIn: 'root'}
        )
    ], MarvelService);
    return MarvelService;
}());
exports.MarvelService = MarvelService;
