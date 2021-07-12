// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  const vehicles = await request('/api/vehicles.json');
  let returnVehicles = [];
  const getVehicles = vehicles.map(async(vehicle) => {
    const vehicleData = await request(vehicle.apiUrl).catch(() => ({}));
    return {
      ...vehicle,
      ...vehicleData
    };
  });

  returnVehicles = await Promise.all(getVehicles);
  return returnVehicles.filter((val) => !!val.price);
}
