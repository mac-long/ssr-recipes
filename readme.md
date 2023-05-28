# Super Simple Recipes
















## Schema

### Newsletter Recipients

```
CREATE TABLE recipients (
  id serial primary key,
  name varchar,
  email varchar,
  createdOn timestamp default now()
);
```

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

### Main Recipe Table

```
CREATE TABLE recipes (
  id serial primary key,
  creationTime float,
  image json,
  createdOn timestamp default now()
);
```

### Recipe Translations Table

```
CREATE TABLE recipeTranslations (
  id serial primary key,
  recipeId int references recipes(id),
  languageCode varchar,
  title varchar,
  summary varchar,
  meal varchar,
  cuisine varchar,
  ingredients text[],
  instructions text[],
  unique (recipeId, languageCode)
);
```
