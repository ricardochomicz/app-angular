import { Component, OnInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from './../../../bootstrap/modal/modal.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Tag } from 'src/app/models';
import { TagHttpService } from './../../../../services/http/tag-http.service';

@Component({
    selector: 'tag-new',
    templateUrl: './tag-new.component.html',
    styleUrls: ['./tag-new.component.css']
})
export class TagNewComponent implements OnInit {

    showSpinner = false;

    @ViewChild(ModalComponent)
    modal!: ModalComponent

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>()
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>()

    tag: Tag = {
        name: '',
        label: ''
    }

    constructor(private tagHttp: TagHttpService) { }

    ngOnInit(): void {
    }

    submit() {
        this.tagHttp.create(this.tag)
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
        this.modal.show()
    }

    hideModal($event: any) {
        this.modal.hide()
    }

}
