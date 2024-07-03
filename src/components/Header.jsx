function Header({setToggleNewInventory}) {
    

    return (
        <div className="bg-blue-900 w-full pt-4 pb-2 border-b-2 border-gray-500 flex items-center px-20">

            <h1
                className="text-blue-100 text-lg md:text-2xl md:font-bold text-left flex-1 capitalize"
            >
                Inventory App
            </h1>

            <div
                className="bg-blue-200 rounded text-blue-900 cursor-pointer hover:bg-blue-300 px-10 py-1"
                onClick={() => setToggleNewInventory(true)}
            >
                New 
            </div>

        </div>
    )
}

export default Header;