
import { Observable } from 'rxjs/internal/Observable';

export interface SearchParams {
    page?: number;
    all?: any;
    search?: string;

}

export class SearchParamsBuilder{
    constructor(private searchParams: SearchParams){

    }

    //@ts-ignore
    makeObject(): SearchParams{
        const sParams: any = {
            page: this.searchParams.page + "",
        }
        if(this.searchParams.all){
            sParams.all = '1';
            delete sParams.page;
        }
        if(this.searchParams.search && this.searchParams.search !== ""){
            sParams.search = this.searchParams.search
        }
        return sParams;
    }
}

export interface HttpResource<T> {
    create(data: T): Observable<T>

    list(searchParams: SearchParams): Observable<{ data: Array<T>, meta: any }>

    get(id: number): Observable<T>

    update(id: number, data: T): Observable<T>

    destroy(id: number): Observable<any>
}