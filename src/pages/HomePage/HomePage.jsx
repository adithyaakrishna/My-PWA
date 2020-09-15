import React from "react";
//import { Paper } from "@material-ui/core";
import Phinput from "../../components/PhoneInput/PhoneInput";
//import BottomNavBar from "../../components/BottomNavbar/BottomNavBar";
import { Button } from "@material-ui/core";
//import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
//import "../HomePage/homepage.min.scss";
//import AmountSlider from "../../components/AmountSlider/AmountSlider";
var QRCode = require("qrcode.react");

const HomePage = () => {
  const history = useHistory();
  var url ="http://deliverygods.reapit.in/rating?id=" + localStorage.getItem("user_id");
  return (
    <section>

      <QRCode value={url} />
      <br />
      <br />
      <Phinput></Phinput>
    </section>
  );
};
export default HomePage;
