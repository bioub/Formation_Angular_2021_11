import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SelectComponent } from './select/select.component';
import { HighlightDirective } from './highlight.directive';
import { KebabcasePipe } from './kebabcase.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardComponent,
    SelectComponent,
    HighlightDirective,
    KebabcasePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // Pour pouvoir vous servir de ces Components/Directives/Pipes
    // dans d'autres modules
    CardComponent,
    SelectComponent,
    HighlightDirective,
    KebabcasePipe,

    // On peut aussi exporter des modules
    CommonModule, // si j'importe Shared, j'importe aussi Common
    FormsModule, // si j'importe Shared, j'importe aussi Forms
  ]
})
export class SharedModule { }
