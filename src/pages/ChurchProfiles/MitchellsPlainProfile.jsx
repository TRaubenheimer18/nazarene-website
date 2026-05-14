import ChurchProfileLayout from './ChurchProfileLayout';

const church = {
  id: "mitchellsplain-nazarene",
  name: "Mitchells Plain Church of the Nazarene",
  area: "Mitchells Plain",
  pastor: "Gene Pretorius",
  time: "09:30 AM",
  address: "84 Silversands Street, Portlands, Mitchells Plain",
  youthService: "Friday at 19:30 PM",
  sundaySchool: "08:45 AM",
  onlineService: false,
};

export default function MitchellsPlainProfile() {
  return <ChurchProfileLayout church={church} />;
}
