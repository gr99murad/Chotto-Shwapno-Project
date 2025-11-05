import { FaBus } from 'react-icons/fa'; // React Icon for Bus Time
import EmergencyList from './EmergencyList';

const BusTime = () => {
  return <EmergencyList type="Bus Time" icon={<FaBus />} />;
};

export default BusTime;
