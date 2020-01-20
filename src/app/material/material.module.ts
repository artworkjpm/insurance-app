import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatInputModule,
  MatSortModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatChipsModule } from "@angular/material/chips";
import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatSortModule,
  MatChipsModule,
  MatBadgeModule,
  MatIconModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule {}
