import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';

@Component({
  selector: 'app-list-complaint',
  templateUrl: './list-complaint.component.html',
  styleUrls: ['./list-complaint.component.css']
})
export class ListComplaintComponent implements OnInit, OnDestroy {
  complaintList: Array<object> = []
  private time
  constructor(
    private complaint: ComplaintService,
  ) {
    // this.time = setInterval(() => {
    //   this.complaint.listComplaint()
    //     .subscribe(
    //       (complaint) => {
    //         this.complaintList = this.complaint.complaintList
    //       }
    //     )
    // }, 10 * 1000)
  }



  ngOnDestroy() {
    clearInterval(this.time)
  }

  ngOnInit() {
    this.complaint.listComplaint()
      .subscribe(
      (complaint) => {
        this.complaintList = this.complaint.complaintList;
        console.log('Entro en this.complaint dentro del componente =>')
        console.log(this.complaintList)
      },
      (err) => console.log(err)
      )

    this.complaint.getCreateComplaintEmitter()
      .subscribe(list => {
        console.log('Imprimo el argumento list en componente list-complaint =>')
        console.log(list)
      })
  }

}
