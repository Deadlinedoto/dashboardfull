import {HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";


export function authInterceptor(
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> {
  const token = localStorage.getItem("Token");
  let request = req;

  if(token) {
    const bearer = `Bearer ${token}`;

    request = req.clone({
      setHeaders: {
        Authorization: bearer,
      }
    });
  }
  return next(request);
}

