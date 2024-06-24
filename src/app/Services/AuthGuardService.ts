import {Injectable} from "@angular/core";
import {JwtPayload, jwtDecode} from 'jwt-decode'

@Injectable()

export class AuthGuardService{

  isLoggedIn(){
   return localStorage.getItem('Token');
  }

  decodeToken(){
    const token = localStorage.getItem('Token');
    const decoded: JwtWithId = jwtDecode(token as string);
    return decoded.id;
  }
}

interface JwtWithId extends JwtPayload{
  id: number;
}
