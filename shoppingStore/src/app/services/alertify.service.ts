import { Injectable } from '@angular/core';
declare let alertify:any; //sistemdeki alertify dosyasını bulup tanıyor

@Injectable({
  providedIn: 'root'  //global servis
})
export class AlertifyService {

  constructor() { }

  success(message:string){
    alertify.success(message)
  }


}
