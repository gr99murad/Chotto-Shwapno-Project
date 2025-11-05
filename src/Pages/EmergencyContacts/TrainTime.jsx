import { FaTrain } from 'react-icons/fa'; // React Icon for Train Time
import EmergencyList from './EmergencyList';

const TrainTime = () => {
  return <EmergencyList type="Train Time" icon={<FaTrain />} />;
};

export default TrainTime;
