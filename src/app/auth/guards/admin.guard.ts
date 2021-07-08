import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
// import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return true;
      // return this.auth.user$.pipe(
      //   map(user => _.intersection(['ROLE_SYS_ADMIN'], user?.role).length > 0),
      //   first(),
      //   tap(allowed => {
      //     if (!allowed) {
      //       this.router.navigateByUrl('/');
      //     }
      //   })
      // );
  }
}
