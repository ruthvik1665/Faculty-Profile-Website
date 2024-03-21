import mongoose from "mongoose";
const FacBioSchema = new mongoose.Schema({
  name: { type: String, default: '' },
  Department: { type: String, default: '' },
  Designation: { type: String, default: '' },
  speciality: { type: String, default: '' },
  email: { type: String, default: '' },
  Description: { type: String, default: '' },
  ResearchInterests: { type: String, default: '' },
  ResearchArticles: { type: String, default: '' },
});




const FacBio = mongoose.model('FacBio', FacBioSchema);


export default FacBio;
