import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';

const Profile = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

// THIS WHERE INDIVIDUAL CAMPAIGN INFORMATION SHOW IS GOTTEN FROM
  const { address, contract, getUserCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);
  return (
    <div>
      <DisplayCampaigns 
        title='All Campaigns'
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </div>
  )
};

export default Profile