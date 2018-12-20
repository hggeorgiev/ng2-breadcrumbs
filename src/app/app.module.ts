import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    BreadcrumbsModule,
} from '../lib/public_api';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
        FormsModule,
        BrowserAnimationsModule,
        BreadcrumbsModule.forRoot(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
