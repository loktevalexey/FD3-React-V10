import React from 'react';
import { observer } from "mobx-react"

// observer:
//  - отслеживает, что компонент обращается только к plateModel.pears, а не всей plateModel
//  - при изменениях plateModel.pears перерендеривает компонент
export const PlatePearsView = observer( ( { plateModel } ) => {
  
  console.log("PlatePearsView rerender, pears="+plateModel.pears);

  return (
    <div>There are {plateModel.pears} pears on the plate.</div>
  );

} );
