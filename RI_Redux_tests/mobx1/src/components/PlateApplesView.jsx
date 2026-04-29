import React from 'react';
import { observer } from "mobx-react"

// observer:
//  - отслеживает, что компонент обращается только к plateModel.apples, а не всей plateModel
//  - при изменениях plateModel.apples перерендеривает компонент
export const PlateApplesView = observer( ( { plateModel } ) => {
  
  console.log("PlateApplesView rerender, apples="+plateModel.apples);

  return (
      <div>There are {plateModel.apples} apples on the plate.</div>
  );

} );
