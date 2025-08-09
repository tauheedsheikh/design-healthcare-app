import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-exterior-design',
  templateUrl: './exterior-design.component.html',
  styleUrls: ['./exterior-design.component.css']
})
export class ExteriorDesignComponent implements OnInit {
  exteriorData: any;
  allData: any[] = [];

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any[]) => {
      this.allData = data;
      this.loadData(1); // Default load Exterior data (id = 1)
    });
  }

  loadData(id: number) {
    this.exteriorData = this.allData.find(item => item.id === id);
  }
}
