import { FaUserMd } from 'react-icons/fa'; // React Icon for Doctor
import EmergencyList from './EmergencyList';

const Doctor = () => {
  return <EmergencyList type="Doctor" icon={<FaUserMd />} />;
};

export default Doctor;
