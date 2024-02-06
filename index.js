const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
app.get('/loancalculator/:amount/:terms', (req, res) => {
    const loanAmount = parseFloat(req.params.amount);
    const paymentTerms = parseInt(req.params.terms);
  
    const interest = (loanAmount * 0.01 * paymentTerms).toFixed(2);
    const totalAmount = (loanAmount + parseFloat(interest)).toFixed(2);
    const monthlyAmortization = ((loanAmount + parseFloat(interest)) / paymentTerms).toFixed(2);
  
    const output = `Interest: ${interest}
    \n\nTotal Amount: ${totalAmount}
    Monthly Amortization: ${monthlyAmortization}`;
    res.send(output);
  });

app.listen(port, () => console.log(`Server running at port ${port}`));