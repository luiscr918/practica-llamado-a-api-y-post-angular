import { Component } from '@angular/core';
import { HeroSectionComponent } from "../../components/homeComponents/hero-section/hero-section.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeroSectionComponent, NavBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
