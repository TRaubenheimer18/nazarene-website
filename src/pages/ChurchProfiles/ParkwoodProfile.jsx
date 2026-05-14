import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "parkwood-nazarene",
  name: "Parkwood Church of the Nazarene",
  area: "Parkwood",
  pastor: "Marthinus Martin",
  time: "10:00 AM",
  address: "78 Acacia Street, Parkwood, 7800",
  youthService: "Friday at 18:00 PM",
  sundaySchool: "09:00 AM",
  onlineService: false,
  outreach: "Open Air, Cell Groups and House Visitation",
  history: "From starting church in a member's lounge, the congregation later moved to a tent, after which God blessed them with their own church building. This building still stands today as a testament to the faith, unity and perseverance of its members. It has remained steadfast in its mission to serve people from all walks of life. Today the Church of the Nazarene Parkwood is known as the 'Lighthouse' of Parkwood, symbolizing hope, guidance and inclusivity.",
  pastorBio: "Rev. Marthinus John Martin has been serving the church for the past 23 years. He is married to Rev. Dianna Martin who serves the congregation alongside him. The couple has two sons and six grandchildren. He is a committed servant of God with a passion for ministry and community upliftment. Having experienced the grace and faithfulness of God firsthand, he developed a deep desire to serve others and share the message of hope and salvation.",
};

export default function ParkwoodProfile() {
  return <ChurchProfileLayout church={church} />;
}
