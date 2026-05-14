import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "northpine-nazarene",
  name: "Northpine Church of the Nazarene",
  area: "Brackenfell",
  pastor: "Trevor Rich",
  time: "09:30 AM",
  address: "21, 12th Ave, Belmont Park, 7570",
  sundaySchool: "09:30 AM",
  onlineService: false,
  outreach: "Campaign, outreach Bible studies in various homes, soup kitchen",
  history: "Northpine Church was started in 1992 by laypersons from Matroosfontein CotN under the leadership of Bro Cliffy September. Three pastors later — Rev. W. Snell, Rev. N. Kolkoto, and Rev. Trevor Rich — the church was finally able to buy and obtain property for a church building. Glory to God!",
  pastorBio: "Senior Pastor: Rev. Trevor Rich, ordained 2005 (in ministry as a pastor since 2001 at Brooklyn CotN). Associate Minister: Dr/Rev. Edna Rich, ordained 2008. Has 3 adult children and one adult granddaughter.",
};

export default function NorthpineProfile() {
  return <ChurchProfileLayout church={church} />;
}
