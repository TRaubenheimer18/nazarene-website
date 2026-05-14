import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "bonteheuwel-nazarene",
  name: "Bonteheuwel Church of the Nazarene",
  area: "Bonteheuwel",
  pastor: "Donovan Ramedies",
  time: "10:00 AM",
  address: "210 Bonteheuwel Ave, Bonteheuwel, 7764",
  youthService: "Friday at 18:00 PM",
  sundaySchool: "09:00 AM",
  onlineService: false,
  outreach: "Cottage meetings and open air service; house visitation",
  history: "The church was started in 1968 and the focus has always been growing from outside in. Youth, Sunday School and Missionary ministries have always been a priority.",
  pastorBio: "The Pastor is an Elder in the church for 44 years, currently completing his Honours in Theology.",
};

export default function BonteheuwelProfile() {
  return <ChurchProfileLayout church={church} />;
}
