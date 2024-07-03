import { useContext } from "react";
import { InventoryContext } from "../contexts/InventoryContext";

function InventoryTable({ setToggleEditInventory }) {

    const { InventoryList, fetchInventory, deleteInventory } = useContext(InventoryContext)


    return (
        <div class="relative overflow-x-auto mx-20 my-10">
            <table class="w-full text-sm text-left rtl:text-right text-blue-500">
                <thead class="text-xs text-white uppercase bg-blue-50 dark:bg-blue-700">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Item name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Unit price (LKR)
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Action
                        </th>

                    </tr>
                </thead>
                <tbody>

                    {
                        InventoryList?.map((item) => {
                            return (

                                <tr class="border-b bg-blue-800 dark:border-blue-700 text-white" key={item.itemId}>
                                    <th scope="row" class="px-6 py-4 font-medium text-blue-900 whitespace-nowrap dark:text-white">
                                        {item.itemName}
                                    </th>
                                    <td class="px-6 py-4">
                                        {item.price}
                                    </td>
                                    <td class="px-6 py-4">
                                        {item.quantity}
                                    </td>
                                    {
                                        item.quantity > 0 ? (
                                            <td class="px-6 py-4 text-green-300">
                                                In Stock
                                            </td>
                                        ) : (
                                            <td class="px-6 py-4 text-red-300">
                                                Out of Stock
                                            </td>
                                        )
                                    }

                                    <th scope="col" class="px-6 py-3">
                                        <button
                                            className="bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-700 text-white text-sm px-8 py-2 rounded focus:ring-2 mt-2 font-bold mr-2"
                                            onClick={() => {
                                                setToggleEditInventory(true);
                                                fetchInventory(item.itemId)
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-400 hover:bg-red-500 focus:ring-red-700 text-white text-sm px-8 py-2 rounded focus:ring-2 mt-2 font-bold mr-2"
                                            onClick={() => {
                                                deleteInventory(item.itemId)
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </th>
                                </tr>

                            )
                        })
                    }



                </tbody>
            </table>

            {
                (!InventoryList || InventoryList?.length === 0) && <p className="text-center mt-20">No items found!</p>
            }
        </div>

    )
}


export default InventoryTable;


