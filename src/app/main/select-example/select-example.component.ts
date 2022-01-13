import { Component, OnInit } from '@angular/core';
import { RestService } from '../../shared/rest.service';

@Component({
  selector: 'app-select-example',
  templateUrl: './select-example.component.html',
  styleUrls: ['./select-example.component.scss']
})
export class SelectExampleComponent implements OnInit {


  userData = [];
  selectedId;
  constructor(private rs: RestService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.rs.getUsers().subscribe((response) => {
      this.userData = response;
    },
      (error) => console.log(error)
    )
  }

  scrollToEnd() {
    console.log('scrollToEnd');
    // this.productService.createProducts(true).subscribe(resp => {
    // this.ngSelList = resp;
    // this.counter = this.ngSelList.length;
    // });
    }
    



}
