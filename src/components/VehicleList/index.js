import React from 'react';
import useData from './useData';
import VehicleItem from './VehicleItem';

import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div className="VehicleList" data-testid="results">
      {vehicles.map((vehicle) => (
        <VehicleItem key={vehicle.id} vehicle={vehicle} />
      ))}
    </div>
  );
}
