import MobileCompany from './components/MobileCompany';

const companyName='A1';
const clientsArr=[
  {id:101, fio:"Иванов И.И.", balance:200},
  {id:105, fio:"Сидоров С.С.", balance:250},
  {id:110, fio:"Петров П.П.", balance:180},
  {id:120, fio:"Григорьев Г.Г.", balance:220},
];

function App() {
  return (
      <MobileCompany
          name={companyName}
          clients={clientsArr}
      />
  );
}

export default App;
