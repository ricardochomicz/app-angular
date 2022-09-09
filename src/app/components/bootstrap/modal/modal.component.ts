import { Component, ElementRef, OnInit, EventEmitter, Output } from '@angular/core';

declare const $: any;

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

    @Output()
    onHide: EventEmitter<Event> = new EventEmitter<Event>()

    constructor(private element: ElementRef) { }

    ngOnInit(): void {
        const jqueryElement = this.getjQueryElement();
        jqueryElement.find('[modal-title]').addClass('modal-title');
        jqueryElement.find('[modal-body]').addClass('modal-body');
        jqueryElement.find('[modal-footer]').addClass('modal-footer');

        jqueryElement.on('hidden.bs.modal', (e: any) => {
            
        })
    }

    show() {
        this.getjQueryElement().modal('show')
    }

    hide() {
        this.getjQueryElement().modal('hide')
    }

    private getjQueryElement() {
        const nativeElement = this.element.nativeElement
        return $(nativeElement.firstChild)
    }

}
