import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    me: any
    constructor(private http: HttpClient, public authService: AuthService) {
        this.getMe()
    }

    ngOnInit(): void {

    }

    getMe() {
        return this.http.get('http://localhost:8000/api/me')
            .subscribe(response => {
                //@ts-ignore
                this.me = response.data.name
            })
    }


}
