import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "groenheuwel-nazarene",
  name: "Groenheuwel Church of the Nazarene",
  area: "Paarl",
  pastor: "Esra Maralack",
  time: "07:00 AM",
  address: "4 Calendula Street, Groenheuwel, Paarl, 7646",
  youthService: "Fridays at 18:00 PM",
  sundaySchool: "09:00 AM",
  onlineService: false,
  outreach: "Open Airs, Door to door, Wayside Sunday School at 15:00",
  history: "The church started on the porch of Sister Heffenaar 26 years ago, then moved to Brother Jan's yard in a Wendy house in 2001, which remains the place of worship. Members came and left over the years, but the core of the Groenheuwel ministry stayed intact because prayer is the foundation.",
  pastorBio: "Pastor Esra RR Maralack was called by God at the age of 15. He completed his studies and graduated in 2016, entering full-time ministry that same year. On 24 December 2017, God placed him in Groenheuwel where he continues to pastor.",
};

export default function GroenheuwelProfile() {
  return <ChurchProfileLayout church={church} />;
}
