import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ListErrorsComponent } from './errors/list-errors.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule
    ],
    declarations: [
        ListErrorsComponent
    ],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        ListErrorsComponent
    ]
})

export class SharedModule {}