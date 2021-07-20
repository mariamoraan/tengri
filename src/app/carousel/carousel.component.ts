import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  public projects = [
    {
      'name':'EJEMPLO 2',
      'id':'ejemplo2',
      'img':'../../assets/p2.jpg',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum ac sem tincidunt ultrices. Quisque quis leo purus. Nulla vitae enim ut sem venenatis consectetur ut ac nisi. Nulla ornare mauris sit amet ante pretium dignissim. Nunc vel scelerisque ligula. Morbi consequat magna nec ex venenatis ornare. Quisque fringilla commodo mi, id feugiat mi. Pellentesque ut magna auctor, consectetur magna in, dictum justo.',

    },
    {
      'name':'EJEMPLO 3',
      'id':'ejemplo3',
      'img':'../../assets/p4.png',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum ac sem tincidunt ultrices. Quisque quis leo purus. Nulla vitae enim ut sem venenatis consectetur ut ac nisi. Nulla ornare mauris sit amet ante pretium dignissim. Nunc vel scelerisque ligula. Morbi consequat magna nec ex venenatis ornare. Quisque fringilla commodo mi, id feugiat mi. Pellentesque ut magna auctor, consectetur magna in, dictum justo.',

    },
    {
      'name':'EJEMPLO 4',
      'id':'ejemplo4',
      'img':'../../assets/p5.png',
      'desc':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id ipsum ac sem tincidunt ultrices. Quisque quis leo purus. Nulla vitae enim ut sem venenatis consectetur ut ac nisi. Nulla ornare mauris sit amet ante pretium dignissim. Nunc vel scelerisque ligula. Morbi consequat magna nec ex venenatis ornare. Quisque fringilla commodo mi, id feugiat mi. Pellentesque ut magna auctor, consectetur magna in, dictum justo.',

    },
  ]

  @Output() new_current_project = new EventEmitter();
  public current_project = this.projects[0];

  selectProject(id:string){
    for(let i = 0; i<this.projects.length; i++){
      if(this.projects[i].id == id){
        this.current_project = this.projects[i];
        this.new_current_project.emit({current_project:this.current_project})
      }
    }
    return this.projects[0];
  }

}
