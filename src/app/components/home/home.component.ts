import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource, MatSort } from "@angular/material";
import { InsService } from "src/app/services/ins.service";
import { Item } from "../../models/InsItem";
import { TopNavComponent } from "../top-nav/top-nav.component";

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
  showFavIndex: number;
  showFavRed: boolean = false;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(TopNavComponent, { static: true }) childComponent: TopNavComponent;

  constructor(private inService: InsService) {}
  ngOnInit() {
    this.inService.getIns().subscribe(items => {
      this.items = items;
      this.kinds = items;
      this.dataSource = new MatTableDataSource(this.items);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.getTypes();
    });
  }

  displayedColumns: string[] = ["brand", "name", "kind", "price", "addToFav"];

  searchIns() {
    this.onSubmit = false;
    //the form uses NgModel of this.name to decide what to filter
    this.dataSource.filter = this.name;
  }
  onClear() {
    this.onSubmit = true;
    this.name = "";
    this.ngOnInit();
  }

  getPrice(price: string) {
    return parseFloat(price).toFixed(2);
  }
  getImage(imageName: string) {
    return `../../assets/SingularCoverData/images/${imageName}`;
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
  increment(clicked: boolean, item: Item) {
    if (clicked) {
      //console.log(item);
      this.childComponent.incrementCount();
      this.childComponent.addData(item);
    } else {
      this.childComponent.decrementCount();
      this.childComponent.removeData(item);
      //console.log(item);
    }
  }
}
