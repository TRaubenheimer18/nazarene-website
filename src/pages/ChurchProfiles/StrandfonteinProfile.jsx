import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "strandfontein-nazarene",
  name: "Strandfontein Church of the Nazarene",
  area: "Strandfontein",
  pastor: "Reginald Subjee",
  time: "09:00 AM",
  address: "Corner of Reygersdal and Watussi Drive, Bay View, Cape Town, 7788",
  youthService: "Fridays at 19:00 PM",
  sundaySchool: "10:30 AM",
  facebook: "https://www.facebook.com/share/1AvLbqftMY/?mibextid=wwXIfr",
  onlineService: false,
  outreach: "Evangelism, Missions, Youth, Men's Ministries, Ladies Ministries, Vacation Bible School",
  history: "In the mid-1990s, the church established its roots in Strandfontein, gathering in humble spaces such as homes, classrooms and a local shop, affectionately known as \"The Blou Dakke\". In the late 1990s, under the leadership of the late Rev. Ahmed Subjee, the church purchased land in Bayview and began building using its own funds. After laying the foundation, the church applied to the Alabaster Fund for assistance. Through Alabaster giving, Richard Zanner Jr. and his team completed the entire church — covering all costs, from materials to labour. Today, the church continues to grow and is a beacon of light to the community in Bayview, Strandfontein.",
  pastorBio: "Rev. Reginald Subjee has served as Senior Pastor of the Strandfontein Church of the Nazarene since 2020. He was ordained as an Elder in the Church of the Nazarene in 2010, and from that time served as co-pastor and associate pastor alongside the late Rev. Ahmed Subjee. He is supported by associate pastors Rev. Warren Subjee and Rev. Randall Subjee.",
};

export default function StrandfonteinProfile() {
  return <ChurchProfileLayout church={church} />;
}
