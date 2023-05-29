import { createKysely } from "@vercel/postgres-kysely";
import { Generated } from "kysely";
import { sql } from "kysely";

export {
	sql,
	db,
	newRecipe,
	getRecipeCount,
	getRecipeFilters,
	getRecipeById,
	getAllRecipes,
	getLatestRecipes,
	getRecipesByMeal,
	newEmailRecipient,
	getAllEmailRecipients,
	deleteEmailRecipient
};

interface RecipientTable {
	id: Generated<number>;
	name: string;
	email: string;
	email_verified: boolean;
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
	created_on: Generated<Date>;
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

const newRecipe = async (
	recipe: Omit<RecipeTable, "id" | "created_on">,
	translations: Omit<RecipeTranslationTable, "id" | "recipe_id">[]
) => {
	try {
		const { id } = await db
			.insertInto("recipe")
			.values(recipe)
			.returning("id")
			.executeTakeFirst();

		return;

		// const translationInsertions = translations.map((translation) => ({
		// 	...translation,
		// 	recipe_id: recipe_id
		// }));

		// await db
		// 	.insertInto("recipe_translation")
		// 	.values(translationInsertions)
		// 	.executeTakeFirst();
	} catch (error) {
		console.error(error);
	}
};

const getRecipeCount = () =>
	db.selectFrom("recipe").select(countAll().as("num_recipes")).execute();

const getRecipeFilters = async (locale: string) => {
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

const getRecipeById = (id: number, locale: string) =>
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

const getLatestRecipes = (locale: string) =>
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

const getRecipesByMeal = (meal: string) =>
	db
		.selectFrom("recipe")
		.innerJoin(
			"recipe_translation",
			"recipe_translation.recipe_id",
			"recipe.id"
		)
		.selectAll()
		.where("meal", "=", meal)
		.orderBy("created_on")
		.execute();

const getAllRecipes = (locale: string) =>
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
			"recipe_translation.instructions as instructions",
			"recipe.created_on"
		])
		.where("recipe_translation.language_code", "=", locale)
		.execute();

const newEmailRecipient = async (data) => {
	try {
		db.insertInto("recipient").values(data).executeTakeFirst();
	} catch (error) {
		throw new Error(error);
	}
};

const getAllEmailRecipients = () =>
	db.selectFrom("recipient").select(["name", "email"]).execute();

const deleteEmailRecipient = (id: number) =>
	db.deleteFrom("recipient").where("id", "=", id);