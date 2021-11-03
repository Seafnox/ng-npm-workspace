import { NgModule } from '@angular/core';
import { AuthComponent } from 'libs/auth/src/lib/auth.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [
    AuthComponent,
    AuthFormComponent,
  ],
  imports: [],
  exports: [
    AuthComponent,
  ],
})
export class AuthModule {}
