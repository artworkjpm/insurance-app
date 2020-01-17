import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatTableModule,
  MatInputModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";

const MaterialComponents = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
