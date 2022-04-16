import React from "react";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { FaDiscord, FaTwitter } from "react-icons/fa";
const ComingSoon = () => {
  return (
    <div>
      <div className="Soon">
        <h1 style={{ fontSize: "2.5rem" }}>Coming Soon</h1>
        <hr />
        <p id="launch"></p>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            {" "}
            <a href="https://discord.com/channels/932085117093052469/932085117952864271" class="animated-button1" style={{ fontSize: "0.9rem" }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FaDiscord />_Discord
            </a>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            {" "}
            <a href="https://twitter.com/SOMiyamotoNFT" class="animated-button1" style={{ fontSize: "0.9rem" }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <FaTwitter />
              _Twitter
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ComingSoon;
