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
  </ul>
)

export default WordList
