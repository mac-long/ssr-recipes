# Super Simple Recipes








## Schema

### Site Users

```
CREATE TABLE users (
  id serial primary key,
  firstName varchar,
  lastName varchar,
  email varchar not null unique,
  createdOn timestamp default now()
);
```

### Users Favourite Recipes

```
CREATE TABLE userFavouriteRecipes (
  userId int references users(id),
  recipeId int references recipes(id),
  primary key (userId, recipeId)
);
```