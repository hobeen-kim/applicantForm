/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import * as S from "./styles";

import { Simulate } from "react-dom/test-utils";
import CompleteBox from "../../components/CompleteBox";
import PartnerLink from "../../components/PartnerLink";
import PageFooter from "../../components/PageFooter";

const Complete = () => {
  const location = useLocation();
  const { complete } = location.state || {};
  const { partnerLink } = location.state || {};
  const { partnerImage } = location.state || {};
  const { partnerName } = location.state || {};

  return (
    <div>
    <PartnerLink link={partnerLink} image={partnerImage} />
    <CompleteBox complete={complete}/>
    <PageFooter partnerName={partnerName} />
    </div>
  );
};

export default Complete;