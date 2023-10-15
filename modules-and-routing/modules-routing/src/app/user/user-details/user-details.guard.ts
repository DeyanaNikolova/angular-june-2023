import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'; 
import { Observable } from 'rxjs';

@Injectable({providedIn:'root'})

export class UserAuthGuard implements CanActivate{
    constructor(private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot
        ): 
        | boolean 
        | UrlTree 
        | Observable<boolean | UrlTree> 
        | Promise<boolean | UrlTree> {
        return this.checkIfLoggedIn(state.url) || this.router.createUrlTree(['/user/list']);
    }

    checkIfLoggedIn(url: string): boolean{
        return false;
    }
}