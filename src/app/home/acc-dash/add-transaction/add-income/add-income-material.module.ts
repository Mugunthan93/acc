import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatTableModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatTableModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule
    ]
})
export class AddIncomeMaterialModule { }
