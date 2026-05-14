import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "restoration-nazarene",
  name: "Heideveld Church of the Nazarene",
  area: "Heideveld",
  pastor: "Daniel Carelse",
  time: "09:30 AM",
  address: "44 Hex Crescent, Manenberg, 7767",
  youthService: "Fridays at 18:00 PM",
  sundaySchool: "09:00 AM",
  facebook: "https://www.facebook.com/share/179wSCQWHT/?mibextid=wwXIfr",
  onlineService: false,
  outreach: "Open airs, prayer walks, cottage meetings, soup kitchen",
  pastorBio: "Pastor Daniel Carelse is the lead pastor of Heideveld Church of the Nazarene. Over four years in ministry, he has become known for steady leadership, compassionate spirit, and dedication to spiritual growth. In January 2025, he graduated from the Nazarene Theological College (NTC). His ministry is rooted in teaching and evangelism, with a vision to see restoration in individuals, families, and communities through the power of the Gospel.",
};

export default function RestorationProfile() {
  return <ChurchProfileLayout church={church} />;
}
