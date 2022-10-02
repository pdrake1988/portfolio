import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  pdfSrc = "https://docs.google.com/document/d/1Ol7rjQnEh1pudcOw28320ziJxJmf200SNuzfabATfa4/edit"
  constructor() { }

  ngOnInit(): void {
  }

}
