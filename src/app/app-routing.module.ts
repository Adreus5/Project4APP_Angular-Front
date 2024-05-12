import {NgModule} from "@angular/core"
import {RouterModule, Routes} from "@angular/router"
import {HomeComponent} from "home/home.component"
import {StartPageComponent} from "./5_Page/PageElement/start-page/start-page.component"
import {DashboardComponent} from "./userDashboard/dashboard.component";
import {UserDetailsComponent} from "./userDetails/userDetails";
import {CreateUserComponent} from "./5_Page/PageElement/create-user/create-user.component"
import {LoginComponent} from "./5_Page/PageElement/login/login.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {CreateFilmComponent} from "./films/create-film/create-film.component";
import {CreateLieuComponent} from "./lieux/create-lieu/create-lieu.component";



const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },

  { path: 'create-film', component: CreateFilmComponent },
  { path: 'create-lieu', component: CreateLieuComponent },
  {
    path: "create-user",
    component: CreateUserComponent
  },
  {
    path: "start",
    component: StartPageComponent
  },
  {path: "etudiants", component: HomeComponent},
  {
    path: "accueil",
    component: AccueilComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "user-details/:id",
    component: UserDetailsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
