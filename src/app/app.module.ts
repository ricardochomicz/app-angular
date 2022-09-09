import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { LoginComponent } from './components/pages/login/login.component';
import { CategoryIndexComponent } from './components/pages/category/category-index/category-index.component';
import { AlertErrorComponent } from './components/bootstrap/alert/alert-error/alert-error.component';
import { ModalComponent } from './components/bootstrap/modal/modal.component';
import { CategoryNewComponent } from './components/pages/category/category-new/category-new.component';
import { CategoryEditComponent } from './components/pages/category/category-edit/category-edit.component';
import { OverlayComponent } from './components/bootstrap/overlay/overlay.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/AuthInterceptorService';
import { TagIndexComponent } from './components/pages/tag/tag-index/tag-index.component';
import { OverlayModalComponent } from './components/bootstrap/overlay-modal/overlay-modal.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TagNewComponent } from './components/pages/tag/tag-new/tag-new.component';
import { TagEditComponent } from './components/pages/tag/tag-edit/tag-edit.component';
import { CategoryDeleteComponent } from './components/pages/category/category-delete/category-delete.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CategoryFormComponent } from './components/pages/category/category-form/category-form.component';
import { TagFormComponent } from './components/pages/tag/tag-form/tag-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CategorySearchComponent } from './components/pages/category/category-search/category-search.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SidebarComponent,
        LoginComponent,
        CategoryIndexComponent,
        AlertErrorComponent,
        ModalComponent,
        CategoryNewComponent,
        CategoryEditComponent,
        OverlayComponent,
        TagIndexComponent,
        OverlayModalComponent,
        TagNewComponent,
        TagEditComponent,
        CategoryDeleteComponent,
        CategoryFormComponent,
        TagFormComponent,
        CategorySearchComponent,
        
    ],
    imports: [   
    BrowserModule,
        AppRoutingModule,
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        NgxPaginationModule,
        NgbModule,
        Ng2SearchPipeModule
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent]
})
export class AppModule { }
