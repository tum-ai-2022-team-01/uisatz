import { HttpParams, HttpResponse, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  fetchRating(text: string): Observable<Case> {
    const params = new HttpParams().append('text', text);
    return this.http.get<Case>('http://127.0.0.1:5000/',
      {params: params, responseType: 'json'})
  }

  onCheck() {
    this.analysis = [];
    this.fetchRating(this.description).subscribe((data: Case) => {
      this.analysis.push(data);
      if (this.interactive == true) {
        this.analysis.push({
          risk: 'medium',
          title: 'Human Interaction',
          description: 'Please note that any vendor is required to inform human users that they are interacting with an AI system.'
        });
      }
    })
  }
}
