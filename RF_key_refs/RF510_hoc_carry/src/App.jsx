import VotesBlock from './components/VotesBlock.jsx';

const questionText='Как вы относитесь к программированию?';

import answersArr from './answers.json';

const defaultFreeAnswerText="???";

function App() {
  return (
    <VotesBlock 
      question={questionText}
      answers={answersArr}
      deffreeanswertext={defaultFreeAnswerText}
      startWorkMode={1}
    />
  );
}

export default App;
