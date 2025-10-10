import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-home',
  standalone: false,
  templateUrl: './account-home.html',
  styleUrl: './account-home.css'
})
export class AccountHome implements OnInit {
  activatedRoute = inject(ActivatedRoute);

  dataFromRoute: any;
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
    this.dataFromRoute = this.activatedRoute.snapshot.data['sampledata'];
  }
}
