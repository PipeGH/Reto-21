import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { htmlPrefilter } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {

  URL = 'https://deploy.reto21.website';
  filtroUsuario = '';

  constructor(
    private http: HttpClient
    ) { }


  getDocuments(){
      return this.http.get(`${this.URL}/users/selectDocument`);
  }

  getRol(){
    return this.http.get(`${this.URL}/users/selectRol`);
  }

  selectAllRole(){
    return this.http.get(`${this.URL}/users/selectAllRole`);
  }

  getGender(){
    return this.http.get(`${this.URL}/users/selectGender`);
  }

  createUsers(form:any){
    return this.http.post(`${this.URL}/users/createUsers`,form);
  }

  getUser(form:any){
    return this.http.post(`${this.URL}/users/selectUsers`,form);
  }

  getOneUser(form:any){
    return this.http.post(`${this.URL}/users/selectUser`,form);
  }

  putStateUser(form:any){
    return this.http.put(`${this.URL}/users/updateState`,form);
  }

  putUsers(form:any){
    return this.http.post(`${this.URL}/users/updateUsers`,form);
  }

  getHistory(form:any){
    return this.http.post(`${this.URL}/users/selectHistory`,form);
  }

  getMean(form:any){
    return this.http.post(`${this.URL}/users/selectMean`,form);
  }

  getMeanOneMonth(form:any){
    return this.http.post(`${this.URL}/users/meanOneMonth`,form);
  }

  getDays(form:any){
    return this.http.post(`${this.URL}/users/selectDays`,form);
  }

  getClient(){
    return this.http.get(`${this.URL}/users/selectClient`);
  }


  getImg(form:any){
    return this.http.post(`${this.URL}/users/selectImgUser`,form);
  }


  //Perfil del usuario -------------------------------------------------------------------------->

  profileUser(form:any){
    return this.http.post(`${this.URL}/users/profileUser`,form);
  }





  verifyImng(form:any){
    return this.http.post(`${this.URL}/users/selectVerifyImg`,form);
  }

  createImgProfile(body:FormData){
    return this.http.post(`${this.URL}/users/createImgProfile`,body);
  }

  updateImgProfile(body:FormData){
    return this.http.post(`${this.URL}/users/updateImgProfile`,body);
  }

  deleteImgProfile(form:any){
    return this.http.post(`${this.URL}/users/deleteImgProfile`,form);
  }

  updateProfile(form:any){
    return this.http.post(`${this.URL}/users/updateProfile`,form);
  }

  confirmPassword(form:any){
    return this.http.post(`${this.URL}/users/selectPasswordProfile`,form);
  }

  updatePasswordProfile(form:any){
    return this.http.post(`${this.URL}/users/updatePassword`,form);
  }




  //--------------------------------------------------------------------------------------------->


  //Create routines for clients--------------------------------------------------------------->

  getUsersPlan(){
    return this.http.get(`${this.URL}/users/selectUsersPlan`);
  }


  //---------------------------------------------------------------------------------------------->




  //Assessment------------------------------------------------------------------------------------>

  selectNewUsers(){
    return this.http.get(`${this.URL}/users/selectNewUsers`);
  }

  selectOldUsersFirstPart(){
    return this.http.get(`${this.URL}/users/selectOldUsersFirstPart`);
  }

  selectOldUsersSecondtPart(){
    return this.http.get(`${this.URL}/users/selectOldUsersSecondtPart`);
  }

  selectInfoGeneralUser(form:any){
    return this.http.post(`${this.URL}/users/selectInfoGeneralUser`,form);
  }

  selectGenderUser(form:any){
    return this.http.post(`${this.URL}/users/selectGenderUser`,form);
  }

  //---------------------------------------------------------------------------------------------->






  //Métodos del cliente---------------------------------------------------

  registeredAssist(form:any){
    return this.http.post(`${this.URL}/users/registeredAssist`,form);
  }

  confirmAssist(form:any){
    return this.http.post(`${this.URL}/users/confirmAssist`,form);
  }

  selectNumberDays(form:any){
    return this.http.post(`${this.URL}/users/selectNumberDays`,form);
  }

  selectDataUserDateInitAndFinish(form:any){
    return this.http.post(`${this.URL}/users/selectDataUserDateInitAndFinish`,form);
  }


  //-------------------------------------------------------------------------



  //Métodos de recepcion-----------------------------------------------------------

  selectAllClient(){
    return this.http.get(`${this.URL}/users/selectAllClient`);
  }

  searchSuscription(form:any){
    return this.http.post(`${this.URL}/users/searchSuscription`,form);
  }

  updateStateClient(form:any){
    return this.http.post(`${this.URL}/users/updateStateClient`,form);
  }

  selectPlanSuscription(){
    return this.http.get(`${this.URL}/users/selectPlanSuscription`);
  }

  selectTypeValoracion(){
    return this.http.get(`${this.URL}/users/selectTypeValoracion`);
  }

  createNewUser(form:any){
    return this.http.post(`${this.URL}/users/createNewUser`,form);
  }

  searchPerfilUser(form:any){
    return this.http.post(`${this.URL}/users/searchPerfilUser`,form);
  }

  validateDateFin(form:any){
    return this.http.post(`${this.URL}/users/validateDateFin`,form);
  }

  updatePlanUserm(form:any){
    return this.http.post(`${this.URL}/users/updatePlanUserm`,form);
  }

  updateTypeAssessmentUser(form:any){
    return this.http.post(`${this.URL}/users/updateTypeAssessmentUser`,form);
  }

  updateDatePerfil(form:any){
    return this.http.post(`${this.URL}/users/updateDatePerfil`,form);
  }

  updateTimePago(form:any){
    return this.http.post(`${this.URL}/users/updateTimePago`,form);
  }


  //-------------------------------------------------------------------------------


  searchEmailUser(form:any){
    return this.http.post(`${this.URL}/users/searchEmailUser`,form);
  }




  //Reset Password-----------------------------------------------------------------------

  searchDateUserToResetPassword(form:any){
    return this.http.post(`${this.URL}/users/searchDateUserToResetPassword`,form);
  }

  validateExistensPassword(form:any){
    return this.http.post(`${this.URL}/users/validateExistensPassword`,form);
  }

  resetPassword(form:any){
    return this.http.post(`${this.URL}/users/resetPassword`,form);
  }

  //-------------------------------------------------------------------------------------




  //Métodos para el inicio---------------------------------------------------------------

  selecUserFromRol(form:any){
    return this.http.post(`${this.URL}/users/selecUserFromRol`,form);
  }

  searchOnePersonalTitle(form:any){
    return this.http.post(`${this.URL}/users/searchOnePersonalTitle`,form);
  }

  searchOnePersonalInfo(form:any){
    return this.http.post(`${this.URL}/users/searchOnePersonalInfo`,form);
  }

  //-------------------------------------------------------------------------------------



}
