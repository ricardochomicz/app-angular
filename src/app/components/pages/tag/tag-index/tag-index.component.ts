import { Component, OnInit, ViewChild } from '@angular/core';
import { Tag } from 'src/app/models';
import { TagHttpService } from '../../../../services/http/tag-http.service';
import { TagNewComponent } from '../tag-new/tag-new.component';
import { TagEditComponent } from '../tag-edit/tag-edit.component';
import { TagStoreService } from './tag-store.service';


@Component({
    selector: 'app-tag-index',
    templateUrl: './tag-index.component.html',
    styleUrls: ['./tag-index.component.css']
})
export class TagIndexComponent implements OnInit {

    @ViewChild(TagNewComponent) tagNewComponent!: TagNewComponent
    @ViewChild(TagEditComponent) tagEditComponent!: TagEditComponent

    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 15
    }

    tags: Array<Tag> = []

    tagId!: number

    constructor(private tagHttp: TagHttpService,
        protected tagStoreService: TagStoreService) {
        this.tagStoreService.tagIndexComponent = this
    }

   

    ngOnInit(): void {
        this.getTags();
    }

    getTags() {
        this.tagHttp.list({
            page: this.pagination.page
        }).subscribe((response) => {
            this.tags = response.data
            this.pagination.totalItems = response.meta.total
            this.pagination.itemsPerPage = response.meta.per_page
        })
    }

    pageChanged(page: number) {
        this.pagination.page = page
        this.getTags()
    }

}
