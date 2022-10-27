import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { BooklistComponent } from './booklist/booklist.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { CartGuard } from './cart/cart.guard';

const routes: Routes = [
  { path: '', component: TodoappComponent },
  { path: 'book', component: BooklistComponent },
  { path: 'cart', component: CartComponent, canActivate: [CartGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
