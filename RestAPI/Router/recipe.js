import express from "express";
import { addRecipe, deleteRecipe, getRecipe, updateRecipe } from "../Controllers/recipe.js";

export const RecipeRouter =express.Router();


RecipeRouter.post('/addrecipe',addRecipe);
RecipeRouter.get('/getrecipe',getRecipe);
RecipeRouter.put('/update/:id',updateRecipe)
RecipeRouter.delete('/delete/:id',deleteRecipe)