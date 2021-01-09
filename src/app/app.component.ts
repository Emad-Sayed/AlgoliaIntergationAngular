import { Component } from '@angular/core';
// import algoliasearch from 'algoliasearch/lite';
// const searchClient = algoliasearch(
//   'XHI9VC5DK2',
//   '07786f8aacedcb40c7940bf1471a8c03'
// );
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AlgoliaFrontIntegration';
  // config = {
  //   indexName: 'demo_ecommerce',
  //   searchClient
  // };
  getData(){
    alert("asd")
  }
}
