import { useContext, useState } from "react";
import Input from "./Input";
import { InventoryContext } from "../contexts/InventoryContext";

function NewInventory({setToggleNewInventory}) {

    const [inputs, setInputs] = useState({ name: "", price: "", quantity: "" })
    const [errors, setErrors] = useState({ name: "", price: "", quantity: "" })
    const {saveInventory} = useContext(InventoryContext)

    const onInputChange = (name, value) => {
        setErrors(prev => {
            return { ...prev, [name]: "" }
        })
        setInputs(prev => {
            return { ...prev, [name]: value }
        });
    }

    const onSubmit = async () => {
        const newErrors = validateInputs(inputs);

        if (Object.keys(newErrors).length !== 0) {
            setErrors(prev => {
                return {...prev, ...newErrors}
            });
            return;
        }
        saveInventory(inputs)
        setToggleNewInventory(false)
    };

    return (
        <section className="grid place-items-center w-100 min-h-screen p-4 fixed top-0 left-0 bg-blur w-full z-20 shadow-box">
            <div className="w-full sm:w-2/3 lg:w-1/3 bg-white p-3 text-white my-shadow rounded" >
                <h1 className="text-xl mt-1 mb-3 pb-2 font-medium border-b border-b-slate-400 text-blue-500">
                    New Inventory
                </h1>

                <Input
                    label="Item name"
                    type="text"
                    placeholder="Apple MacBook Pro 17"
                    name="name"
                    value={inputs.name}
                    error={errors.name}
                    onChange={onInputChange}
                />

                <Input
                    label="Item price (LKR)"
                    type="text"
                    placeholder="150000"
                    name="price"
                    value={inputs.price}
                    error={errors.price}
                    onChange={onInputChange}
                />

                <Input
                    label="Quantity (pcs)"
                    type="text"
                    placeholder="100"
                    name="quantity"
                    value={inputs.quantity}
                    error={errors.quantity}
                    onChange={onInputChange}
                />

                <div className="text-right">
                    <button
                        className="bg-gray-400 hover:bg-gray-500 focus:ring-gray-700 text-white text-sm px-8 py-2 rounded focus:ring-2 mt-2 font-bold mr-2"
                        onClick={() => setToggleNewInventory(false)}
                    >
                        Cancel
                    </button>

                    <button
                        className="bg-blue-700 hover:bg-blue-800 focus:ring-blue-800 text-white text-sm px-8 py-2 rounded focus:ring-2 mt-2 font-bold"
                        onClick={onSubmit}
                    >
                        Save
                    </button>

                </div>




            </div>
        </section>
    )

}

export default NewInventory;


function validateInputs(inputs) {

    const { name, price, quantity } = inputs;

    let errors = {};

    if (name.trim() === "") {
        errors.name = "Item name is required!"
    }
    if (price.trim() === "") {
        errors.price = "Price is required!"
    }else if(/[^0-9.]/g.test(price)) {
        errors.price = "Invalid value for price!"
    }

    if (quantity.trim() === "") {
        errors.quantity = "Quantity is required!"
    }else if(/[^0-9]/g.test(quantity)) {
        errors.quantity = "Invalid value for quantity!"
    }
    return errors;

}