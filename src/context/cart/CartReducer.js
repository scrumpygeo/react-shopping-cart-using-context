import { SHOW_HIDE_CART, ADD_TO_CART, REMOVE_ITEM, CLEAR_CART } from '../types'

const cartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      }
    }
    case ADD_TO_CART: {
      const item = action.payload
      const updatedCart = [...state.cartItems]
      const updatedItemIndex = updatedCart.findIndex((x) => x.id === item.id)
      console.log(updatedItemIndex)

      // if item not already in cart, add it and set qyt to  1
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...item, qty: 1 })
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        }
        updatedItem.qty++
        updatedCart[updatedItemIndex] = updatedItem
      }

      return { ...state, cartItems: updatedCart }
    }
    case REMOVE_ITEM: {
      const item = action.payload

      const updatedCart = [...state.cartItems]
      const updatedItemIndex = updatedCart.findIndex((x) => x.id === item)
      // console.log(updatedItemIndex)

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      }

      updatedItem.qty--

      if (updatedItem.qty <= 0) {
        updatedCart.splice(updatedItemIndex, 1)
      } else {
        updatedCart[updatedItemIndex] = updatedItem
      }

      return { ...state, cartItems: updatedCart }
    }

    case CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      }
    }

    default: {
      throw new Error(`unknown action ${action.type}`)
    }
  }
}

export default cartReducer
