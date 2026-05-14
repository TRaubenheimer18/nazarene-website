import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "capricorn-nazarene",
  name: "Capricorn Church of the Nazarene",
  area: "Capricorn",
  pastor: "Bernard Daniels",
  time: "09:00 AM",
  address: "106 Harmony Road, Capricorn",
  youthService: "Friday at 19:00",
  sundaySchool: "15:00 pm",
  onlineService: false,
  outreach: "Cottage meetings, Wayside Sunday School",
  history: "Church was organized in 2007 by the then DS Patrick Paulse, pastored by Pastor Bernard Daniels. Originally located at Faranaza's Edu-Care Center, Vrygrond Avenue. The church currently has its own property at 106 Harmony Road.",
  pastorBio: "Rev. Bernard Daniels — Ordained Elder. Wife: Audrey Daniels. Two adult children: Darian and Chanelle. Worked for the City of Cape Town (retired). Ministered at Capricorn while maintaining secular work. Active in all spheres of ministry and committed to the work of the Lord.",
};

export default function CapricornProfile() {
  return <ChurchProfileLayout church={church} />;
}
