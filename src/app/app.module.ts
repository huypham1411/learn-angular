import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { SearchbarcomponentComponent } from './searchbarcomponent/searchbarcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    SearchbarcomponentComponent,
    ImagecomponentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
