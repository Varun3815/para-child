import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router, RouterModule } from '@angular/router';

type listingType = {
  id: number;
  name: string;
  email:string;
}

@Component({
  selector: 'app-listing-details',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './listing-details.component.html',
  styleUrl: './listing-details.component.css'
})

export class ListingDetailsComponent implements OnInit{
  contacts:listingType[]=[
    {id: 1, name:'Johan', email:'johan@email.com'},
    {id: 2, name:'Joha', email:'joha@email.com'},
    {id: 3, name:'Joh', email:'joh@email.com'},
    {id: 4, name:'Jo', email:'jon@email.com'},
    {id: 5, name:'J', email:'j@email.com'},
  ]
  constructor(private route: ActivatedRoute, private router:Router){}
  ngOnInit(): void {
  }

}
