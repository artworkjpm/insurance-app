import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { MaterialModule } from "./material/material.module";
import { FormsModule } from "@angular/forms";
import { TopNavComponent } from "./components/top-nav/top-nav.component";
import { FavTableComponent } from "./components/fav-table/fav-table.component";
import { CheckDeleteFavComponent } from "./components/check-delete-fav/check-delete-fav.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { RouteReuseService } from "./services/RouteReuseService";
import { RouteReuseStrategy } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TopNavComponent,
    FavTableComponent,
    CheckDeleteFavComponent,
    ProductDetailsComponent
  ],
  entryComponents: [FavTableComponent, CheckDeleteFavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: RouteReuseService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
