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
import { BooklistComponent } from './booklist/booklist.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    SearchbarcomponentComponent,
    NavbarComponent,
    ImagecomponentComponent,
    DataInfoComponent,
    LoginFormComponent,
    ContentComponent,
    TodoappComponent,
    BooklistComponent,
    BookComponent,
    CartComponent,
  ],
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
