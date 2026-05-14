import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "grace-nazarene",
  name: "Grace Family Church of the Nazarene",
  area: "Tafelsig, Cape Town",
  pastor: "William Bantom",
  time: "09:00 AM",
  address: "1 Oranjekloof, Tafelsig",
  youthService: "Friday at 19:00 PM",
  sundaySchool: "09:00 AM",
  onlineService: false,
  outreach: "NMI",
  pastorBio: "Senior Pastor: Rev. William David Bantom. Associate Pastor: Rev. Garvin Arendorf.",
};

export default function GraceProfile() {
  return <ChurchProfileLayout church={church} />;
}
