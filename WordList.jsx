import React, { useEffect, useState } from 'react'

const words = [
  'heirloom',
  'lefta',
  'pants',
  'agape',
  'yield',
  'middling',
  'slope',
  'catch',
  'engraft-parakeet',
]

const WordList = () => {
  const [userAgent, setUserAgent] = useState(undefined)

  useEffect(() => setUserAgent(window.navigator.userAgent), [])

  return (
    <ul>
      {words.map(word => <li onClick={() => window.alert(word)} key={word}>{word}</li>)}
      <p>{userAgent}</p>
    </ul>
  )
}

export default WordList
