import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
 import { Observable } from "rxjs";
import Swal from "sweetalert2";
 @Injectable({ providedIn: "root" })
export class CanEnter implements CanActivate {
    constructor(public myRouter:Router){

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        let u = JSON.parse(sessionStorage.getItem("myUser"));//ממיר ממחרוזת בפורמט גייסון לאובייקט
        if (u.name!='guest')
        return true;
        Swal.fire(" !!!תתחבר למערכת","מי שאינו מחובר לא יכול לצפות בפרטי המתכון","error")
        this.myRouter.navigate(['home']);
        return false;
    }

}