import { createKysely } from "@vercel/postgres-kysely";
import { ColumnType, Generated } from "kysely";

interface RecipientTable {
	id: Generated<number>;
	name: string;
	email: string;
	emailVerified: true;
	createdOn: ColumnType<Date, string | undefined, never>;
}

interface RecipeTable {
	id: Generated<number>;
	creationTime: number;
	image: {
		url: string;
		photographer?: {
			name: string;
			url: string;
		};
	};
	createdOn: ColumnType<Date, string | undefined, never>;
}

interface RecipeTranslationTable {
	id: Generated<number>;
	recipeId: string;
	languageCode: string;
	title: string;
	summary: string;
	meal: string;
	cuisine: string;
	ingredients: string[];
	instructions: string[];
	createdOn: ColumnType<Date, string | undefined, never>;
}

interface Database {
	recipient: RecipientTable;
	recipe: RecipeTable;
	recipeTranslation: RecipeTranslationTable;
}

const db = createKysely<Database>();

export const allRecipes = db
	.selectFrom("recipe")
	.innerJoin("recipeTranslation", "recipeTranslation.recipeId", "recipe.id")
	.select(["id", "title"])
	.execute();
