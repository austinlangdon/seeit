import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './errors/list-errors.component';
import { ShowAuthedDirective } from './show-authed.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ListErrorsComponent,
        ShowAuthedDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        ListErrorsComponent,
        ShowAuthedDirective
    ]
})

export class SharedModule {}