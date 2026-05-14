import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "wellington-nazarene",
  name: "Wellington Church of the Nazarene",
  area: "Wellington",
  pastor: "Freddie Green",
  time: "10:00 AM",
  youthService: "Fridays at 19:00 PM",
  sundaySchool: "10:30 AM",
  facebook: "Wellington Church of the Nazarene",
  onlineService: true,
  history: "The church is close to 50 years old. It started in Nooitgedacht at one of the members' homes — in the garage.",
};

export default function WellingtonProfile() {
  return <ChurchProfileLayout church={church} />;
}
