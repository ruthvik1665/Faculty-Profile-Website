import FacBio from "../schema/Fac-Bio-schema.js";

export const addFacData = async (request, response) => {
    const FacultyBio = request.body;
    console.log(FacultyBio)
    const newFaculty = new FacBio(FacultyBio);
    try {
        console.log(newFaculty)
        await FacBio.insertOne(FacultyBio)
        await newFaculty.save();
        response.status(201).json(newFaculty);
    } catch (error) {
        console.error("Catch block - Validation Error:", error.errors || error.message);
        response.status(409).json({ message: error.message });
    }
};

