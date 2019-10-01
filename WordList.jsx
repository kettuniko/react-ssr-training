import React from 'react'

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

const WordList = () => (
  <ul>
    {words.map(word => <li onClick={() => window.alert(word)} key={word}>{word}</li>)}
    <p>{window.navigator.userAgent}</p>
  </ul>
)

export default WordList
