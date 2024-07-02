import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { API_BASE_URL } from "./api-service/ApiConfig"

function App() {

  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const fetchMessage = async () => {
    await axios
      .get(`${API_BASE_URL}/home`)
      .then(response => {
        console.log(response)
        setMessage(response.data)
      })
      .catch((error) => {
        console.log(error)
        setError(true)
      })

    setLoading(false)
  }

  useEffect(() => {
    fetchMessage()
  }, [])

  return (
    <section className="grid place-items-center p-2 min-h-screen bg-blue-900 text-white">
      {
        loading ? <p>Loading...</p> :
        error ? <p>Unable to fetch message!</p> :
        <p>{message}</p>
      }
    </section>
  )
}

export default App