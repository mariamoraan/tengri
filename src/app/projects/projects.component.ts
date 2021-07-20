import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  public project:any;
  public info:boolean = false;
  actualProject(event:any){
    this.project = event.current_project;
  }
  closeInfo(){
    document.getElementById('info_block')?.classList.toggle('none');
    if(this.info == true){
      this.info = false;
    }else{
      this.info = true;
    }
  }
  ngOnInit(): void {
  }

}
