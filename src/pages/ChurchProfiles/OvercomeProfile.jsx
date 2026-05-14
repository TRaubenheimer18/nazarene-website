import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "overcome-nazarene",
  name: "Overcome Church of the Nazarene",
  area: "Cape Town",
  pastor: "Reginald Subjee",
  time: "09:00 AM",
  address: "St Patrick Avenue",
  youthService: "Friday at 17:00 PM",
  sundaySchool: "09:00 AM",
  onlineService: false,
};

export default function OvercomeProfile() {
  return <ChurchProfileLayout church={church} />;
}
