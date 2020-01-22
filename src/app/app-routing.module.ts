import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: {
      reuse: true
    }
  },
  { path: "about", component: AboutComponent },
  { path: "product/:id", component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
