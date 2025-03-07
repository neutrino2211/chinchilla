import { useEffect, useState } from 'hono/jsx'
import { client } from '../api-client'

export default function Counter() {
  const [count, setCount] = useState(0)
  
  const setApiCount = async () => {
    const res = await fetch('http://localhost:8090/api/count', {
      method: 'POST',
      body: JSON.stringify({ count: count })
    })
    const { count: newCount } = await res.json<{ count: number }>()
    console.log(newCount)
  }

  const getApiCount = async () => {
    const res = await fetch('http://localhost:8090/api/count', {
      method: 'GET',
    })
    const { count: newCount } = await res.json<{ count: number }>()
    console.log(newCount)
    setCount(newCount)
  }
  
  useEffect(() => {
    setApiCount()
  }, [count])

  useEffect(() => {
    getApiCount()
  }, [])

  return (
    <div>
      <p class="py-2 text-2xl">{count}</p>
      <button
        class="px-4 py-2 bg-orange-400 text-white rounded cursor-pointer"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}
