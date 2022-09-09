import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from './services/auth.service';

//@ts-ignore
import pace from 'pace';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app-angular';
    me: any

    constructor(public authService: AuthService) {
    }

    @HostListener("window:onbeforeunload", ["$event"])
    clearLocalStorage(event: any) {
        console.log(event)
        window.localStorage.clear();
    }
    

    ngOnInit(): void {
        pace.start({
            document: false
        })
        
    }

}
