import React, {useState} from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { send } from 'emailjs-com';


function ContactForm() {
   const [statusMessage, setStatusMessage] = useState("");
    const [toSend, setToSend] = useState({
      first_name: '',
      last_name: '',
      message: '',
      reply_to: '',
  });
  

    const onSubmit = (e) => {
      
      e.preventDefault();
      
      send(
        'contact_form',
        'template_yi249op',
        toSend,
        'user_bxPeIXOeykTFdWncriK1A'
      )
        .then((response) => {
          setToSend({first_name: '', last_name: '', message: '', reply_to: '',})
          setStatusMessage("Thank you!");
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    
  };


   
    
  return (
         <div className="App" id="contact"> 
      <Typography  gutterBottom variant="h3" align="center" id="get-in-touch">
        <h3 id='contact-us'> Contact Us</h3>
       </Typography>
      <Grid >
        <Card id="form-container" style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto"}}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              How can I help?
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and I will get back to you within 24 hours.
          </Typography> 
            <form id="contact-form"  onSubmit={onSubmit} >
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" name="first_name" value={toSend.first_name} onChange={handleChange} label="First Name" text="text" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" name="last_name" value={toSend.last_name} onChange={handleChange} label="Last Name" type="text" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="reply_to" type="email" placeholder="Enter email" value={toSend.reply_to} onChange={handleChange} label="Email" variant="outlined" fullWidth required />
                </Grid>
                {/* <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid> */}
                <Grid item xs={12}>
                  <TextField name="message" value={toSend.message} onChange={handleChange} label="Message" multiline rows={4} maxLength='1500' placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                <Button type="submit" value="send" variant="contained" color="primary" fullWidth>Submit</Button> 
                </Grid>

              </Grid> 
             <p className="status-message">{statusMessage}</p> 
            </form>
          </CardContent>
        </Card>
      </Grid>
      <img src="" alt="" />
    </div>
    )
}

export default ContactForm
