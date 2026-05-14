import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "paarl-nazarene",
  name: "Paarl Church of the Nazarene",
  area: "Paarl",
  pastor: "Vincent Jonkers",
  time: "10:00 AM",
  address: "Cnr Pittesporum & Evans Street, Klein Nederberg, Paarl",
  youthService: "Friday at 18:30",
  sundaySchool: "09:00 AM",
  onlineService: false,
};

export default function PaarlProfile() {
  return <ChurchProfileLayout church={church} />;
}
