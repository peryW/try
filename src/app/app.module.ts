import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllRecipesComponent } from './all-recipes/all-recipes.component';
import{HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from './recipe/recipe.component';
import { RouterModule, Routes } from '@angular/router';
import { HourPipe } from './hour.pipe';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { LogOutComponent } from './log-out/log-out.component';
import { CanEnter } from './CanEnter';
import { RecipeEditDirective } from './recipe-edit.directive';
const routes: Routes = [
{path:'register',component:RegisterComponent},
{path:'home',component:LoginComponent},
{ path: 'allRecipes',component: AllRecipesComponent},
{ path: 'RecipeDetails',component: RecipeDetailsComponent ,canActivate:[CanEnter]},
{ path: 'AddRecipeComponent',component: AddRecipeComponent},
{ path: 'EditRecipeComponent',component: EditRecipeComponent},
{ path: 'EditRecipeComponent/:IdRecipe',component: EditRecipeComponent},
{ path: 'logOut',component:LogOutComponent },
{ path: '**', redirectTo: "/home"}

];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AllRecipesComponent,
    RecipeComponent,
    HourPipe,
    RecipeDetailsComponent,
    AddRecipeComponent,
    EditRecipeComponent,
    LogOutComponent,
    RecipeEditDirective,
   
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
    //RouterModule

  ],
  providers: [CanEnter],
  bootstrap: [AppComponent]
})
export class AppModule { }
