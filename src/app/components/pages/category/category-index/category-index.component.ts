import { Component, OnInit, ViewChild, EventEmitter } from '@angular/core';
import { CategoryNewComponent } from './../category-new/category-new.component';
import { CategoryEditComponent } from './../category-edit/category-edit.component';
import { Category } from './../../../../models';
import { CategoryHttpService } from './../../../../services/http/category-http.service';
import { CategoryStoreService } from './category-store.service';
import { CategoryDeleteComponent } from './../category-delete/category-delete.component';

declare let $: any;

@Component({
    selector: 'app-category-index',
    templateUrl: './category-index.component.html',
    styleUrls: ['./category-index.component.css']
})
export class CategoryIndexComponent implements OnInit {

    searchText!: string

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 15
    }

    @ViewChild(CategoryNewComponent) categoryNewModal!: CategoryNewComponent;
    @ViewChild(CategoryEditComponent) categoryEditComponent!: CategoryEditComponent
    @ViewChild(CategoryDeleteComponent) categoryDeleteComponent!: CategoryDeleteComponent

    categories: Array<Category> = [];

    categoryId!: number

    constructor(private categoryHttp: CategoryHttpService,
        protected categoryStoreService: CategoryStoreService) {
        this.categoryStoreService.categoryIndexComponent = this
    }

    ngOnInit(): void {
        this.getCategories()
    }


    getCategories() {
        this.categoryHttp.list({
            search: this.searchText,
            page: this.pagination.page,
           
        }).subscribe((response) => {
            this.categories = response.data
            this.pagination.totalItems = response.meta.total
            this.pagination.itemsPerPage = response.meta.per_page
        })
    }

    pageChanged(page: number) {
        console.log(page)
        this.pagination.page = page
        this.getCategories()
    }

    search(search: any) {
        this.searchText = search
        this.getCategories()
    }



}
