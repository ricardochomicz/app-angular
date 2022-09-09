import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { ModalComponent } from './../../../bootstrap/modal/modal.component';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { CategoryHttpService } from './../../../../services/http/category-http.service';
import { Category } from './../../../../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {

    showSpinner = false;

    category: Category = {
        name: '',
        active: true
    }

    form!: FormGroup;

    @ViewChild(ModalComponent)
    modal!: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    @Input()
    _categoryId!: number;

 

    constructor(private categoryHttp: CategoryHttpService, private fb:FormBuilder) { 
        this.form = this.fb.group({
            name: '',
            active: true
        })
    }

    ngOnInit(): void {
    }

    @Input()
    set categoryId(value: number) {
        this._categoryId = value
        if (this._categoryId) {
            this.categoryHttp.get(this._categoryId)
                .subscribe(category => {
                    this.form.patchValue(category)
                    this.showSpinner = false;
                })
        }
    }

    submit() {
        this.categoryHttp.update(this._categoryId, this.form.value)
            .subscribe({
                next: (category) => {
                    this.onSuccess.emit(category)
                    this.modal.hide();
                },
                error: (error) => {
                    this.onError.emit(error)
                }
            })
    }

    showModal() {
        setTimeout(() => {
            this.modal.show()
        }, 1000)
        // this.showSpinner = true;
    }

    hideModal($event: any) {
        this.modal.hide()
        this.showSpinner = false;
    }

}
