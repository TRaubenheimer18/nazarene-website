import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "manenberg-nazarene",
  name: "Manenberg Church of the Nazarene",
  area: "Manenberg",
  pastor: "Nathan Valensky",
  time: "09:00 AM",
  address: "35C Tugela Road, Manenberg",
  youthService: "Friday at 19:00 PM",
  onlineService: false,
  outreach: "Open Air, bread drive",
  pastorBio: "Rev. Nathan Valensky is the senior pastor of Manenberg COTN. Prior to coming to Manenberg COTN in 2024, he served as senior pastor at Victory COTN for 7 years. He has a deep passion for the church and the preaching of God's word and loves seeing people come to know Jesus. Nathan is married to Thalia, who is also the worship leader. They have two children, Jordan and Jamie-Lee.",
};

export default function ManenbergProfile() {
  return <ChurchProfileLayout church={church} />;
}
