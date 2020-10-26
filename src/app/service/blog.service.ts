import { Result } from './../models/result';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { userinfo } from '../pages/shell/userinfo/userinfo';

@Injectable({
    providedIn: 'root'
})

export class BlogService {
    constructor(
        private http: HttpClient
    ) { }
    login(user): Observable<Result<any>> {
        const loginUrl = 'http://127.0.0.1:8000/login';
        return this.http.post<Result<any>>(loginUrl, user);
    }
    registery(registerinfo): Observable<Result<any>> {
        const registerUrl = 'http://127.0.0.1:8000/register2';
        return this.http.post<Result<any>>(registerUrl, registerinfo);
    }
    getTOSinfo():Observable<Result<any>>{
        const getTOSinfourl = 'http://127.0.0.1:8000/shipinfoimport';
        return this.http.get<any>(getTOSinfourl)
    }
    getvoyageidlist():Observable<Result<any>>{
        const getvoyageidurl = 'http://127.0.0.1:8000/getvoyageidlist';
        return this.http.get<any>(getvoyageidurl)
    }
    getshipnamelist():Observable<Result<any>>{
        const getshipnameurl = 'http://127.0.0.1:8000/getshipnamelist';
        return this.http.get<any>(getshipnameurl)
    }
    getvoyageid(voyageid):Observable<Result<any>>{
        const getvoyageidurl = 'http://127.0.0.1:8000/getvoyageid';
        return this.http.post<Result<any>>(getvoyageidurl,voyageid)
    }
    getshipname(shipname):Observable<Result<any>>{
        const getshipnameurl = 'http://127.0.0.1:8000/getshipname';
        return this.http.post<Result<any>>(getshipnameurl,shipname)
    }
    getall():Observable<Result<any>>{
        const getallurl = 'http://127.0.0.1:8000/getall';
        return this.http.get<any>(getallurl)
    }
    currentplan(info):Observable<Result<any>>{
        const currentplanurl = 'http://127.0.0.1:8000/currentplan';
        return this.http.post<Result<any>>(currentplanurl,info)
    }
    getcurrentplan():Observable<Result<any>>{
        const currentplanurl = 'http://127.0.0.1:8000/currentplan';
        return this.http.get<any>(currentplanurl)
    }
    fieldboxdata(info):Observable<Result<any>>{
        const fieldboxdataurl = 'http://127.0.0.1:8000/fieldboxdata';
        return this.http.post<Result<any>>(fieldboxdataurl,info)
    }
    preplandata(info):Observable<Result<any>>{
        const preplandataurl = 'http://127.0.0.1:8000/preplan';
        return this.http.post<Result<any>>(preplandataurl,info)
    }
    getcurrentplan2():Observable<Result<any>>{
        const currentplanurl = 'http://127.0.0.1:8000/getcurrentplan';
        return this.http.get<any>(currentplanurl)
    }
    gethistoryplan():Observable<Result<any>>{
        const gethistoryplanurl = 'http://127.0.0.1:8000/gethistoryplan';
        return this.http.get<any>(gethistoryplanurl)
    }
    createtask(para):Observable<Result<any>>{
        const createtaskurl = 'http://127.0.0.1:8000/createtask';
        return this.http.post<Result<any>>(createtaskurl,para)
    }
    getalltask():Observable<Result<any>>{
        const getalltaskurl = 'http://127.0.0.1:8000/getalltask';
        return this.http.get<any>(getalltaskurl)
    }
    getuser(user):Observable<Result<any>>{
        const getuserurl = 'http://127.0.0.1:8000/getuser';
        return this.http.post<Result<any>>(getuserurl,user)
    }



    submit(healthycondition):Observable<Result<any>>{
        const submitUrl = 'http://127.0.0.1:8000/declaration';
        return this.http.post<Result<any>>(submitUrl, healthycondition);
    }
    getuserinfo(userinformation):Observable<Result<any>>{
        const getuserinfourl = 'http://127.0.0.1:8000/userinformation';
        return this.http.post<Result<any>>(getuserinfourl, userinformation);
    }
    getusercondition(username):Observable<Result<any>>{
        const getuserconditionurl = 'http://127.0.0.1:8000/usercondition';
        return this.http.post<Result<any>>(getuserconditionurl,username)
    }
    temsum(date):Observable<Result<any>>{
        const temsumurl = 'http://127.0.0.1:8000/statistics';
        return this.http.post<Result<any>>(temsumurl,date)
    }
    userinfo():Observable<Result<any>> {
        const userinfoUrl = 'http://localhost:8000/getuserinfo';
        return this.http.get<any>(userinfoUrl);
      }
    infoupdate(updateinfo):Observable<Result<any>>{
        const updateUrl = 'http://localhost:8000/infoupdate';
        return this.http.put<Result<any>>(updateUrl, updateinfo);
    }
    hubei(hubeiinfo):Observable<Result<any>>{
        const hubeiinfourl = 'http://127.0.0.1:8000/hubei';
        return this.http.post<Result<any>>(hubeiinfourl,hubeiinfo)
    }
    updforuser(updinfo):Observable<Result<any>>{
        const updateUrl = 'http://localhost:8000/updforuser';
        return this.http.put<Result<any>>(updateUrl, updinfo);
    }
    numbers():Observable<Result<any>> {
        const numberinfourl = 'http://localhost:8000/sum';
        return this.http.get<any>(numberinfourl);
      }


    location():Observable<Result<any>>{
        const locationurl = 'http://api.map.baidu.com/reverse_geocoding/v3/?ak=j8nT8XiIGIxbWBZXDfMptyMqNgRo31iX&output=json&coordtype=wgs84ll&location=31.225696563611,121.49884033194';
        return this.http.get<Result<any>>(locationurl)
    }
}



