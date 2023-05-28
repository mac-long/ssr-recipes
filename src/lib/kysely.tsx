import { createKysely } from "@vercel/postgres-kysely";
import { ColumnType, Generated } from "kysely";

interface RecipientTable {
	id: Generated<number>;
	name: string;
	email: string;
	email_verified: true;
}

interface RecipeTable {
	id: Generated<number>;
	creation_time: number;
	image: {
		url: string;
		photographer?: {
			name: string;
			url: string;
		};
	};
	created_on: ColumnType<Date, string | undefined, never>;
}

interface RecipeTranslationTable {
	id: Generated<number>;
	recipe_id: number;
	language_code: string;
	title: string;
	summary: string;
	meal: string;
	cuisine: string;
	ingredients: string[];
	instructions: string[];
}

export interface Database {
	recipient: RecipientTable;
	recipe: RecipeTable;
	recipe_translation: RecipeTranslationTable;
}

const db = createKysely<Database>();

export const getRecipeById = (id: number, locale: string) =>
	db
		.selectFrom("recipe")
		.innerJoin(
			"recipe_translation",
			"recipe_translation.recipe_id",
			"recipe.id"
		)
		.select([
			"id",
			"recipe_translation.meal as meal",
			"recipe_translation.title as title",
			"recipe_translation.summary as summary",
			"recipe_translation.ingredients as ingredients",
			"creation_time",
			"recipe_translation.instructions as instructions",
			"image"
		])
		.where("recipe.id", "=", id)
		.where("recipe_translation.language_code", "=", locale)
		.executeTakeFirst();

export const getAllRecipes = (locale: string) =>
	db
		.selectFrom("recipe")
		.innerJoin(
			"recipe_translation",
			"recipe_translation.recipe_id",
			"recipe.id"
		)
		.select([
			"recipe.id",
			"recipe_translation.meal as meal",
			"recipe_translation.cuisine as cuisine",
			"recipe_translation.title as title",
			"recipe_translation.summary as summary",
			"recipe_translation.ingredients as ingredients",
			"recipe.created_on"
		])
		.where("recipe_translation.language_code", "=", locale)
		.execute();
