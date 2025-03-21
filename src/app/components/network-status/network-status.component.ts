import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NetworkStatusService } from '../../core/service/network-status.service';

@Component({
  selector: 'network-status',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network-status.component.html',
  styleUrl: './network-status.component.scss'
})
export class NetworkStatusComponent implements OnInit {

  isOnline: boolean = true

  constructor(
    private networkStatusService: NetworkStatusService
  ) { }

  ngOnInit(): void {
    this.networkStatusService.getNetworkStatus().subscribe((status) => {
      this.isOnline = status;
    });

  }

}
