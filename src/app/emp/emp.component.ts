import { Component, OnInit } from '@angular/core';
import { IData } from '../emp';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp',
  template:`
  <table>  
    <thead>  
        <tr>  
          <th>userId</th>  
          <th>id</th>  
          <th>title</th>  
          <th>body</th>  
        </tr>  
    </thead>  
    <tbody>  
      <tr *ngFor="let empl of employ | paginate: { id: 'listing_pagination',
      itemsPerPage: 5,
      currentPage: page,
      totalItems: totalRec }">  
        <td>{{ empl.userId }}</td>  
        <td>{{ empl.id }}</td>  
        <td>{{ empl.title }}</td>  
        <td>{{ empl.body }}</td>  
      </tr>  
    </tbody>  
  </table>  
  <div>
		<pagination-controls  id="listing_pagination"  (pageChange)="page = $event"></pagination-controls>
	</div>
  ` ,
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {

  public employ!: Array<IData> ;
  public totalRec = 100;
  public page = 1;
  constructor(private _empService: EmpService ) { }

  ngOnInit(){
    this._empService.getemp()
        .subscribe(dat => this.employ = dat);
  }
}
