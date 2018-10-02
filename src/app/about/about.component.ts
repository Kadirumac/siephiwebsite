import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-about',
  template: `
  <h2>Employee List</h2>
  <ul *ngFor="let employee of employees">
    <li>{{employee.name}}</li>

  </ul> <br><br><br>



  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
<ng-template #thenBlock>
  <section class="contentContainer" *ngIf="displayName; else elseBlock">
<h1>WHO WE ARE</h1>
<p><b>Working Hours</b>: 09:00-13:00/15:00-19:00</p>
<div class="managerBox">
<img src="assets/images/hero-man.png" width="300px;" height="300px;">
</div>
<h2>First Designer</h2>
<h2>Web Developer</h2>
<p style="text-align:center; font-size:18px;">"Da ist niemand der den Schmerz an sich liebt, der danach sucht und ihn haben möchte, einfach weil es Schmerz ist."
<br><br>
Der Standardteil von Lorem Ipsum, genutzt seit 1500, ist reproduziert für die, die es interessiert. Sektion 1.10.32 und 1.10.33 von "de Finibus Bonorum et Malroum" von Cicero sind auch reproduziert in ihrer Originalform, abgeleitet von der Englischen Version aus von 1914 (H. Rackham)
</p>
</section>
</ng-template>
<ng-template #elseBlock>
<section class="contentContainer">
<h1>WHO WE ARE not</h1>
<p><b>Working Hours</b>: 09:00-13:00/15:00-19:00</p>
<div class="managerBox">
<img src="assets/images/hero-man.png" width="300px;" height="300px;">
</div>
<h2>First Designer</h2>
<h2>Web Developer</h2>
<p style="text-align:center; font-size:18px;">"Da ist niemand der den Schmerz an sich liebt, der danach sucht und ihn haben möchte, einfach weil es Schmerz ist."
<br><br>
Der Standardteil von Lem Ipsum, genutzt seit 1500, ist reproduziert für die, die es interessiert. Sektion 1.10.32 und 1.10.33 von "de Finibus Bonorum et Malroum" von Cicero sind auch reproduziert in ihrer Originalform, abgeleitet von der Englischen Version aus von 1914 (H. Rackham)
</p>
</section>
</ng-template>
  `,
  styles: []
})
export class AboutComponent implements OnInit {
  displayName= true;
  public employees =[];

  constructor(private _employeeService: EmployeeService) { }


  ngOnInit() {
    this. _employeeService.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
