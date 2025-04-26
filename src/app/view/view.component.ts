import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  exteriorData: any;
  allData: any[] = [];

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any[]) => {
      this.allData = data;
      console.log("All data:", this.allData);  // Log all the data to ensure it contains the expected items
      this.loadData(8); // Pass the extracted id to load data
    });
  }

  loadData(id: number) {
    console.log("Finding data with id:", id);
    this.exteriorData = this.allData.find(item => item.id === id);
    console.log("Found data:", this.exteriorData);
  }


}
