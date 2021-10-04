import React, { useState } from 'react';
import Nav from './components/Nav';
import ItemListContainer from './pages/ItemListContainer';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShoppingCart from './pages/ShoppingCart';
import { initialState } from './assets/state';

function App() {

  const [items, setItems] = useState(initialState.items);
  const [cartItems, setCartItems] = useState(initialState.cartItems);

  // 지금 items는 state.js에 있는 initialState.items를 받아왔다

  // 지금 cartItems는 state.js에 있는 initialState.cartItems를 받아왔다
  // 상품 리스트에서 선택한 아이템이 장바구니에 들어오게 된다 -> 그렇다는 것은 items가 cartIems에 들어오게 된다
  // 하지만 장바구니 리스트에 똑같은 아이템이 있다면 그 아이템의 주문 개수만 늘어난다
  // 만약 없다면 장바구니 리스트에 추가가 되고 nav 개수가 증가 된다
  // 즉 길이가 증가된다
  // 즉, setCartItems에 새로운 아이템이 추가된 카트아이템리스트 배열을 나타내던가 아니면 개수만 추가된 배열을 리턴해준다

  const removeFromCart = (itemId)=>{
    setCartItems(cartItems.filter(el => el.itemId !== itemId))
  }

  const handleAddItem = (e, item) => {
    const found = cartItems.filter(el => el.itemId === item.id)[0]; // 인자로 받은 itemId의 상품이 이미 cartItems에 있으면 그 상품을 found에 할당
    if (found) {
      console.log('또 왔니?')
      changeQuantity(found.itemId, found.quantity);

    } else {
      console.log('처음이니?')
      // setCount(count + 1);
      setCartItems([...cartItems, { itemId: item.id, quantity: 1 }])
    }
  }

  // const handleAddItem = (e, item) => {
  //   setCartItems([...cartItems, {
  //     itemId: item.id,
  //     quantity: 1
  //   }])
  // }

  const changeQuantity = ( quantity, itemId ) => {  // 장바구니에서 선택한 아이템의 아이디와 수량을 입력 받음
    let result = [];
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].itemId !== itemId) {
        result.push(cartItems[i]);
      } else {
        // 찾고자 하는 id와 itemId가 같으면
        result.push({ itemId, quantity }); // 객체 구조 분해 할당 -> 동일한 key의 value를 업데이트(업데이트 하려는 value로 변경)
      }
    }
    setCartItems(result);

  //   const newCartItems = [...cartItems];
  //   for(let el of newCartItems){
  //     if(el.itemId === itemId){
  //       el.quantity = quantity;
  //     }
  //   }
  //   setCartItems(newCartItems)
  }

  return (
    <Router>
      <Nav cartItems={cartItems} />
      <Switch>
        <Route exact={true} path="/">
          <ItemListContainer items={items} handleCount={handleAddItem} />
        </Route>
        <Route path="/shoppingcart">
          <ShoppingCart cartItems={cartItems} items={items} handleDelete={removeFromCart} handleChangeQuantity={changeQuantity} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
