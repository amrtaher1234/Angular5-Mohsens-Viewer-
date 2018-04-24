import {NgModule} from "@angular/core"; 
import  {Routes, RouterModule} from "@angular/router"; 
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';

const routes : Routes = [
    {path : 'nav'  , component:NavbarComponent}, 
];

@NgModule({
    imports:[RouterModule.forRoot(routes)], 
    exports:[RouterModule]
})
export class AppRoutingModule{ }