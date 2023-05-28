import { createKysely } from "@vercel/postgres-kysely";
import { ColumnType, Generated } from "kysely";
import { sql } from "kysely";

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
const { countAll } = db.fn;

export const getRecipeCount = () =>
	db.selectFrom("recipe").select(countAll().as("num_recipes")).execute();

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

export const getLatestRecipes = (locale: string) =>
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
		.limit(3)
		.execute();

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

export const getAllFilters = async (locale: string) => {
	const res = await db
		.selectFrom("recipe_translation")
		.select(["cuisine", "meal"])
		.distinct()
		.where("recipe_translation.language_code", "=", locale)
		.execute();

	const meals: string[] = [];
	const cuisines: string[] = [];

	res.forEach((row) => {
		meals.push(row.meal);
		cuisines.push(row.cuisine);
	});

	return { meals, cuisines };
};
