import VotesBlock from './components/VotesBlock.jsx';

const questionText='Как вы относитесь к программированию?';

import answersArr from './answers.json';

function App() {
  return (
    <VotesBlock 
      question={questionText}
      answers={answersArr}
    />
  )
}

export default App
