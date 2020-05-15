import { createSlice } from '@reduxjs/toolkit'

const productData = [
  { id: 1, title: 'Socks', price: 100, emoji: '🧦' },
  { id: 2, title: 'T-shirt', price: 200, emoji: '👕' },
  { id: 3, title: 'Pants', price: 300, emoji: '👖' },
  { id: 4, title: 'Dress', price: 400, emoji: '👗' },
  { id: 5, title: 'Shoes', price: 500, emoji: '👢' },
  { id: 6, title: 'Socks', price: 100, emoji: '🧦' },
  { id: 7, title: 'T-shirt', price: 200, emoji: '👕' },
  { id: 8, title: 'Pants', price: 300, emoji: '👖' },
  { id: 9, title: 'Dress', price: 400, emoji: '👗' },
  { id: 10, title: 'Shoes', price: 500, emoji: '👢' },
]

export const products = createSlice({
  name: 'products',
  initialState: productData
})