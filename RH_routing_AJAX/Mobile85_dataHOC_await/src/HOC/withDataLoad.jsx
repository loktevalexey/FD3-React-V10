// fetchConfig - конфигурация fetch-запроса для загрузки данных
// propName - в пропсе под каким именем передать загруженные данные компоненту Component
import {useState,useEffect} from "react";

const withDataLoad = (fetchConfig, propName) => Component => props => {

  const [isDataReady,setDataReady]=useState(false);
  const [loadedData,setLoadedData] = useState(undefined);

  useEffect(()=>{
    (async ()=>{
      try {
        const response = await fetch(fetchConfig.URL, fetchConfig);
        if (!response.ok) {
          throw new Error("fetch error " + response.status);
        }
        const data = await response.json();
        setLoadedData(data);
        setDataReady(true);
      }
      catch ( error ) {
        throw new Error("fetch error " + error);
      }
    })();
  },[]);

  if ( !isDataReady )
    return <div>загрузка данных...</div>;

  const mergedProps={
    ...props,
    [propName]:loadedData
  };
  /*
  это то же самое что и:
  const mergedProps={...props};
  mergedProps[propName]=loadedData;
  */
  return <Component {...mergedProps} /> ;
}

export { withDataLoad };
