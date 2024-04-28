import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "home/home.component"
import {StartPageComponent} from "./5_Page/PageElement/start-page/start-page.component"
import {DashboardComponent} from "./userDashboard/dashboard.component";
import {UserDetailsComponent} from "./userDetails/userDetails";
import {CreateUserComponent} from "./5_Page/PageElement/create-user/create-user.component"

const routes: Routes = [
  { path: "",
    component: CreateUserComponent },
  {
    path: "start",
    component: StartPageComponent
  },
  { path: "etudiants", component: HomeComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
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
export class AppRoutingModule {}
