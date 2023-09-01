import homeicon from "../assets/images/homenew.png";
import doctorimage1 from "../assets/images/images1.jpg";
import doctorimage2 from "../assets/images/image2.jpg";
import doctorimage3 from "../assets/images/image3.jpg";
import doctorimage4 from "../assets/images/image5.jpg";
import rightarrow from "../assets/images/arrowicon.png";
import threedots from "../assets/images/threedots.png";
import appointment from "../assets/images/appointment.png";
import Labtest from "../assets/images/Labtest.png";
import medicine from "../assets/images/medicine.png";
import prescription from "../assets/images/prescription.png";
import family from "../assets/images/family.png";
import favourite from "../assets/images/favourite.png";
import meassage from "../assets/images/messages.png";
import payment from "../assets/images/cash.png";
import setting from "../assets/images/setting.png";
import Cream from "../assets/images/cream.jpg"
export const SidebarIcons = [
  {
    image: homeicon,
    name: "Home"
  },
  {
    image: appointment,
    name: "Appointment"
  },
  {
    image: Labtest,
    name: "Lab Tests"
  },
  {
    image: medicine,
    name: "Medicine Order"
  },
  {
    image: favourite,
    name: "Favourites"
  },
  {
    image: family,
    name: "Family"
  },
  {
    image: prescription,
    name: "Prescription"
  },
  {
    image: meassage,
    name: "Messages"
  },
  {
    image: payment,
    name: "Payments"
  },
  {
    image: setting,
    name: "Settings"
  }
];

export const Doctordetails = [
  {
    image:doctorimage1,
    doctorname:"Dr. Darlence Robertson",
    doctorwork:"Dental specialist",
    arrowicon:rightarrow,
    rating:"50+ Review"
  },
  {
    image:doctorimage2,
    doctorname:"Dr. Darlence Robertson",
    doctorwork:"Dental specialist",
    arrowicon:rightarrow,
    rating:"30+ Review"
  },
  {
    image:doctorimage3,
    doctorname:"Dr. Darlence Robertson",
    doctorwork:"Dental specialist",
    arrowicon:rightarrow,
    rating:"40+ Review"
  },
  {
    image:doctorimage4,
    doctorname:"Dr. Darlence Robertson",
    doctorwork:"Dental specialist",
    arrowicon:rightarrow,
    rating:"45+ Review"
  },
  
];

export const Medicationsdata=[{
  medicinename:"Acetamenophen 500mg",
  medicineroutine:"Take with food every morning"
},
{
  medicinename:"Doxycycline 100mg",
  medicineroutine:"Take 1 with food twice a day,and avoid drinking alcohol for 2 hrs aftr"
},{
  medicinename:"Hydrochlorothiazide 23mg",
  medicineroutine:"Takes 3 tablets, 3 times a day for 7 days"
}]


export const Popularproducts=[{
  image:Cream,
  popularName:"Necessarie 75ML",
  Dollar:"$27.60",
  dollar:"$34.7",
  arrowicon:rightarrow,
},{
  image:Cream,
  popularName:"Mario 118ML",
  Dollar:"$24.60",
  dollar:"$20.7",
  arrowicon:rightarrow,
},{
  image:Cream,
  popularName:"Allergy Relief 25mg",
  Dollar:"$50.60",
  dollar:"$28.7",
  arrowicon:rightarrow,
}]

export const Package=[{
  image:doctorimage1,
  packagename:"Basic Health Package",
  Ideal:"Ideal for individual aged 21-40..",
  optionimage:threedots
},{
  image:doctorimage1,
  packagename:"Fever Panel",
  Ideal:"Ideal for individual aged 21-40..",
  optionimage:threedots
}]