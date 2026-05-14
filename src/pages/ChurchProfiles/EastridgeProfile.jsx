import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "eastridge-nazarene",
  name: "Eastridge Church of the Nazarene",
  area: "Mitchells Plain",
  pastor: "Howard Mitchell",
  time: "09:00 AM",
  address: "3 Lohengrin, Eastridge, Mitchells Plain",
  sundaySchool: "09:00 AM",
  facebook: "https://www.facebook.com/eastridgechurchofthenazarine",
  onlineService: false,
  history: "Eastridge Church of the Nazarene has been an established congregation since 1983, originally founded as Beacon Valley Church of the Nazarene. In 2005, the congregation purchased property in Eastridge and was renamed accordingly. Rooted in the Wesleyan-Holiness movement, the church emphasises salvation, entire sanctification, and a life of holiness.",
  pastorBio: "Assistant Pastor at Bethany COTN 2008–2012; Senior Pastor at Eastridge COTN from 2013 to present.",
};

export default function EastridgeProfile() {
  return <ChurchProfileLayout church={church} />;
}
