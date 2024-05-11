import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "app-routing.module"
import { AppComponent } from "app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NavbarComponent } from "navbar/navbar.component"
import { MatListModule } from "@angular/material/list"
import { HomeComponent } from "home/home.component"
import { DashboardComponent} from "./userDashboard/dashboard.component";
import { FormsModule } from "@angular/forms"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"
import { HttpClientModule } from "@angular/common/http"
import { ButtonUserComponent } from "./1_Atoms/AtomElement/button-user/button-user.component"
import { RateFilmComponent } from './rate-film/rate-film.component';
import { RateLieuComponent } from './rate-lieu/rate-lieu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RateFilmComponent,
    RateLieuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    ButtonUserComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
