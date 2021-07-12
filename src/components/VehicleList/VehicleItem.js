import React from 'react';

const VehicleItem = ({ vehicle }) => {
  return (
    <div className="VehicleItem">
      <div className="VehicleImage">
        <picture>
          <source media="(min-width: 768px)" srcSet={vehicle.media[0].url} />
          <img src={vehicle.media[1].url} alt={vehicle.description} />
        </picture>
      </div>
      <div className="VehicleDetails">
        <div className="VehicleTitleContainer">
          <h3 className="Title Uppercase">{`Jaguar ${vehicle.id.toUpperCase()}`}</h3>
        </div>
        <span className="TextSmall MarginBottom">{`From ${vehicle.price}`}</span>
        <span className="TextSmall TextGrey">{vehicle.description}</span>
      </div>
    </div>
  );
};

export default VehicleItem;
