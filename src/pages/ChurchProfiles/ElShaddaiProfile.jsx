import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "elshaddai-nazarene",
  name: "El Shaddai Church of the Nazarene",
  area: "Kuils River",
  pastor: "Eldrid Smith",
  time: "09:00 AM",
  address: "3 Sonnemeisie Str, De Kuilen, Kuils River",
  youthService: "Fridays at 19:00 PM",
  sundaySchool: "09:00 AM",
  onlineService: false,
};

export default function ElShaddaiProfile() {
  return <ChurchProfileLayout church={church} />;
}
