import React, { useState, useEffect } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])
  // console.log(data)
  const handleSubmit = (e) => {
    e.preventDefault()
    let amount = parseInt(count)

    if (count < 0) {
      setText(data.slice(0, 1))
    }
    if (count === 10) {
      setText(data)
    } else {
      setText(data.slice(0, amount))
    }
    console.log(amount)
  }
  useEffect(() => {
    if (count > 10) {
      setCount(10)
    }
    if (count < 0) {
      setCount(0)
    }
  }, [count])

  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App