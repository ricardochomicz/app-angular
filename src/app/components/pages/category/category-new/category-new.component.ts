import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { ModalComponent } from './../../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Category } from './../../../../models';
import { CategoryHttpService } from './../../../../services/http/category-http.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'category-new',
    templateUrl: './category-new.component.html',
    styleUrls: ['./category-new.component.css']
})
export class CategoryNewComponent implements OnInit {

    category: Category = {
        name: ''
    }

    form!: FormGroup;

    @ViewChild(ModalComponent)
    modal!: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()


  

    constructor(private categoryHttp: CategoryHttpService, private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            name: ''
        })
    }

    ngOnInit(): void {
    }

    submit() {
        this.categoryHttp.create(this.form.value)
            .subscribe({
                next: (category) => {
                    this.form.reset()
                    this.onSuccess.emit(category)
                    this.modal.hide();
                },
                error: (error) => {
                    this.onError.emit(error)
                }
            })
    }

    showModal() {
        this.modal.show()
    }

    hideModal($event: any) {
        this.modal.hide()
    }


}
