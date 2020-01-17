import { Component, OnInit, Input } from "@angular/core";
import { Item } from "../../models/InsItem";

@Component({
  selector: "app-ins-item",
  templateUrl: "./ins-item.component.html",
  styleUrls: ["./ins-item.component.scss"]
})
export class InsItemComponent implements OnInit {
  @Input() item: Item;
  constructor() {}

  ngOnInit() {}
}
