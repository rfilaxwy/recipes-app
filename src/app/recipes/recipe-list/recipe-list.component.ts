import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.scss"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A test recipe",
      "Simple test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTUuqdTj0Ei2IsEHBYMMyqK866YU7M8Milb3iIxbsLSvo6lJ2bd"
    )
  ];
  constructor() {}

  ngOnInit(): void {}
}
