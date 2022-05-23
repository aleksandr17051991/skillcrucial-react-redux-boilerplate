import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'
// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [counter, setCounterNew] = useState(0)
  const { planetId } = useParams()
  return (
    <div>
      <Head title="Dashboard" />
      <img alt="wave" src="images/wave.jpg" />
      <button type="button" onClick={() => setCounterNew(counter + 1)}>
        updateCounter
      </button>
      <div> Hello World Dashboard {counter} </div>

      {/* Added new router link (week11 React-Router) */}
      <div className="text-center border shadow-lg p-5 font-bold bg-indigo-800">
        <Link to="/">GO TO HOMEPAGE BOILERPLATE</Link>
      </div>
      {/* отображается не корректно после ввода номера планеты фото исчезает */}
      <div className="font-bold bg-indigo-200">
        <Link to="/planet/">ID:{planetId}</Link>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default Home
