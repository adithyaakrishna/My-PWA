import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Axios from "axios";
// import { makeStyles } from "@material-ui/core/styles";
// import CustomizedRatings from "../Rating/Rating";
//import ThankYou from "../../pages/ThankYou/ThankYou";
import { useHistory } from "react-router-dom";

const FormField = (props) => {
  const history = useHistory()
  const handleSubmit = async(event) => {
    event.preventDefault();
    await Axios.post("13.232.41.160:3050/delivery_gods/add_feedback", JSON.stringify({ "phone_number": props.currentPhone, "feedback_text": props.message, "rating": props.rating }))
    .finally(() => props.setCurrentPhone(null))
  }
  return (
    <section>
      <form noValidate autoComplete="on" onSubmit = {handleSubmit}>
        <div>
          <TextField
            id="outlined-multiline-static"
            label="Message"
            multiline
            required
            rows={4}
            placeholder="Message"
            variant="outlined"
            value = {props.message}
            onChange = {(e) => {props.setMessage(e.target.value)}}
          />
          <br />
        </div>
        <TextField error id="standard-error" label="Enter a Tip Amount" defaultValue="Rs. 10" style={{ marginBottom: "20px", marginTop:"10px" }} />
        <br />
        <Button variant="contained" color="primary" style={{ marginBottom: "10px" }}>Tip</Button>
        <br />
        <Button type="submit" variant="contained" color="secondary" style={{marginTop:"10px"}} onClick = {() => history.push("/thankyou")}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default FormField;
