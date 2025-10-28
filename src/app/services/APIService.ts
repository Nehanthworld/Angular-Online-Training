import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class APIService {
    baseUrl = environment.apiUrl;
    constructor(private httpClient: HttpClient) {

    }
    get(){
        return this.httpClient.get(this.baseUrl + 'Customer');
    }
//     get(){
//         return this.httpClient.post(this.baseUrl + 'Customer/GetCustomers', {
//   "pageNumber": 0,
//   "pageSize": 0,
//   "totalItems": 0,
//   "totalPages": 0,
//   "firstItem": 0,
//   "lastItem": 0,
//   "hasPreviousPage": true,
//   "hasNextPage": true,
//   "firstName": "string",
//   "lastName": "string",
//   "email": "string",
//   "phoneNumber": "string",
//   "statusId": 0,
//   "agentId": 0,
//   "active": true,
//   "fromDate": "2025-10-26T15:44:29.407Z",
//   "toDate": "2025-10-26T15:44:29.407Z",
//   "code": "string"
// });
//     }
    post(data: any){
        return this.httpClient.post(this.baseUrl + 'objects', data);
    }
    put(data: any){
        return this.httpClient.put(this.baseUrl + 'objects/' + data.id, data);
    }
    delete(id: number){
        return this.httpClient.delete(this.baseUrl + 'objects/'+ id);
    }
}