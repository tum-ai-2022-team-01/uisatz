import { Component } from '@angular/core';

interface Case {
  risk: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Input bindings
  description: string = "Deloitte Czech Republic has developed an AI tool called Eagle Eye that uses open source intelligence to gather signals from the Internet. The AI software considers any information it finds about the company, customers, or market to which Deloitte assigns them as a signal. Using machine learning, Eagle Eye then begins to analyze these signals, correlating them and identifying specific patterns.AI can handle the vast amounts of data on the internet and find correlations between parameters that humans wouldn't even think of. Once these patterns are determined, Eagle Eye constantly monitors the Internet to look for them and provide alerts.";
  interactive: boolean = false;
  analysis: Case[] = [];

  onCheck() {
    let cases: Case[] = [];

    cases.push({
      risk: 'high',
      title: 'High-risk Model',
      description: 'Based on the AI analysis, the described AI use might be classified as high-risk under the EU AI regulation. Please contact a lawyer to clarify its safe use.'
    })

    if (this.interactive == true) {
      cases.push({
        risk: 'medium',
        title: 'Human Interaction',
        description: 'Any vendor is required to inform human users that they are interacting with an AI system.'
      });
    }
    this.analysis = cases;
  }
}
