import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryIndexComponent } from './components/pages/category/category-index/category-index.component';
import { LoginComponent } from './components/pages/login/login.component';
import { TagIndexComponent } from './components/pages/tag/tag-index/tag-index.component';

const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'categories', component: CategoryIndexComponent
    },
    {
        path: 'tags', component: TagIndexComponent
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
