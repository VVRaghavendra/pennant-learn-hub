import { Component,OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init();
  }
  
}
