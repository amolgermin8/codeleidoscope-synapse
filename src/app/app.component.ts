import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { QueryService } from './services/query.service';
import { ApiserviceService } from './services/apiservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, MatIconModule, MatButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [QueryService, ApiserviceService]
})
export class AppComponent {

  constructor(private queryService: QueryService, private apiService: ApiserviceService) {}

  // use angular form for this
  query: string = '';

  result: string = '';

  disableButton: boolean = false;

    // make a big text 400 words
    sampleText: string = `The world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptable.The world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptableThe world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptableThe world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptableThe world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptableThe world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptableThe world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptableThe world is a vast and wondrous place, filled with countless stories waiting to be told. From the towering peaks of the Himalayas to the depths of the ocean, from the bustling cities to the quiet countryside, there is always something new to discover.

    We are all connected in this world, bound together by shared experiences and common dreams. We strive for happiness, for love, for meaning in our lives. We face challenges and overcome obstacles, learning and growing along the way.
  
    The human spirit is resilient and adaptable We have the power to create, to innovate, to make a difference in the world. We can choose to be kind, to be compassionate, to be forces for good.
  
    But the world is also a place of conflict and suffering. We face injustice, inequality, and environmental degradation. We must work together to address these challenges, to build a better future for all.
  
    The journey of life is a complex and often unpredictable one. There will be moments of joy and sorrow, of triumph and defeat. But through it all, we must never lose sight of our humanity, our shared values, and our potential to make a positive impact on the world.
  
    Let us embrace the beauty and wonder of life, and strive to make the world a better place for ourselves and for generations to come.`;
  

  sendQuery() {
    console.log('Sending query:', this.query);
    if (this.query) { // Check if the query is not empty
      this.disableButton = true;

      this.queryService.sendQuery(this.query)
      .subscribe({
        next: (data) => {
            console.log(data);
            // <insert code for what to do on success>)
            this.result = `Your query: ${this.query}\n\n${data}`;
            // this.result = this.sampleText;
            this.disableButton = false;
            this.query = '';
        }, error: (err) => {
            console.error(err);
            // <insert code for what to do on failure>
        }
    });

      // this.apiService.getTest("welcome").subscribe(
      //   (response) => {
      //     console.log('Query response:', response);
      //   },
      //   (error) => {
      //     console.error('Query error:', error);
      //   }
      // );
      // console.log('Query response:', this.queryService.sendQuery(this.query));
    }
  }
}
