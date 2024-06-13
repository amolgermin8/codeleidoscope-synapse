import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QueryService } from './services/query.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private queryService: QueryService) {}

  // use angular form for this
  query: string = '';

  sendQuery() {
    console.log('Sending query:', this.query);
    if (this.query) { // Check if the query is not empty
      this.queryService.sendQuery(this.query).subscribe(
        (response) => {
          // Handle the successful response from the backend
          console.log('Response:', response);
          // Update the search results container with the response
        },
        (error) => {
          // Handle any errors that occur during the request
          console.error('Error:', error);
        }
      );
    }
    
  }
}
