import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Input bindings
  description: string = "Deloitte Czech Republic has developed an AI tool called Eagle Eye that uses open source intelligence to gather signals from the Internet. The AI software considers any information it finds about the company, customers, or market to which Deloitte assigns them as a signal. Using machine learning, Eagle Eye then begins to analyze these signals, correlating them and identifying specific patterns.AI can handle the vast amounts of data on the internet and find correlations between parameters that humans wouldn't even think of. Once these patterns are determined, Eagle Eye constantly monitors the Internet to look for them and provide alerts.";
  interactive: boolean = false;

  onCheck() {
    alert(this.description);
  }
}
