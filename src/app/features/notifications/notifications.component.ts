import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {

  public clickInfo() {

    this.toastr.info('This is an informative text', 'Info');

  }

  public clickSuccess() {

    this.toastr.success('This is a successful operation', 'Success');

  }

  public clickError() {

    this.toastr.error('There is an error in the operation', 'Error');

  }

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

}
