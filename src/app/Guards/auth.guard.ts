import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../Services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const isUser = !!userService.getUser();
  const currentUrl = state.url;
  if (currentUrl == '/signin') {
    if (isUser) {
      return router.navigate(['/profile']);
    }
    return true;
  } else {
    if (!isUser) {
      return router.navigate(['/signin']);
    }
    return true;
  }
};
