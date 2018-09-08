import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { MyLoggingService } from './shared/logging-service/logging.service';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MyLoggingService],//providing the service at Module level(If we declare our service here, this whole app module
  //will recieve the same instnace of service, unless we override it by specificing the providers array in
  //the given component)
  bootstrap: [AppComponent]
})
export class AppModule { }
