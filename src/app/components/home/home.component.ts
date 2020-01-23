import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource, MatSort } from "@angular/material";
import { InsService } from "src/app/services/ins.service";
import { Item } from "../../models/InsItem";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  items: Item[];
  kinds: Item[];
  name: string;
  onSubmit: boolean = true;
  dataSource: any;
  insTypes: Array<{ kind: string; kindImage: string }>;
  displayedColumns: string[] = ["brand", "name", "kind", "price", "addToFav"];
  isClicked: number;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(public inService: InsService, private router: Router) {}
  ngOnInit() {
    //I get the products OnInit in order to obtain the product kinds, hogar, coche etc
    this.inService.getInsProducts().subscribe(items => {
      this.items = items;
      this.kinds = items;
      this.dataSource = new MatTableDataSource(this.items);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.getTypes();
    });
  }

  searchIns() {
    this.onSubmit = false;
    this.dataSource.filter = this.name;
  }
  onClear() {
    this.onSubmit = true;
    this.name = "";
    this.ngOnInit();
  }

  getTypes() {
    let removeDuplicates = this.kinds.filter(
      (v, i, a) => a.findIndex(t => t.kind === v.kind) === i
    );
    this.insTypes = removeDuplicates.map(x => {
      return {
        kind: x.kind,
        kindImage: x.kindImage
      };
    });
  }
  showListByKind(kind: string) {
    this.onSubmit = false;
    const separateKind = this.items.reduce((acc, item) => {
      (acc[item.kind] || (acc[item.kind] = [])).push(item);
      return acc;
    }, {});
    this.dataSource = new MatTableDataSource(separateKind[kind]);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onSelect(item: Item) {
    this.router.navigate(["product", item.id]);
  }
}
