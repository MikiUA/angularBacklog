import { Component } from '@angular/core';
import { Tag, availibleTags } from '../services/TagType';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent {
  topLevelTags: Tag[] = [1, 2, 4, 5, 6, 7].map(value => availibleTags[value]);
}
