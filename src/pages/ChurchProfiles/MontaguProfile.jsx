import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "montagu-nazarene",
  name: "Montagu Church of the Nazarene",
  area: "Montagu",
  pastor: "Melwyn Smith",
  time: "10:00 AM",
  address: "Cnr of Market and Le Roux Street, Montagu",
  sundaySchool: "Sunday at 09:30",
  onlineService: false,
  pastorBio: "Rev. Melwyn Smith — Ordained Elder of the Church of the Nazarene.",
  history: "The church began in 1983 with a total of 7 people, all from the same household. Brother Leslie Winegaard and his wife organized the church on 23 October 1983. They were recognized as the fastest growing church at that time and received a Diamond Jubilee Award. The church was inaugurated on 5 October 1985. The membership grew so much that they opened churches in Ashton, The Koo and Villiersdorp.",
};

export default function MontaguProfile() {
  return <ChurchProfileLayout church={church} />;
}
