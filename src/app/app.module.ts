import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe } from '@angular/common';
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
import { UserAccount } from './components/userAccount/userAccount.component';
import { AddcinemaComponent } from './components/addcinema/addcinema.component';
import { AddtheatreComponent } from './components/addtheatre/addtheatre.component';
import { ProductComponent } from './components/fanzone/product/product.component';
import { ProductService } from './shared-service/product.service';
import { OfferService } from './shared-service/offer.service';
import { AdService } from './shared-service/ad.service';
import { AddproductComponent } from './components/fanzone/addproduct/addproduct.component';
import {FanzoneComponent} from './components/fanzone/fanzone.component';
import {AdComponent} from './components/fanzone/ad/ad.component';
import {ReservationComponent} from './components/reservation/reservation.component';
import { EditproductComponent } from './components/fanzone/editproduct/editproduct.component';
import { AddadComponent } from './components/addad/addad.component';
import {OffersComponent} from './components/fanzone/ad/offers/offers.component';
import { EditUser } from './components/userAccount/editUser/editUser.component';
import { ConfirmEmail } from './components/confirmEmail/confirmEmail.component';
import { CinemaRepertoar } from './components/repertoar/cinemaRepertoar/cinemaRepertoar.component';
import { TheatreRepertoarComponent } from './components/repertoar/theatre-repertoar/theatre-repertoar/theatre-repertoar.component';
import { CinemaReservationComponent } from './components/reservation/cinema-reservation/cinema-reservation.component';
import { TheatreReservationComponent } from './components/reservation/theatre-reservation/theatre-reservation.component';
import { FriendsService } from './shared-service/friends.service';



const appRoutes:Routes=[
{path:'dashboard',component:DashboardComponent},
{path:  '', redirectTo: '/dashboard', pathMatch: 'full'},
{path:'cinemas',component:ListcinemaComponent},
{path:'theatres',component:ListtheatreComponent},
{path:'addCinema',component:CinemaformComponent},
{path:'registration',component:RegistrationComponent},
{path:'login',component:LoginComponent},
{path:'userAccount',component:UserAccount},
{path:'userAccount/editUser',component:EditUser},
{path:'cinemas/registration',component:AddcinemaComponent},
{path:'theatres/registration',component:AddtheatreComponent},
{path:'fanzone/products',component:ProductComponent},
{path:'fanzone/products/add',component:AddproductComponent},
{path:'fanzone/products/edit/:id',component:EditproductComponent},
{path:'fanzone',component:FanzoneComponent},
{path:'fanzone/ads',component:AdComponent},
{path:'fanzone/ads/add',component:AddadComponent},
{path:'reservation',component:ReservationComponent},
{path:'fanzone/ads/offers/:id',component:OffersComponent},
{path:'confirmEmail/:token',component:ConfirmEmail},
{path:'cinemas/repertoar/:id',component:CinemaRepertoar},
{path:'theatres/repertoar/:id',component:TheatreRepertoarComponent},
{path:'reservation/cinemaReservation',component:CinemaReservationComponent},
{path:'reservation/theatreReservation',component:TheatreReservationComponent}





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
    NavbarComponent,
    UserAccount,
    EditUser,
    AddcinemaComponent,
    AddtheatreComponent,
    ProductComponent,
    AddproductComponent,
    FanzoneComponent,
    AdComponent,
    ReservationComponent,
    EditproductComponent,
    AddadComponent,
    OffersComponent,
    ConfirmEmail,
    CinemaRepertoar,
    TheatreRepertoarComponent,
    CinemaReservationComponent,
    TheatreReservationComponent

    
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
  providers: [FriendsService,CinemaService,UserService,ProductService,AdService,OfferService,HttpModule,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
