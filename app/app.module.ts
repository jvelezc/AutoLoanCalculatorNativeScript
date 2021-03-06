import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { TNSFontIconModule, TNSFontIconService } from 'nativescript-ngx-fonticon';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import * as application from 'application';
import { registerElement, NSModuleFactoryLoader } from "nativescript-angular";
registerElement("Gradient", () => require("nativescript-gradient").Gradient);
registerElement("StatusBar", () => require("nativescript-statusbar").StatusBar);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        TNSFontIconModule.forRoot({
            "fa": "font-awesome.css"
          }),
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
