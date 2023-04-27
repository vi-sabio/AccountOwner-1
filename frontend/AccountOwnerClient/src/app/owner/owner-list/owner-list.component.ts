<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Owner } from './../../_interfaces/owner.model';
import { OwnerRepositoryService } from './../../shared/services/owner-repository.service';
import { ErrorHandlerService } from './../../shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
=======
import { Component, OnInit, ErrorHandler } from '@angular/core';
import { OwnerRepositoryService } from 'src/app/shared/services/owner-repository.service';
import { Owner } from 'src/app/_interfaces/owner.model';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { HttpErrorResponse } from '@angular/common/http';
>>>>>>> ce3399ad9c48a224c9e503946fc0b8e4b325b9fd

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.css']
})
export class OwnerListComponent implements OnInit {
  owners: Owner[];
  errorMessage: string = '';

<<<<<<< HEAD
  constructor(private repository: OwnerRepositoryService,
    private errorHandler: ErrorHandlerService,
    private router: Router) { }
=======
  constructor(private repo: OwnerRepositoryService, private ErrorHandler: ErrorHandlerService) { }
>>>>>>> ce3399ad9c48a224c9e503946fc0b8e4b325b9fd

  ngOnInit(): void {
    this.getAllOwners();
  }

  private getAllOwners = () => {
    const apiAddress: string = 'api/owner';
<<<<<<< HEAD
    this.repository.getOwners(apiAddress)
      .subscribe({
        next: (own: Owner[]) => this.owners = own,
        error: (err: HttpErrorResponse) => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errorMessage;
=======
    this.repo.getOwners(apiAddress)
      .subscribe({
        next: (own: Owner[]) => this.owners = own,
        error: (err: HttpErrorResponse) => {
          this.ErrorHandler.handleError(err);
          this.errorMessage = this.ErrorHandler.errorMessage;
>>>>>>> ce3399ad9c48a224c9e503946fc0b8e4b325b9fd
        }
      })
  }

  public getOwnerDetails = (id) => {
    const detailsUrl: string = `/owner/details/${id}`;
    this.router.navigate([detailsUrl]);
  }

  public redirectToUpdatePage = (id) => {
    const updateUrl: string = `/owner/update/${id}`;
    this.router.navigate([updateUrl]);
  }

  public redirectToDeletePage = (id) => {
    const deleteUrl: string = `/owner/delete/${id}`;
    this.router.navigate([deleteUrl]);
  }
}
