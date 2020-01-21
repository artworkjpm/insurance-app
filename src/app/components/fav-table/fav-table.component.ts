import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import {
  MatTableDataSource,
  MatSort,
  MatDialogRef,
  MatDialog
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
  constructor(
    public inService: InsService,
    private dialogRef: MatDialogRef<FavTableComponent>,
    public dialog: MatDialog
  ) {}

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  //@ViewChild(TopNavComponent, { static: true }) childComponent: TopNavComponent;

  ngOnInit() {
    this.updateSize();
    this.dataSource = new MatTableDataSource(this.inService.getFavs());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  displayedColumns: string[] = ["brand", "name", "kind", "addToFav"];
  updateSize() {
    this.dialogRef.updateSize("600px", "100%");
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  checkRemove(clicked: boolean, item: Item, index: Number) {
    let deleteRef = this.dialog.open(CheckDeleteFavComponent);
    deleteRef.afterClosed().subscribe(result => {
      if (result === "true") {
        this.inService.addToFavTable(false, item, index);
        this.ngOnInit();
        //this.inService.addToFavTable(true, item);
      }
    });
    //alert("are you sure you want to remove this from favourites?");
    //this.inService.addToFavTable(clicked, item);

    //this.ngOnInit();
  }
}
