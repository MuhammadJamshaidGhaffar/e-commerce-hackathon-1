'use client'
import { CartItem, Product, ProductRequired, products, sizesType } from "@/data/products";


export function getAllItemsFromCart():CartItem[] {
    let cart : CartItem[] = [];
    const jsonCart = sessionStorage.getItem('cart');
    if(jsonCart)
      cart = JSON.parse(jsonCart);
    return cart;
  }

export function findItemInCart(id : string , size?: sizesType):CartItem | undefined{
    const cart = getAllItemsFromCart();
    if(size != undefined){
        const cartItem = cart.find((item)=> item.id == id && item.size == size);
        return cartItem;
    }
    else{
        const cartItem = cart.find((item)=> item.id == id);
        return cartItem;
    }

}

export function addItemToCart(cartItem : CartItem){
    // getting all items from cart
    const cart : CartItem[] = getAllItemsFromCart();
    // checking if cart item already exists
    const itemIndex = cart.findIndex((item)=> item.id == cartItem.id && item.size == cartItem.size);
    if(itemIndex != -1)
    {
      cart[itemIndex].quantity += cartItem.quantity;
    }
    else
      cart.push(cartItem);
    sessionStorage.setItem('cart' , JSON.stringify(cart));
  }

  export function convertCartToCartProducts(cart:CartItem[]):ProductRequired[]{
    const cartProducts : ProductRequired[] = [];
    cart.forEach(cartItem => {
        
        const product : Product | undefined = products.find((p)=>p.id == cartItem.id);
        if(product){
            const cartProduct : ProductRequired = {...product , quantity:cartItem.quantity , size:cartItem.size}
            cartProducts.push(cartProduct);
        }
    });
    return cartProducts;
  }

  // danger function
  export function saveCart(cart:CartItem[]){
    sessionStorage.setItem('cart' , JSON.stringify(cart));
  }

  