import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimComponent } from './claim/claim.component';
import { ClaimService } from './services/claim.service';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path:'', component: ClaimComponent}
]
@NgModule({
   declarations: [
      AppComponent,
      ClaimComponent,
      NavBarComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
     ClaimService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
