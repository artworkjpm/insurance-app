import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource, MatSort } from "@angular/material";

import { InsService } from "src/app/services/ins.service";
import { Item } from "../../models/InsItem";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  items: Item[];
  name: string;
  onSubmit: boolean = true;
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  insTypes: Array<{ kind: string; kindImage: string }>;

  constructor(private inService: InsService) {}
  ngOnInit() {
    this.inService.getIns().subscribe(items => {
      this.items = items;
      this.dataSource = new MatTableDataSource(this.items);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filter = this.name;
      this.getTypes();
    });
  }

  displayedColumns: string[] = ["brand", "name", "kind", "price", "id"];

  searchIns() {
    this.onSubmit = false;
  }

  onClear() {
    this.onSubmit = true;
    this.name = "";
    //console.log(this.onSubmit);
  }

  getPrice(price: string) {
    return parseFloat(price).toFixed(2);
  }
  getImage(imageName: string) {
    return `../../assets/SingularCoverData/images/${imageName}`;
  }
  getTypes() {
    let removeDuplicates = this.items.filter(
      (v, i, a) => a.findIndex(t => t.kind === v.kind) === i
    );

    this.insTypes = removeDuplicates.map(x => {
      return {
        kind: x.kind,
        kindImage: x.kindImage
      };
    });
    console.log(this.insTypes);
  }
}
