import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {

  newComplaint: Object = {
    user: this.session.user._id
  }
  constructor(private session: SessionService) { }

  ngOnInit() {}

  addComplaint() {
    console.log(this.newComplaint)
  }

}
