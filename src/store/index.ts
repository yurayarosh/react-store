import { configureStore } from '@reduxjs/toolkit'
import products from './slices/products'
import favoritesReducer from './slices/favorites'
import cartReducer from './slices/cart'
import popupReducer from './slices/popup'

export const store = configureStore({
  reducer: {
    products: products.productsReducer,
    singleProduct: products.singleProductReducer,
    categories: products.categoriesReducer,
    singleCategory: products.singleCategoryReducer,
    favorites: favoritesReducer,
    cart: cartReducer,
    popup: popupReducer,
    // posts: postsReducer,
    // comments: commentsReducer,
    // users: usersReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
