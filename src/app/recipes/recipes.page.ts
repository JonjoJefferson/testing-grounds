import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  constructor() {}
  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'sausage',
      imageUrl: 'https://www.ctvnews.ca/polopoly_fs/1.4755942.1578367498!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg',
      ingredients: ['french fries', 'pork', 'salad'],
    },
    {
      id: 'r6',
      title: 'bacon',
      imageUrl: 'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
      ingredients: ['french fries', 'ionic', 'beef'],
    },
  ];
  ngOnInit() {}
}
