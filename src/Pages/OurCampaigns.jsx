import React from "react";
import CampaignBanner from "../Components/OurCampaigns/CampaignBanner";
import Navbar from "../SharedFile/Navbar";
import CampaignList from "../Components/OurCampaigns/CampaignList";

const OurCampaigns = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-[#fbeeee] to-white">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <div>
          <CampaignBanner></CampaignBanner>
        </div>
        <CampaignList></CampaignList>
      </div>
    </div>
  );
};

export default OurCampaigns;
