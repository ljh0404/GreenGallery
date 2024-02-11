import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {
  @Input() lastPage!: number;
  @Input() pageSelected!: number;
  @Output() sendMessageEvent = new EventEmitter<number>();
  pageAux!: number

  ngOnChanges(){
    this.pageAux = this.pageSelected;
  }

  onClickRight(){
    this.pageSelected = this.pageSelected + 1;
    this.pageAux = this.pageSelected;
    this.sendMessageEvent.emit(this.pageSelected);
  }
  onClickLeft(){
    this.pageSelected = this.pageSelected - 1;
    this.pageAux = this.pageSelected;
    this.sendMessageEvent.emit(this.pageSelected);
  }
  onClickAllRight(){
    this.pageSelected = this.lastPage;
    this.pageAux = this.pageSelected;
    this.sendMessageEvent.emit(this.pageSelected);
  }
  onClickAllLeft(){
    this.pageSelected = 1;
    this.pageAux = this.pageSelected;
    this.sendMessageEvent.emit(this.pageSelected);
  }
  handleBlur() {
    this.pageSelected = this.pageAux;
    this.sendMessageEvent.emit(this.pageSelected);
  }

  handleInputChange() {
    if (this.pageSelected == null || this.pageSelected == 0){
      this.pageSelected = this.pageAux;
    }
    else{
      if (this.pageSelected > this.lastPage){
        this.pageSelected = this.lastPage;
        this.pageAux = this.pageSelected;
      }
      else{
        this.pageAux = this.pageSelected;
      }
    }
  }
}
