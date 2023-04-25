import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule as Auth0Module} from '@auth0/auth0-angular';
import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    Auth0Module.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin
      }//
    }),
  ],
  exports: [Auth0Module],
})
export class AuthModule {}
