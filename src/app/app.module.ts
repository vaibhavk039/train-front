import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { UserComponent } from './modules/user/user.component';
import { UserAccountComponent } from './modules/user/user-account.component';
import { TrainTicketComponent } from './modules/user/train-ticket.component';
import { AdminComponent } from './modules/admin/admin.component';
import { UserInformationComponent } from './modules/user/user-information.component';
import { UserPasswordComponent } from './modules/user/user-password.component';
import { RouteComponent } from './modules/admin/route.component';
import { AlertComponent } from './modules/alert/alert.component';
import { TrainComponent } from './modules/admin/train.component';
import { LocomotiveComponent } from './modules/admin/locomotive.component';
import { RailroadCarComponent } from './modules/admin/railroad-car.component';
import { TrainAssemblyComponent } from './modules/admin/train-assembly.component';
import { RouteCardComponent } from './modules/user/route-card.component';
import { SeatPickerComponent } from './modules/user/seat-picker.component';
import { TicketPurchaseComponent } from './modules/user/ticket-purchase.component';
import { PurchaseSearchComponent } from './modules/admin/purchase-search.component';
import { PurchaseManageComponent } from './modules/admin/purchase-manage.component';
import { PurchaseCardComponent } from './modules/admin/purchase-card.component';
import { UserPurchaseCardComponent } from './modules/user/user-purchase-card.component';
import { UserPurchasesListComponent } from './modules/user/user-purchases-list.component';

import { UserService } from './services/user.service';
import { AlertService } from './services/alert.service';
import { RouteService } from './services/route.service';
import { TrainService } from './services/train.service';
import { PurchaseService } from './services/purchase.service';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UserAccountComponent,
    AdminComponent,
    TrainTicketComponent,
    UserInformationComponent,
    UserPasswordComponent,
    AlertComponent,
    RouteComponent,
    TrainComponent,
    TrainAssemblyComponent,
    LocomotiveComponent,
    RailroadCarComponent,
    RouteCardComponent,
    SeatPickerComponent,
    TicketPurchaseComponent,
    PurchaseSearchComponent,
    PurchaseManageComponent,
    PurchaseCardComponent,
    UserPurchaseCardComponent,
    UserPurchasesListComponent
  ],
  providers: [
    UserService,
    AlertService,
    RouteService,
    TrainService,
    PurchaseService
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
