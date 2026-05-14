import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "sunnyside-nazarene",
  name: "Sunnyside Church of the Nazarene",
  area: "Athlone",
  pastor: "Rodger Chetty",
  time: "09:30 AM",
  address: "C/O Benbow and Bresee Avenue, Sunnyside, Athlone, 7764",
  youthService: "Friday at 19:00 PM",
  sundaySchool: "08:45 AM",
  facebook: "https://www.facebook.com/COTNsunnyside/",
  onlineService: false,
  outreach: "Visiting old age homes, cottage meetings, hospital visits, wayside Sunday school",
  history: "Church was established in 1957. With a church membership of 154, for more than 60 years the congregation has been proclaiming holiness and entire sanctification, reaching out to communities with a focal point of winning souls for Christ.",
  pastorBio: "Rev. Rodger Chetty studied at NTC Gauteng in 2006 and is an ordained minister in the Church of the Nazarene. Churches served include Valhalla Park COTN, Shallcross COTN, George COTN, Pelican Park COTN, and currently Sunnyside COTN (approximately 10 years).",
};

export default function SunnysideProfile() {
  return <ChurchProfileLayout church={church} />;
}
