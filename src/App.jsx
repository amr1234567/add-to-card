
import { useSelector } from "react-redux"
import ButtonFlow from "./components/button-flow/ButtonFlow"
import NavBar from "./components/navbar/NavBar"
import ProductsContainer from "./components/products/ProductsContainer"
function App() {
  const canCheckOut = useSelector(state => state.cards.isEmpty)
  return (
    <>
      <NavBar />
      <ProductsContainer />
      {!canCheckOut && <ButtonFlow />}
    </>
  )
}

export default App





