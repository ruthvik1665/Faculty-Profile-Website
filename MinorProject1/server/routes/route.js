import  express  from "express";
import { addFacData } from "../controller/controller.js";


const route=express.Router();
route.post('/addData',addFacData);
export default route;