import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class APIService {
    constructor(private httpClient: HttpClient) {

    }
    get(){
        return this.httpClient.get('https://api.restful-api.dev/objects');
    }
    post(data: any){
        return this.httpClient.post('https://api.restful-api.dev/objects', data);
    }
    put(data: any){
        return this.httpClient.put('https://api.restful-api.dev/objects/' + data.id, data);
    }
    delete(id: number){
        return this.httpClient.delete('https://api.restful-api.dev/objects/'+ id);
    }
}