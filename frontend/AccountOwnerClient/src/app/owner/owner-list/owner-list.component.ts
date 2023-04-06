import { Component, OnInit, ErrorHandler } from '@angular/core';
import { OwnerRepositoryService } from 'src/app/shared/services/owner-repository.service';
import { Owner } from 'src/app/_interfaces/owner.model';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[];
  errorMessage: string = '';

  constructor(private repo: OwnerRepositoryService, private ErrorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getAllOWner();
  }

  private getAllOWner = () => {
    const apiAddress: string = 'api/owner';
    this.repo.getOwners(apiAddress)
      .subscribe({
        next: (own: Owner[]) => this.owners = own,
        error: (err: HttpErrorResponse) => {
          this.ErrorHandler.handleError(err);
          this.errorMessage = this.ErrorHandler.errorMessage;
        }
      })
  }

}
