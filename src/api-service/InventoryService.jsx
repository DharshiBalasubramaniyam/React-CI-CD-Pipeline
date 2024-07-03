import { useEffect, useState } from "react";
import { InventoryContext } from "../contexts/InventoryContext";
import { API_BASE_URL } from "./ApiConfig";
import toast from "react-hot-toast";
import axios from "axios";

function InventoryService() {

    const [InventoryList, setInventoryList] = useState(null)
    const [loading, setLoading] = useState(false)
    const [Inventory, setInventory] = useState(null)

    const fetchAllInventorys = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${API_BASE_URL}/inventory/all`);
            console.log(response)
            setInventoryList(response.data.response)
        } catch (error) {
            console.log(error)
            toast.error("Unable to process your request now. Please try again later!")
        } finally {
            setLoading(false)
        }
    }

    const fetchInventory = async (InventoryId) => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/inventory/${InventoryId}`);
            setInventory(response.data.response)
        } catch (error) {
            console.log(error)
            toast.error("Unable to process your request now. Please try again later!")
        } finally {
            setLoading(false)
        }
    }

    const saveInventory = async ({name, price, quantity}) => {
        setLoading(true);
        try {
            const response = await axios.post(`${API_BASE_URL}/inventory/`, {itemName: name, price: price, quantity: quantity});
        } catch (error) {
            toast.error("Unable to process your request now. Please try again later!");
        } finally {
            fetchAllInventorys()
        }
    }

    const editInventory = async (InventoryId, name, price, quantity) => {
        setLoading(true);
        try {
            const response = await axios.put(`${API_BASE_URL}/inventory/`, 
                {itemName: name, price: price, quantity: quantity},
                {
                    params: {
                        inventoryId: InventoryId
                    }
                }
            );
        } catch (error) {
            console.log(error);
            toast.error("Unable to process your request now. Please try again later!");
        } finally {
            setInventory(null)
            fetchAllInventorys()
        }
    }

    const deleteInventory = async (InventoryId) => {
        setLoading(true);
        try {
            const response = await axios.delete(`${API_BASE_URL}/inventory/`, {
                params: {
                    inventoryId: InventoryId
                }
            });
        } catch (error) {
            console.log(error);
            toast.error("Unable to process your request now. Please try again later!");
        } finally {
            fetchAllInventorys()
        }
    }

    useEffect(() => {
        fetchAllInventorys()
    }, [])


    return {
        InventoryList, Inventory, loading, fetchAllInventorys, fetchInventory, saveInventory, editInventory, deleteInventory
    }

   
}

function InventoryWrapper({ children }) {
    const { InventoryList, Inventory, loading, fetchAllInventorys, fetchInventory, saveInventory, editInventory, deleteInventory } = InventoryService()

    return (
        <InventoryContext.Provider
            value={{
                InventoryList, Inventory, loading, fetchAllInventorys, fetchInventory, saveInventory, editInventory, deleteInventory
            }}
        >
            {children}
        </InventoryContext.Provider>
    )
}

export default InventoryWrapper;