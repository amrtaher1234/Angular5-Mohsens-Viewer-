import { Component, OnInit }  from '@angular/core';
import {AngularFireDatabase, AngularFireObject,AngularFireList   } from "angularfire2/database"; 
import {Observable} from 'rxjs/Observable'; 
import { PatientData } from '../patient-data';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // listObservable : Observable<any[]>; 
  // todos$: AngularFireList<any[]>;
  public dose;
  public measurement; 
  public measurementtype; 
  public dosetype; 
  public time; 
  public date; 

  patientData =null; 

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {

    
    // this.listObservable = this.getList('/Patients'); 
    // this.todos$ = this.db.list('/Patients');
    // this.patientData.pushData(); 


  }

  // getList(listPath) : Observable<any[]>
  // {

  //   return this.db.list(listPath).valueChanges(); 
  // }
  // addTodo(value: any): void {

  //   this.todos$.push(value);
  // }
  SubmitData()
  {
    // this.patientData = new PatientData(this.dose , this.measurebefore , this.calories , this.measureafter , this.db);
    //this.patientData.pushData(); 
    this.patientData = new PatientData(this.dose , this.dosetype , this.measurement , this.measurementtype , 
    this.time , this.date , this.db); 


    this.patientData.pushData(); 

    
    this.dose = null;    
    this.time=null; 
    this.measurement = null; 
    this.date=null; 
    this.dosetype = null; 
    this.measurementtype = null; 
  }
}
