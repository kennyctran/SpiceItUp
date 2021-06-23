import React from 'react';

function AssociationList({ entry = '', associations = [] }) {
  return (
    <>
      <h6>{entry}</h6>
      <ul>
        {associations.map((assoc, i) => {
          return (
            <li key={i}>{assoc}</li>
          );
        })}
      </ul>
    </>
  )
}

export default AssociationList;
