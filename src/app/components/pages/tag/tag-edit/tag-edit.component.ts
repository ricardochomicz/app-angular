import { Component, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { ModalComponent } from './../../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Tag } from 'src/app/models';
import { TagHttpService } from './../../../../services/http/tag-http.service';

declare const $: any;

@Component({
    selector: 'tag-edit',
    templateUrl: './tag-edit.component.html',
    styleUrls: ['./tag-edit.component.css']
})
export class TagEditComponent implements OnInit {

    showSpinner = false;

    @ViewChild(ModalComponent) modal!: ModalComponent

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    @Input()
    _tagId!: number;

    tag: Tag = {
        name: '',
        label: '',
        
    }

    data = [
        { label: 'Comment'},
        { label: 'Oportunity'},
        { label: 'Order'}
    ]

    constructor(private tagHttp: TagHttpService) { }

    ngOnInit(): void {
        
    }

    @Input()
    set tagId(value: number) {
        this._tagId = value
        if (this._tagId) {
            this.tagHttp.get(this._tagId)
                .subscribe(tag => {
                    console.log(tag)
                    this.tag = tag
                })
        }
    }

    submit() {
        this.tagHttp.update(this._tagId, this.tag)
            .subscribe({
                next: (tag) => {
                    this.onSuccess.emit(tag)
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
        //this.showSpinner = true;
    }

    hideModal($event: any) {
        this.modal.hide()
        this.showSpinner = false;
    }

}
