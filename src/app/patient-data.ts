import {AngularFireDatabase, AngularFireObject,AngularFireList   } from "angularfire2/database"; 
import {Observable} from 'rxjs/Observable'; 
import { Time } from "@angular/common";

export class PatientData {

    patientDataList$: AngularFireList<any[]>;
    data : any; 
    constructor(
    public Dose : number , 
    public DoseType : number , 
    public Measruement : number , 
    public MeasurementType : number , 
    public Time : string , 
    public Date : string , 
    public db: AngularFireDatabase
    )
    {
        this.patientDataList$ = this.db.list('/Patients'); 

    }

    pushData()
    {
       this.data = {
           Dose : this.Dose, 
           DoseType : this.DoseType , 
           Measruement : this.Measruement, 
           MeasurementType : this.MeasurementType , 
           Time : this.Time , 
           Date : this.Date , 
    };
    this.patientDataList$.push(this.data);         
    }


}
