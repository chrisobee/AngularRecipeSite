import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './Shopping List/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './Shopping List/shopping-list-edit/shopping-list-edit.component';
import { RecipeListComponent } from './Recipe Book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './Recipe Book/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './Recipe Book/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
