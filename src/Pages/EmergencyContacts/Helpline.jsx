import { FaPhoneAlt } from 'react-icons/fa'; // React Icon for Helpline
import EmergencyList from './EmergencyList';

const Helpline = () => {
  return <EmergencyList type="Helpline" icon={<FaPhoneAlt />} />;
};

export default Helpline;
