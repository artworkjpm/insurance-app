import { Component } from "@angular/core";
import { MatDialog } from "@angular/material";
import { FavTableComponent } from "../fav-table/fav-table.component";
import { InsService } from "src/app/services/ins.service";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [],
  exports: [TopNavComponent],
  declarations: [TopNavComponent],
  providers: []
})
@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent {
  constructor(public dialog: MatDialog, public inService: InsService) {}

  openDialog() {
    this.dialog.open(FavTableComponent);
  }
}
