import { Component, OnInit } from '@angular/core';
import { combineAll } from 'rxjs';
import { ICompany } from 'src/app/Models/company.interface';
import { CompaniesService } from 'src/app/Services/companies/companies.service';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  companyDataBySubject: ICompany[] = [];
  constructor(private _company: CompaniesService) { }

  ngOnInit(): void {
    this._company.companyIDsubject$.subscribe((data)=>{
      this._company.getCompaniesDatabyAPI().subscribe((companyData)=>{
        this.companyDataBySubject = companyData.filter(x=>x.emailID == data);
        console.log(this.companyDataBySubject);
      })
    })

  }

}
