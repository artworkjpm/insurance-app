import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-nav",
  templateUrl: "./top-nav.component.html",
  styleUrls: ["./top-nav.component.scss"]
})
export class TopNavComponent implements OnInit {
  badgeCount: number;
  constructor() {
    this.badgeCount = 0;
  }

  ngOnInit() {}
  onFavourites() {}
  incrementCount() {
    this.badgeCount++;
  }
  decrementCount() {
    this.badgeCount--;
    this.badgeCount < 0 ? (this.badgeCount = 0) : this.badgeCount;
  }

  clearCount() {
    this.badgeCount = 0;
  }
}