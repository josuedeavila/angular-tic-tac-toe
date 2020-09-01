"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuadroComponent = void 0;
var core_1 = require("@angular/core");
var QuadroComponent = /** @class */ (function () {
    function QuadroComponent() {
    }
    QuadroComponent.prototype.ngOnInit = function () {
        this.Xvenceu = 0;
        this.Ovenceu = 0;
        this.end = false;
        this.velha = 0;
        this.newGame();
    };
    QuadroComponent.prototype.newGame = function () {
        this.quadrado = Array(9).fill(null);
        this.vencedor = null;
        this.xNext = true;
        this.end = false;
        this.velha = 0;
    };
    Object.defineProperty(QuadroComponent.prototype, "player", {
        get: function () {
            return this.xNext ? 'X' : 'O';
        },
        enumerable: false,
        configurable: true
    });
    QuadroComponent.prototype.makeMove = function (idx) {
        if (this.end == false) {
            if (!this.quadrado[idx]) {
                this.quadrado.splice(idx, 1, this.player);
                this.xNext = !this.xNext;
            }
            this.vencedor = this.calculateWinner();
        }
    };
    QuadroComponent.prototype.calculateWinner = function () {
        var lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (var i = 0; i < lines.length; i++) {
            var _a = lines[i], a = _a[0], b = _a[1], c = _a[2];
            if (this.quadrado[a] &&
                this.quadrado[a] == this.quadrado[b] &&
                this.quadrado[a] == this.quadrado[c]) {
                if (this.quadrado[a] == 'X') {
                    this.Xvenceu++;
                }
                else if (this.quadrado[a] == 'O') {
                    this.Ovenceu++;
                }
                this.end = true;
                return this.quadrado[a];
            }
        }
        this.velha++;
        if (this.velha == 9) {
            this.end = true;
        }
        return null;
    };
    QuadroComponent = __decorate([
        core_1.Component({
            selector: 'app-quadro',
            templateUrl: './quadro.component.html',
            styleUrls: ['./quadro.component.scss']
        })
    ], QuadroComponent);
    return QuadroComponent;
}());
exports.QuadroComponent = QuadroComponent;
