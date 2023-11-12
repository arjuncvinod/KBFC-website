import React from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
function SocialIcons() {
  return (
    <div className="socials">
      <a href="https://www.facebook.com/keralablasters/">
        <FacebookIcon />
      </a>
      <a href="https://www.instagram.com/keralablasters/?hl=en">
        <InstagramIcon />
      </a>
      <a href="https://twitter.com/KeralaBlasters">
        <TwitterIcon />
      </a>
      <a href="https://www.youtube.com/channel/UCCRfkpYF70QoUffbC5emuyw">
        <YouTubeIcon />
      </a>
    </div>
  );
}

export default SocialIcons
