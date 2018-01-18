"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [nativescript_ngx_fonticon_1.TNSFontIconService]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule
            ],
            declarations: [],
            exports: [
                common_1.CommonModule,
                nativescript_ngx_fonticon_1.TNSFontIconModule
            ]
        })
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUU7QUFDbkUsMENBQXFFO0FBRXJFLHVFQUFrRjtBQWNsRjtJQUFBO0lBUUEsQ0FBQztxQkFSWSxZQUFZO0lBRWhCLG9CQUFPLEdBQWQ7UUFDRSxNQUFNLENBQUM7WUFDTCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyw4Q0FBa0IsQ0FBQztTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQVBVLFlBQVk7UUFieEIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLDZDQUFpQjthQUNsQjtZQUNELFlBQVksRUFBRSxFQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHFCQUFZO2dCQUNaLDZDQUFpQjthQUNsQjtTQUNGLENBQUM7T0FFVyxZQUFZLENBUXhCO0lBQUQsbUJBQUM7O0NBQUEsQUFSRCxJQVFDO0FBUlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSAgIGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSwgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVE5TRm9udEljb25Nb2R1bGVcclxuICBdLFxyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgVE5TRm9udEljb25Nb2R1bGVcclxuICBdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcclxuXHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogU2hhcmVkTW9kdWxlLFxyXG4gICAgICBwcm92aWRlcnM6IFtUTlNGb250SWNvblNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufSJdfQ==