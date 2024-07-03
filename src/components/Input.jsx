function Input({label, type, name, placeholder, value, error, onChange}) {

    return (
        <div className="mb-3">
            <label 
                className="block mb-1 text-sm text-blue-900"
            >{label}</label>
            <input 
                type={type}
                name={name}
                className="w-full px-3 py-2 bg-transparent rounded outline-none border-2 border-gray-300 focus:border-blue-500 text-sm text-blue-950"
                placeholder={placeholder} 
                value={value}
                onChange={(e) => onChange(e.target.name, e.target.value)}
            />
            <small 
                className="text-red-700"
            >{error}</small>
        </div>
    )
}

export default Input;