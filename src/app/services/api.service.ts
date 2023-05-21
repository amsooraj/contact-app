import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { ContactSchema } from 'src/models/contactSchema';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  BASE_URL = 'https://contact-app-mxdz.onrender.com'
  constructor(private http:HttpClient) { }

  //handle error

  handleError(error:HttpErrorResponse){
    let errorMsg:string=''
    
    if(error.error){
      //Client error
      errorMsg= `Error: ${error.message}`
    }
    else{
      errorMsg = `Status: ${error.status} \n Error: ${error.message}`
    }
    return throwError(()=>errorMsg)
  }

  //create a function for api call to get all contacts
  getAllContacts(){
    //there is no need of an argument coz here we are fetching all contacts

    //api call to:http://localhost:3000/contacts req:get

    return this.http.get(`${this.BASE_URL}/contacts`)

  }

  ///view contact

  viewContact(id:any){
    //api call url http://localhost:3000/contact/cal req : get
    return this.http.get(`${this.BASE_URL}/contacts/${id}`)
  }

  //to get a particular group
  getGroup(id:string){
    return this.http.get(`${this.BASE_URL}/groups/${id}`)
  }

  //to get all group
  getGroups(){
    //api call directly
    return this.http.get(`${this.BASE_URL}/groups`)
  }

  //add contact
  addContact(contact:ContactSchema){
    //api call
    return this.http.post(`${this.BASE_URL}/contacts`,contact)
  }

  //delete contact
  deleteContact(id:any){
    //api call to server
    return this.http.delete(`${this.BASE_URL}/contacts/${id}`)
  }

  //edit a contact
  editContact(id:any,contact:ContactSchema){
    //api call
    return this.http.put(`${this.BASE_URL}/contacts/${id}`,contact)
  }
}
