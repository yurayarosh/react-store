import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  CategoriesResponceData,
  CategoriesState,
  ProductsResponceData,
  ProductsState,
  SingleCategoryResponceData,
  SingleCategoryState,
  SingleProductResponceData,
  SingleProductState,
} from '../types/products'
import {
  fetchCategories,
  fetchCategory,
  fetchProducts,
  fetchSingleProduct,
} from './productsActions'

const initialState: ProductsState = {
  isLoading: true,
  products: null,
}

const initialSingleProductState: SingleProductState = {
  isLoading: true,
  product: null,
}

const initialCategoriesState: CategoriesState = {
  isLoading: true,
  categories: null,
}

const initialSingleCategoryState: SingleCategoryState = {
  isLoading: true,
  category: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProducts.pending.type]: state => {
      state.isLoading = true
    },
    [fetchProducts.fulfilled.type]: (state, action: PayloadAction<ProductsResponceData>) => {
      state.isLoading = false
      state.products = action.payload
    },
    [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: initialSingleProductState,
  reducers: {},
  extraReducers: {
    [fetchSingleProduct.pending.type]: state => {
      state.isLoading = true
    },
    [fetchSingleProduct.fulfilled.type]: (
      state,
      action: PayloadAction<SingleProductResponceData>
    ) => {
      state.isLoading = false
      state.product = action.payload
    },
    [fetchSingleProduct.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: initialCategoriesState,
  reducers: {},
  extraReducers: {
    [fetchCategories.pending.type]: state => {
      state.isLoading = true
    },
    [fetchCategories.fulfilled.type]: (state, action: PayloadAction<CategoriesResponceData>) => {
      state.isLoading = false
      state.categories = action.payload
    },
    [fetchCategories.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const singleCategorySlice = createSlice({
  name: 'singleCategory',
  initialState: initialSingleCategoryState,
  reducers: {},
  extraReducers: {
    [fetchCategory.pending.type]: state => {
      state.isLoading = true
    },
    [fetchCategory.fulfilled.type]: (state, action: PayloadAction<SingleCategoryResponceData>) => {
      state.isLoading = false
      state.category = action.payload
    },
    [fetchCategory.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default {
  productsReducer: productsSlice.reducer,
  singleProductReducer: singleProductSlice.reducer,
  categoriesReducer: categoriesSlice.reducer,
  singleCategoryReducer: singleCategorySlice.reducer,
}
