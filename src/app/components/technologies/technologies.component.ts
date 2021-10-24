import { Component, OnInit } from '@angular/core';
import { ITechnologie } from 'src/app/interfaces/technologie.interface';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  technologies: Array<ITechnologie> = [];

  constructor(private technologiesService: TechnologiesService) { }

  ngOnInit(): void {
    this.technologiesService.getListTechnologies().subscribe(res => {
      this.technologies = res;
    });
  }
}

