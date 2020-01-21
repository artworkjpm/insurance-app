import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import {
  MatTableDataSource,
  MatSort,
  MatDialogRef,
  MatDialog,
  MatSnackBar
} from "@angular/material";
import { Item } from "src/app/models/InsItem";
import { InsService } from "src/app/services/ins.service";
import { CheckDeleteFavComponent } from "../check-delete-fav/check-delete-fav.component";

@Component({
  selector: "app-fav-table",
  templateUrl: "./fav-table.component.html",
  styleUrls: ["./fav-table.component.scss"]
})
export class FavTableComponent implements OnInit {
  dataSource: any;
  showPrice: boolean = false;
  displayedColumns: string[] = ["brand", "name", "kind", "addToFav"];
  constructor(
    public inService: InsService,
    private dialogRef: MatDialogRef<FavTableComponent>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.updateSize();
    this.dataSource = new MatTableDataSource(this.inService.getFavs());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  updateSize() {
    this.dialogRef.updateSize("600px", "100%");
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  checkRemove(clicked: boolean, item: Item) {
    let deleteRef = this.dialog.open(CheckDeleteFavComponent);
    deleteRef.afterClosed().subscribe(result => {
      if (result === "remove") {
        this.inService.addToFavTable(false, item);
        this.ngOnInit();
        this.openSnackBar(item, "Undo");
      } else {
        item["clicked"] = true;
      }
    });
  }

  openSnackBar(item: Item, action: string) {
    let snackBarRef = this.snackBar.open(item.name + " removed", action);
    snackBarRef.onAction().subscribe(() => {
      this.inService.addToFavTable(true, item);
      item["clicked"] = true;
      this.ngOnInit();
    });
  }
}
