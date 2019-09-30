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

const WordList = () => `
<ul>
  ${words.map(word => `<li>${word}</li>`).join('')}
</ul>
`

export default WordList
