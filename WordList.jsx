import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

const WordList = ({ words }) => {
  const [userAgent, setUserAgent] = useState(undefined)

  useEffect(() => setUserAgent(window.navigator.userAgent), [])

  return (
    <ul>
      {words.map(word => <li onClick={() => window.alert(word)} key={word}>{word}</li>)}
      <p>{userAgent}</p>
    </ul>
  )
}

export default connect(({ words }) => ({ words }))(WordList)
