import { ResolveFn } from '@angular/router';

export const classeResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
