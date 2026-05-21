import ChurchProfileLayout from './ChurchProfileLayout';
import AtlantisPastor from '../../assets/AtlantisResources/AtlantisPastor.jpeg';

const church = {
  id: "atlantis-nazarene",
  name: "Church of the Nazarene Atlantis",
  area: "Atlantis, Cape Town",
  pastor: "Nigel Kolkoto",
  pastorImage: AtlantisPastor,
  time: "09:30 AM",
  address: "43 Berzelia St, Protea Park, Cape Town, 7349",
  youthService: "Friday at 18:30 PM",
  sundaySchool: "08:30 AM",
  facebook: "https://www.facebook.com/Church-of-the-Nazarene-Atlantis",
  tiktok: "https://www.tiktok.com/@churchofthenazareneatl",
  onlineService: true,
  outreach: "NMI, Evangelistic Ministry, Prison Ministry",
  historyPeriods: [
    {
      period: "1976–1981",
      title: "Establishment",
      content: [
        "The church was established in 1976 by the missionary Rev. Emsly. When Ma Vlotman later relocated to Atlantis, Rev. Emsly spent approximately three months actively ministering and working in the Atlantis area. During this initial phase, church activities were conducted from a private home owned by the Van Zyl couple, who resided in Chandor Street, Atlantis.",
        "After the Van Zyl couple, responsibility for the work was taken over by the Emsly family. However, due to advancing age, the Emslys eventually withdrew from active ministry, and the Stiegleader missionary couple assumed leadership of the church. During their tenure, services were relocated to the home of Ma Vlotman at 14 Meteren Street, Avondale.",
        "Following the departure of the Stiegleader couple, Rev. William Bantom took oversight of the congregation. Sunday morning services continued to be held at the Vlotman residence, and worship gatherings remained there for approximately six years.",
        "The first officially appointed pastor of the church was Rev. Nugent Galant, who served while the congregation was still meeting at the Vlotman home. During this time, the church experienced steady growth, particularly as members of the Church of the Nazarene relocated to Atlantis. In addition, a wayside Sunday school ministry was conducted by Ma Vlotman at Eagles Nest in Dura.",
      ],
    },
    {
      period: "1981 onwards",
      title: "Expansion and Relocation",
      content: [
        "In 1981, due to the growth of the congregation, the church relocated to a classroom at No. 1 Secondary School, where services were held for approximately three to four years. In 1985, the congregation moved again, this time to Berzelia Primary School. During this period, the church experienced rapid growth.",
        "The congregation continued meeting at Berzelia Primary School until the church building was completed in 1986. A significant milestone in the life of the church occurred in 1988, when the first wedding was conducted in the church building, celebrating the marriage of Ma Vlotman's daughter.",
        "Rev. Collip served as the second pastor of the church and was responsible for fencing the church grounds. Over the years, several other pastors have served the congregation, including Rev. Cousins, Rev. Slinger, Rev. Wesso, Rev. Sallies, Rev. Karelse, Rev. Fransuzane, Rev. Ramedies, Rev. Rustin, and Rev. Kolkoto. These names are not recorded in chronological order.",
      ],
    },
  ],
  image: require('../../assets/Atlantis COTN.jpeg'),
};

export default function AtlantisProfile() {
  return <ChurchProfileLayout church={church} />;
}
