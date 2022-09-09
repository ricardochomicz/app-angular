import { Injectable } from "@angular/core";
import { TagIndexComponent } from './tag-index.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})

export class TagStoreService {

    private _tagIndexComponent!: TagIndexComponent

    constructor(private toastr: ToastrService) { }

    set tagIndexComponent(value: TagIndexComponent) {
        this._tagIndexComponent = value
    }

    showModalInsert() {
        this._tagIndexComponent.tagNewComponent.showModal()
    }

    onInsertSuccess($event: any) {
        this.toastr.success('Tag cadastrada com sucesso!');
        this._tagIndexComponent.getTags()
    }

    onInsertError($event: HttpErrorResponse) {
        this.toastr.error('Ops! Algo deu errado. Erro: ' + $event.status);
        console.log($event.status)
    }

    showModalEdit(tagId: number) {
        this._tagIndexComponent.tagId = tagId
        this._tagIndexComponent.tagEditComponent.showModal()
    }

    onEditSuccess($event: any) {
        this.toastr.success('Tag atualizada com sucesso!');
        this._tagIndexComponent.getTags()
    }

    onEditError($event: HttpErrorResponse) {
        this.toastr.error('Ops! Algo deu errado. Erro: ' + $event.status);
        console.log($event.status)
    }
}