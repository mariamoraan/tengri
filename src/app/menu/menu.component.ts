import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  @Output() close = new EventEmitter();

  openLink(link:string){
    this.close.emit();
    this.router.navigate([link]);
  }

  ngOnInit(): void {
  }

}
