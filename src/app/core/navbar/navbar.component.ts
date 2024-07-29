import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
declare var bootstrap: any; // Declare Bootstrap variable
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
    role:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)]),
  })
 }
 registration(data:any){
   if(this.userForm.valid){
     this.authSrv.fetchRegisterApp(data).subscribe((response:any) =>{
       response;
       this.userForm.reset();
       this.closeModal();
     })
   }

 }
//  get nameControl(): FormControl {
//   return this.userForm.get('name') as FormControl;
// }
get controls() {
  return this.userForm.controls;
}
 closeModal() {
  const modalElement = document.getElementById('exampleModalSing');
  if (modalElement) {
    const modal = bootstrap.Modal.getInstance(modalElement);
    if (modal) {
      modal.hide();
    }
  }
}

}
