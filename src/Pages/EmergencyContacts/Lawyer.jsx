import { FaGavel } from 'react-icons/fa'; // React Icon for Lawyer
import EmergencyList from './EmergencyList';

const Lawyer = () => {
  return <EmergencyList type="Lawyer" icon={<FaGavel />} />;
};

export default Lawyer;
