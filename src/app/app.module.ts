import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeadercomponentComponent } from './headercomponent/headercomponent.component';
import { SearchbarcomponentComponent } from './searchbarcomponent/searchbarcomponent.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { DataInfoComponent } from './data-info/data-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadercomponentComponent,
    SearchbarcomponentComponent,
    ImagecomponentComponent,
    DataInfoComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
