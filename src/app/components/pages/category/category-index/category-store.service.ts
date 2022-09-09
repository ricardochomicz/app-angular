import { Injectable } from "@angular/core";
import { CategoryIndexComponent } from './category-index.component';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class CategoryStoreService {

    private _categoryIndexComponent!: CategoryIndexComponent;

    constructor(private toastr: ToastrService) { }

    set categoryIndexComponent(value: CategoryIndexComponent) {
        this._categoryIndexComponent = value;
    }

    showModalInsert() {
        this._categoryIndexComponent.categoryNewModal.showModal()
    }

    onInsertSuccess($event: any) {
        this.toastr.success('Categoria cadastrada com sucesso!');
        this._categoryIndexComponent.getCategories()
    }

    onInsertError($event: HttpErrorResponse) {
        this.toastr.error('Ops! Algo deu errado. Erro: ' + $event.status);
        console.log($event.status)
    }

    showModalEdit(categoryId: number) {
        this._categoryIndexComponent.categoryId = categoryId
        this._categoryIndexComponent.categoryEditComponent.showModal()
    }

    onEditSuccess($event: any) {
        this.toastr.success('Categoria atualizada com sucesso!');
        this._categoryIndexComponent.getCategories()
    }

    onEditError($event: HttpErrorResponse) {
        this.toastr.error('Ops! Algo deu errado. Erro: ' + $event.status);
        console.log($event.status)
    }

    showModalDelete(categoryId: number){
        this._categoryIndexComponent.categoryId = categoryId
        this._categoryIndexComponent.categoryDeleteComponent.showModal()
    }

    onDeleteSuccess($event: any) {
        this.toastr.info('Categoria deletada com sucesso')
        this._categoryIndexComponent.getCategories()
    }

    onDeleteError($event: HttpErrorResponse) {
        this.toastr.error('Ops! Algo deu errado. Erro: ' + $event.status);
    }
}