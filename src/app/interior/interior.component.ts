import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrl: './interior.component.css'
})
export class InteriorComponent implements OnInit {
  exteriorData: any;
  allData: any[] = [];

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any[]) => {
      this.allData = data;
      console.log("All data:", this.allData);  // Log all the data to ensure it contains the expected items
      this.loadData(5); // Pass the extracted id to load data
    });
  }

  loadData(id: number) {
    console.log("Finding data with id:", id);
    this.exteriorData = this.allData.find(item => item.id === id);
    console.log("Found data:", this.exteriorData);
  }


}
