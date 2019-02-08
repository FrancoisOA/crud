import { Component } from '@angular/core';
import { Employee} from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

employeeArray:Employee[] = [
  { id:1,   name:"Juan",    country: ""},
  { id:2,   name:"Maria",    country: "peru"},
  { id:3,   name:"Javier",    country: "venezuela"},
  { id:4,   name:"Mario",    country: "chile"}
];

selectedEmployee: Employee = new Employee();

addoredit(){
  if(this.selectedEmployee.id === 0){
  this.selectedEmployee.id = this.employeeArray.length+1;
  this.employeeArray.push(this.selectedEmployee);  
  }
  this.selectedEmployee = new Employee();
}

openforedit(employee:Employee){
this.selectedEmployee = employee;
}

delete(){
  if(confirm('Estas seguro')){
    this.employeeArray = this.employeeArray.filter(x => x != this.selectedEmployee);
    this.selectedEmployee = new Employee();
  }
}

}
