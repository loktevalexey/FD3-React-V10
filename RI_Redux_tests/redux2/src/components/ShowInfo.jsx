import { useSelector } from 'react-redux';

export const ShowInfo = () => {

  // берём весь раздел fruits, так тоже можно
  const fruits = useSelector( state => state.fruits );
  // мы можем получить state.fruits.apples и state.fruits.apples отдельно двумя useSelector,
  // но это немного медленнее и более громоздко

  const profile = useSelector( state => state.profile );

  // а так плохо - возвращается всегда НОВЫЙ объект,
  // а то есть, компонент перерендеривается по каждому поводу
  // const onlyMyData = useSelector( state => { 
  //   return {apples:state.fruits.apples,firstname:state.profile.firstname} 
  // } );

  return (
    <>
      <div>Apples: {fruits.apples}</div>
      <div>Pears: {fruits.pears}</div>
      <div>
        Profile: {profile.surname} {profile.firstname}
      </div>
    </>
  );

}
