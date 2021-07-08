import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, tap, catchError, first } from 'rxjs/operators';

import { AppState } from '../../reducers';
import { setUserGuestGuard, userCheckedGuestGuard} from '../store/actions/auth.actions';
import { isLoggedIn, isUserChecked } from '../store/selectors/auth.selectors';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {

  constructor(private store: Store<AppState>, private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return combineLatest([this.store.select(isLoggedIn), this.store.select(isUserChecked)])
        .pipe(
          first(),
          switchMap(([loggedIn, checked]) => {
            if(loggedIn){
              this.router.navigate(['/']);
              return of(false);
            }
            if(checked){
              return of(true);
            } else{
              return this.authService.getUser().pipe(
                tap(() => console.log("user checked")),
                map(user => {
                  this.store.dispatch(setUserGuestGuard({user}))
                  this.router.navigate(['/admin']);
                  return !user
                }),
                catchError(error => {
                  this.store.dispatch(userCheckedGuestGuard())
                  return of(true)
                })
              )
            }
          }),
        );
  }
}
