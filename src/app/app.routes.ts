import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'listing',
        title: 'Listing Details',
        component: ListingDetailsComponent,
    },
];
