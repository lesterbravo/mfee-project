# Vue App

## Instructions

To start the development server you can run the following commands:

### `npm run start:vue`

## Plugins

This project is using the followings things:

https://getbootstrap.com/

https://github.com/avil13/vue-sweetalert2

https://vuelidate-next.netlify.app/

## Activities

### CategoryList
1. Create a new local variable called **categories** (you can use the same value that **categories** has of **posts/components/CategoriesList.vue**)
2. Use **v-for** in **CategoryList** to iterate the categories
3. Use **text interpolation** to display the values in the table

### CategoryForm
5. Create a new local object and use **v-model** in the form
   ```
   category: {
     _id: null,
     name: null,
   }
   ```
6. Create a new local variable called **action** assign **Create** as default value and use **text interpolation** to show it instead of "(Action)" of title modal.

### SignUpView
7. Create a new local object and use **v-model** in the form
 ```
   credentials: {
     username: null,
     password: null,
   }
   ```

### LoginView
8. Create a new local object and use **v-model** in the form
 ```
   newUser: {
     username: null,
     password: null,
     confirmPassword: null,
   },
   ```

### NewComment
9. Create a local variable for the new comment and use **v-model** for input

Note: You can test that the components are working redering them on **App.vue** and validating that the forms are correctly binding the data
