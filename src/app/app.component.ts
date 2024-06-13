import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QueryService } from './services/query.service';
import { ApiserviceService } from './services/apiservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [QueryService, ApiserviceService]
})
export class AppComponent {

  constructor(private queryService: QueryService, private apiService: ApiserviceService) {}

  // use angular form for this
  query: string = '';

  sendQuery() {
    console.log('Sending query:', this.query);
    if (this.query) { // Check if the query is not empty
      // this.queryService.sendQuery(this.query)
      //   .subscribe(
      //     (response) => {
      //       console.log('Query response:', response);
      //     },
      //     (error) => {
      //       console.error('Query error:', error);
      //     }
      //   );

      this.apiService.getTest("welcome").subscribe(
        (response) => {
          console.log('Query response:', response);
        },
        (error) => {
          console.error('Query error:', error);
        }
      );
    }
  }
}
