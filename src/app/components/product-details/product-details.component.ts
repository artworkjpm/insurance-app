import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InsService } from "src/app/services/ins.service";
import { Item } from "../../models/InsItem";
@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  id: number;
  items: Item[];
  isLoaded: boolean = false;

  constructor(private route: ActivatedRoute, public inService: InsService) {}

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.id = id - 1;
    this.inService.getInsProducts().subscribe(items => {
      this.items = items;
      this.isLoaded = true;
    });
  }
}
