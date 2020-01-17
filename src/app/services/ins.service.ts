import { Injectable } from "@angular/core";
import InsProducts from "src/assets/SingularCoverData/InsurProducts.json";

@Injectable({
  providedIn: "root"
})
export class InsService {
  constructor() {}

  getIns() {
    return InsProducts;
  }
}
