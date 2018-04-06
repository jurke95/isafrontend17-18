import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListcinemaComponent } from './components/listcinema/listcinema.component';
import { CinemaformComponent } from './components/cinemaform/cinemaform.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {CinemaService} from './shared-service/cinema.service';
import {HttpModule} from '@angular/http';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import {enableProdMode} from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule } from '@angular/forms';
import {
MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';

import { IonicApp, IonicModule, App } from 'ionic-angular';
import {FormsModule} from '@angular/forms';
import { ListtheatreComponent } from './components/listtheatre/listtheatre.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { UserService } from './shared-service/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';




const appRoutes:Routes=[
{path:'dashboard',component:DashboardComponent},
{path:  '', redirectTo: '/dashboard', pathMatch: 'full'},
{path:'cinemas',component:ListcinemaComponent},
{path:'theatres',component:ListtheatreComponent},
{path:'addCinema',component:CinemaformComponent},
{path:'registration',component:RegistrationComponent},
{path:'login',component:LoginComponent}

];
enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    ListcinemaComponent,
    CinemaformComponent,
    DashboardComponent,
    ListtheatreComponent,
    RegistrationComponent,
    LoginComponent,
    NavbarComponent
    
  ],

 
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    CdkTableModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CinemaService,UserService,HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
