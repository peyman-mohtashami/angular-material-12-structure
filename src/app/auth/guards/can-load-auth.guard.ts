import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadAuthGuard implements CanLoad {

  constructor(private auth: AuthService, private router: Router) {}

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree  {
      console.log('can load guard');
      return true;
      // return this.auth.isLoggedIn$
      //     .pipe(
      //         tap(loggedIn => {
      //             if (!loggedIn) {
      //                 this.router.navigateByUrl('/login');
      //             }
      //         })
      //     );
    }

}
