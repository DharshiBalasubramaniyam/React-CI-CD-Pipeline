import { useState } from "react"
import Header from "./components/Header"
import InventoryTable from "./components/InventoryTable"
import NewInventory from "./components/NewInventory"
import EditInventory from "./components/EditInventory"
import InventoryWrapper from "./api-service/InventoryService"

function App() {


  const [toggleNewInventory, setToggleNewInventory] = useState(false)
  const [toggleEditInventory, setToggleEditInventory] = useState(false)

  return (
    <InventoryWrapper>
      <Header setToggleNewInventory={setToggleNewInventory}/>
      <InventoryTable setToggleEditInventory={setToggleEditInventory}/>
      {toggleNewInventory && <NewInventory setToggleNewInventory={setToggleNewInventory}/>}
      {toggleEditInventory && <EditInventory setToggleEditInventory={setToggleEditInventory}/>}
    </InventoryWrapper>
  )
}

export default App;