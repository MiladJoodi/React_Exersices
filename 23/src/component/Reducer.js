const Reducer = (cart = [], action) => {
  if (action.type === "ADD") {
    let tempcart = cart.filter((item) => item.id === action.payload.id);
    if (tempcart < 1) {
      return [...cart, action.payload];
    } else {
      alert("در سبد خرید موجود است");
      return cart;
    }
  }
  if (action.type === "REMOVE") {
    return cart.filter((item) => item.id !== action.payload.id);
  }
  if (action.type === "INCREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return {...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return tempcart;
  }
  if (action.type === "DECREASE") {
    let tempcart = cart.map((item) => {
      if (item.id === action.payload.id) {
        return {...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    return tempcart;
  }
  return cart;
};

export default Reducer;
