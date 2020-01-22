import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "../models/InsItem";
import { Observable } from "rxjs";
//import InsProducts from "src/assets/SingularCoverData/InsurProducts.json";

@Injectable({
  providedIn: "root"
})
export class InsService {
  jsonFile: string = "../../assets/SingularCoverData/InsurProducts.json";
  badgeCount: number;
  favDataArray: Array<object>;

  constructor(private http: HttpClient) {
    this.badgeCount = 0;
    this.favDataArray = [];
  }

  //Observable to replicate an api call, however its just a json file
  getInsProducts(): Observable<Item[]> {
    return this.http.get<Item[]>(this.jsonFile);
  }

  getFavs() {
    return this.favDataArray;
  }

  getPrice(price: string) {
    return parseFloat(price).toFixed(2);
  }

  getImage(imageName: string) {
    return `../../assets/SingularCoverData/images/${imageName}`;
  }

  incrementCount() {
    this.badgeCount++;
  }
  decrementCount() {
    this.badgeCount--;
    this.badgeCount < 0 ? (this.badgeCount = 0) : this.badgeCount;
  }

  addToFavTable(clicked: any, item: Item) {
    if (clicked) {
      this.incrementCount();
      this.addData(item);
    } else {
      this.decrementCount();
      this.removeData(item);
    }
  }

  addData(data: object) {
    this.favDataArray.push(data);
  }

  removeData(data: Item) {
    let removeItem = this.favDataArray
      .map((item: Item) => item.id)
      .indexOf(data.id);
    this.favDataArray.splice(removeItem, 1);
  }
}
