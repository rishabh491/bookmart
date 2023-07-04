import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
  const { state } = useLocation();

  return (
    <main>
      { state.status ? <OrderSuccess state={state} /> : <OrderFail /> }
    </main>
  )
}
