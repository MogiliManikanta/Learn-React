import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Cart</h1>
      <h2 className="text-xl text-gray-600 mb-6">
        {cartItems.length > 0
          ? `You have ${cartItems.length} item(s) in your cart.`
          : "Your cart is empty."}
      </h2>
      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        onClick={handleClearCart}
      >
        clearCart
      </button>

      {cartItems.length > 0 ? (
        <div className=" text-center bg-white shadow-lg rounded-lg p-6 w-6/12 m-auto">
          <ItemList items={cartItems} />
        </div>
      ) : (
        <p className="text-gray-500">
          Looks like you haven't added anything yet.
        </p>
      )}

      <button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
        onClick={() => console.log("Proceed to checkout")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
