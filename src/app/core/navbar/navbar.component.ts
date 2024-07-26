import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'web-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  userForm!:FormGroup;
  value:any;
 constructor( private fb:FormBuilder,private authSrv: AuthService){}
 ngOnInit():void{
   
    this.formDetails();
 }
 formDetails(){
  this.userForm = this.fb.group({
    name:new FormControl('',[Validators.required]),
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    phone:new FormControl('',[Validators.required]),
    website:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
 }
 registration(data:any){
  //alert("fgf")
  console.log('post-data',data)
  //return
  this.authSrv.fetchRegisterApp(data).subscribe((response:any) =>{
    response;
  })
 }

 
}
