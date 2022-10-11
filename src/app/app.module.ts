import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { SearchbarcomponentComponent } from './searchbarcomponent/searchbarcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { DataInfoComponent } from './data-info/data-info.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './headercomponent/navbar/navbar.component';
import { TodoappComponent } from './todoapp/todoapp.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    SearchbarcomponentComponent,
    ImagecomponentComponent,
    DataInfoComponent,
    LoginFormComponent,
    ContentComponent,
    NavbarComponent,
    TodoappComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
