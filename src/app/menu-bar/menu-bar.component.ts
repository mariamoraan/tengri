import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  toggleMenu(){
    document.getElementById('des-menu')?.classList.toggle('none');
  }

  ngOnInit(): void {
  }

}
