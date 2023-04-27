import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { ErrorModalComponent } from '../modals/error-modal/error-modal.component';
import { BsModalService, ModalOptions } from 'ngx-bootstrap/modal';

=======
>>>>>>> ce3399ad9c48a224c9e503946fc0b8e4b325b9fd

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {
  public errorMessage: string = '';

<<<<<<< HEAD
  constructor(private router: Router, private modal: BsModalService) { }
=======
  constructor( private router: Router) { }
>>>>>>> ce3399ad9c48a224c9e503946fc0b8e4b325b9fd

  public handleError = (error: HttpErrorResponse) => {
    if (error.status === 500) {
      this.handle500Error(error);
    }
    else if (error.status === 404) {
      this.handle404Error(error);
    }
    else {
      this.handleOtherError(error);
    }
  }

  private handle500Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/500']);
  }

  private handle404Error = (error: HttpErrorResponse) => {
    this.createErrorMessage(error);
    this.router.navigate(['/404']);
  }

  private handleOtherError = (error: HttpErrorResponse) => {
<<<<<<< HEAD
    this.createErrorMessage(error);
    const config: ModalOptions = {
      initialState: {
        modalHeaderText: 'Error Message',
        modalBodyText: this.errorMessage,
        okButtonText: 'OK'
      }
    };
    this.modal.show(ErrorModalComponent, config);
  }


=======
    this.createErrorMessage(error); //TODO: this will be fixed later;
  }

>>>>>>> ce3399ad9c48a224c9e503946fc0b8e4b325b9fd
  private createErrorMessage = (error: HttpErrorResponse) => {
    this.errorMessage = error.error ? error.error : error.statusText;
  }
}
