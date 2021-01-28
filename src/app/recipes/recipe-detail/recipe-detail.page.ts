import { Recipe } from './../recipes.model';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
	selector: 'app-recipe-detail',
	templateUrl: './recipe-detail.page.html',
	styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
	loadedRecipe: Recipe;

	constructor(
		private activatedRoute: ActivatedRoute,
		private recipesService: RecipesService,
		private router: Router,
		private alertCtrl: AlertController
	) {}

	ngOnInit() {
		this.activatedRoute.paramMap.subscribe((paramMap) => {
			const recipeId = paramMap.get('recipeId');
			this.loadedRecipe = this.recipesService.getRecipe(recipeId);
			console.log(this.loadedRecipe);
		});
	}

	onDeleteRecipe() {
		this.alertCtrl
			.create({
				header: 'Are you sure?',
				message: 'Do you really want to delete?',
				buttons: [
					{
						text: 'Cancel',
						role: 'cancel',
					},
					{
						text: 'Delete',
						handler: () => {
							this.recipesService.deleteRecipe(this.loadedRecipe?.id);
							this.router.navigate(['/recipes']);
							console.log('button clicked');
						},
					},
				],
			})
			.then((alertEl) => {
				alertEl.present();
			});
	}

	// onDeleteRecipe() {
	// 	console.log('button clicked');
	// }
}
