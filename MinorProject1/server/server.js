const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8001;

mongoose.connect('mongodb+srv://miniproject1729:HYB5wx96QHQSwrDk@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const formSchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  research: String,
  email: String,
  description: String,
  // Add the rest of your form fields here with their respective data types
});

const FormModel = mongoose.model('Form', formSchema);

app.use(bodyParser.json());
app.use(cors());

// Submit Form
app.post('/api/submitForm', async (req, res) => {
  try {
    const formData = req.body;
    const formEntry = new FormModel(formData);
    await formEntry.save();
    res.status(200).json({ success: true, message: 'Form submitted successfully.' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// Get Form Data
app.get('/api/getFormData', async (req, res) => {
  try {
    const formDataList = await FormModel.find({}, '-_id');
    console.log(formDataList)
    res.status(200).json(formDataList);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});

// server.js
app.put('/api/updateFormData/:name', async (req, res) => {
    try {
      const { name } = req.params;
      const updatedFormData = req.body;
  
      const updatedDocument = await FormModel.findOneAndUpdate({ name }, updatedFormData, { new: true });
  
      if (updatedDocument) {
        res.status(200).json({ success: true, message: 'Form data updated successfully.' });
      } else {
        console.error('Form data not found for update.');
        res.status(404).json({ success: false, message: 'Form data not found for update.' });
      }
    } catch (error) {
      console.error('Error updating form data:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const FormDataModel = require ('./models/FormData');



mongoose.connect('mongodb+srv://miniproject1729:HYB5wx96QHQSwrDk@cluster0.ylskpxa.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});


app.post('/register', (req, res)=>{
    

    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            res.json("Already registered")
        }
        else{
            FormDataModel.create(req.body)
            .then(log_reg_form => res.json(log_reg_form))
            .catch(err => res.json(err))
        }
    })
    
})

app.post('/login', (req, res)=>{
    // To find record from the database
    const {email, password} = req.body;
    FormDataModel.findOne({email: email})
    .then(user => {
        if(user){
            // If user found then these 2 cases
            if(user.password === password) {
                res.json("Success");
            }
            else{
                res.json("Wrong password");
            }
        }
        // If user not found then 
        else{
            res.json("No records found! ");
        }
    })
})


