import { Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { ModalComponent } from './../../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { CategoryHttpService } from './../../../../services/http/category-http.service';
import { Category } from './../../../../models';

@Component({
    selector: 'category-delete',
    templateUrl: './category-delete.component.html',
    styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

    showSpinner = false;

    @ViewChild(ModalComponent)
    modal!: ModalComponent

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    @Input()
    _categoryId!: number;

    category!: Category

    constructor(private categoryHttp: CategoryHttpService) { }

    ngOnInit(): void {
    }

    @Input()
    set categoryId(value: number) {
        this._categoryId = value
        if (this._categoryId) {
            this.categoryHttp.get(this._categoryId)
                .subscribe(category => {
                    //@ts-ignore
                    this.category = category.name
                    this.showSpinner = false;
                })
        }
    }

    destroy() {
        this.categoryHttp.destroy(this._categoryId)
            .subscribe(() => {
                this.onSuccess.emit()
                this.modal.hide();
            }, error => {
                this.onError.emit(error)
            })
    }

    showModal() {
        setTimeout(() => {
            this.modal.show()
        }, 1000)   
        this.showSpinner = true;
    }

    hideModal() {
        this.modal.hide()
        this.showSpinner = false;
    }


}
