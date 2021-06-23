import React from 'react';

function AssociationList({ entry = '', associations = [] }) {
  return (
    <div className="synonym">
      <h4>{entry}</h4>
      <ul>
        {associations.map((assoc, i) => {
          return (
            <li key={i}>{assoc}</li>
          );
        })}
      </ul>
    </div>
  )
}

export default AssociationList;
