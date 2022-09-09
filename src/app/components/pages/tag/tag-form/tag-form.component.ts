import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models';

@Component({
    selector: 'tag-form',
    templateUrl: './tag-form.component.html',
    styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent implements OnInit {

    @Input()
    tag: Tag = {
        name: '',
        label: '',

    }

    data = [
        { label: 'Comment', name: 'Comentário' },
        { label: 'Oportunity', name: 'Oportunidade' },
        { label: 'Order', name: 'Pedido' },
        { label: 'Plan', name: 'Plano' },
        { label: 'Order_Type', name: 'Tipo Pedido' }
    ]

    constructor() { }

    ngOnInit(): void {
    }

}
