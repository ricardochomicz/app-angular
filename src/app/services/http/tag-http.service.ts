import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Tag } from 'src/app/models';
import { map } from 'rxjs/operators';
import { HttpResource, SearchParams, SearchParamsBuilder } from './http-resources';

@Injectable({
    providedIn: 'root'
})
export class TagHttpService implements HttpResource<Tag> {

    private baseUrl = 'http://localhost:8000/api/tags';

    constructor(private http: HttpClient) { }

    list(searchParams: SearchParams): Observable<{ data: Array<Tag>, meta: any }> {
        const sParams = new SearchParamsBuilder(searchParams).makeObject()
        const params = new HttpParams({
            fromObject: (<any>sParams)
        })
        return this.http.get<{ data: Array<Tag>, meta: any }>(this.baseUrl, {
            params
        })
    }

    get(id: number): Observable<Tag> {
        return this.http.get<{ data: Tag }>(`${this.baseUrl}/${id}`)
            .pipe(map(response => response.data))
    }

    create(data: Tag): Observable<Tag> {
        return this.http.post<{ data: Tag }>(this.baseUrl, data)
            .pipe(map(response => response.data))
    }

    update(id: number, data: Tag) {
        return this.http.put<{ data: Tag }>(`${this.baseUrl}/${id}`, data)
            .pipe(map(response => response.data))
    }

    destroy(id: number) {
        return this.http.delete(`${this.baseUrl}/${id}`)
    }
}
