import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Item } from "../models/InsItem";
import { Observable } from "rxjs";
//import InsProducts from "src/assets/SingularCoverData/InsurProducts.json";

@Injectable({
  providedIn: "root"
})
export class InsService {
  insUrl: string = "../../assets/SingularCoverData/InsurProducts.json";

  constructor(private http: HttpClient) {}

  //I made an observable to replicate a real life scenario of an api call
  getIns(): Observable<Item[]> {
    return this.http.get<Item[]>(this.insUrl);
  }
}
