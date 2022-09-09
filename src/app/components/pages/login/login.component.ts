import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    credentials = {
        email: 'admin@email.com',
        password: 'password'
    }

    showMessageError: boolean = false;

    constructor(private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
    }

    login() {
        this.authService.login(this.credentials)
            .subscribe((response) => {
                this.router.navigate(['categories'])
            }, error => {
                this.showMessageError = true
            })
        return false;
    }

}
