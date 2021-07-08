import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { catchError, first, map, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { setUserAuthGuard, userCheckedAuthGuard } from '../store/actions/auth.actions';
import { isLoggedIn, isUserChecked } from '../store/selectors/auth.selectors';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>, private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(state.url);
      return combineLatest([this.store.select(isLoggedIn), this.store.select(isUserChecked)])
        .pipe(
          first(),
          switchMap(([loggedIn, checked]) => {
            if(loggedIn){
              return of(true);
            }
            if(checked){
              this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
              return of(false);
            } else {
              return this.authService.getUser().pipe(
                map(user => {
                  this.store.dispatch(setUserAuthGuard({user}))
                  return !!user
                }),
                catchError(error => {
                  this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
                  this.store.dispatch(userCheckedAuthGuard())
                  return of(false)
                })
              )
            }
          }),
        )
  }
}
