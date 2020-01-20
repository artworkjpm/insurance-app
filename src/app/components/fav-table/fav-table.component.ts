import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource, MatSort } from "@angular/material";
import { MAT_DIALOG_DATA } from "@angular/material";
import { Item } from "src/app/models/InsItem";

@Component({
  selector: "app-fav-table",
  templateUrl: "./fav-table.component.html",
  styleUrls: ["./fav-table.component.scss"]
})
export class FavTableComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Item[]) {}

  ngOnInit() {}
}
