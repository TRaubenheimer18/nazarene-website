import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "matroosfontein-nazarene",
  name: "Matroosfontein Church of the Nazarene",
  area: "Matroosfontein",
  pastor: "Wayne Davids",
  time: "09:30 AM",
  address: "26 Civic Way, Matroosfontein",
  youthService: "Friday at 19:00 PM",
  sundaySchool: "08:30 AM",
  facebook: "Matroosfontein Church Of The Nazarene",
  onlineService: false,
  outreach: "Open air services, house visitations, soup kitchen, active youth ministry outreach, fitness class for 60+ on Tuesdays at 10:00",
  history: "A church on the move striving to reach the lost for Christ. The church celebrates 60 years in existence this year, to God be the Glory. (John 13:35)",
};

export default function MatroosfonteinProfile() {
  return <ChurchProfileLayout church={church} />;
}
