import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
	providedIn: 'root',
})
export class RecipesService {
	private recipes: Recipe[] = [
		{
			id: 'r1',
			title: 'sausage',
			imageUrl:
				'https://www.ctvnews.ca/polopoly_fs/1.4755942.1578367498!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg',
			ingredients: ['french fries', 'pork', 'salad'],
		},
		{
			id: 'r6',
			title: 'bacon',
			imageUrl:
				'https://www.cdc.gov/foodsafety/images/comms/food-Safety-Tips-small.jpg',
			ingredients: ['french fries', 'ionic', 'beef'],
		},
	];
	constructor() {}

	getAllRecipes() {
		return [...this.recipes];
	}

	getRecipe(recipeId: string) {
		return {
			...this.recipes.find((recipe) => {
				return recipe.id === recipeId;
			}),
		};
	}

	deleteRecipe(recipeId: string) {
		this.recipes = this.recipes.filter((recipe) => {
			return recipe.id !== recipeId;
		});
	}
}
