import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appproject';

  employees:Employee[] = [
   new Employee(101, "John",9912165,"sbilluri@","qeert", 5000),
   new Employee(102, "Smith",12233,"abcd@","dddbb",5000),
  
];

newemployee:Employee = new Employee(0,"",0,"","",0);

onInsertClick(){
   this.employees.push(new Employee(this.newemployee.empId,this.newemployee.empName,this.newemployee.empPhNo,this.newemployee.empEmail,this.newemployee.empPassword,this.newemployee.salary));
    this.newemployee.empId = 0;
    this.newemployee.empName = "";
    this.newemployee.empPhNo = 0;
    this.newemployee.empEmail = "";
    this.newemployee.empPassword = "";
    this.newemployee.salary = 0;
}

onDeleteClick(index:number){
   if(confirm("Are you sure to delete this emp?")){
      this.employees.splice(index,1);
   }}

   onupDateClick(newemployee: Employee): void {
    const index = this.employees.findIndex(e => e.empId === newemployee.empId);
    if (index !== -1) {
      this.employees[index] = newemployee;
    }
  }




}


