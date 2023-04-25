import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module'
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [AppComponent, LogoutComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    // AuthModule.forRoot({
    //   domain: 'dev-uc8xta1beqjkjl7j.us.auth0.com', // Replace with your Auth0 domain
    //   clientId: 'Ke5Bz1GbzP1zCbxCpA3qzUC6P9v0uUh9',
    //   authorizationParams: {
    //     redirect_uri: window.location.origin
    //   }// Replace with your Auth0 client ID
    // }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
