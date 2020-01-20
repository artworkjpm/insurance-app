import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material";
import { FavTableComponent } from "../fav-table/fav-table.component";
import { Item } from "../../models/InsItem";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent implements OnInit {
  badgeCount: number;
  favDataArray: Array<object>;
  constructor(public dialog: MatDialog) {
    this.badgeCount = 0;
  }

  ngOnInit() {
    this.favDataArray = [];
  }
  incrementCount() {
    this.badgeCount++;
  }
  decrementCount() {
    this.badgeCount--;
    this.badgeCount < 0 ? (this.badgeCount = 0) : this.badgeCount;
  }

  addData(data: object) {
    this.favDataArray.push(data);
    console.log(this.favDataArray);
  }

  removeData(data: Item) {
    let removeItem = this.favDataArray
      .map((item: Item) => item.id)
      .indexOf(data.id);
    this.favDataArray.splice(removeItem, 1);
    console.log(this.favDataArray);
  }

  openDialog() {
    this.dialog.open(FavTableComponent, { data: this.favDataArray });
  }
}
