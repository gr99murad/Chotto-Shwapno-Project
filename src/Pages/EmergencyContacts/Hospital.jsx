import { FaHospital } from 'react-icons/fa'; // React Icon for Hospital
import EmergencyList from './EmergencyList';

const Hospital = () => {
  return <EmergencyList type="Hospital" icon={<FaHospital />} />;
};

export default Hospital;
