import { Component } from '@angular/core';

@Component({
  selector: 'web-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  modal:any;
  btn:any;
  span:any;
 constructor(){}
 ngOnInit():void{
    this.modal = document.getElementById("myModal");
    this.btn = document.getElementById("myBtn");
    this.span = document.getElementsByClassName("close")[0];
    this.btn.onclick = () => {
      this.modal.style.display = "block";
    }
    this.span.onclick = () =>{
      this.modal.style.display = "none";
    }
    window.onclick = (event) => {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    }
 }
 
}
