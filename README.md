# BASE SKELETON

## Scripts

- Dev start

```
yarn dev
```

- Generate migration file according to `.model.ts` files

```
yarn migration:generate
```

- Create empty migration file

```
yarn migration:create
```

- Migration up

```
yarn migration:up
```

- Migration down

```
yarn migration:down
```

## Folder Structure

- enums
  - Here are the common application enums
- framework
  - Here are the files thats build the application framework
- migrations
  - Here are the generated & created migration files
- typegraphql
  - Here are the typegraphql entities with models and resolvers. To create new entities follow the below steps:
    - Create a new folder with the new entity name
    - Create an `entity-name.model.ts` & `entity-name.resolver.ts` file into the new folder
    - Export the class from the `entity-name.model.ts` file and import into the `entities.ts`
    - Export the resolver factory function from the `entity-name.resolver.ts` file and import into the `resolvers.ts`
- use-cases
  - Here are the use cases for each entities. To create new use cases for an entity follow the below steps:
    - Create a new folder with the entity name
    - Create use case files with `use-case-name.use-case.ts` name
    - Export the use case factories and import into the `use-cases.ts` file
