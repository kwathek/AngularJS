import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() title :string;
  @Input() content :  string;
  @Input() loveIts : number;
  @Input() created_at :  Date;

  constructor() { }

  ngOnInit() {
  }
  getColor(){
    if(this.loveIts > 0){
      return 'green';
    }else if(this.loveIts < 0 ){
      return 'red';
    }else {
      return 'black';
    }
  }
  onLove(){
    this.loveIts++;
  }
  onDisLove(){
    this.loveIts--;
  }

}
