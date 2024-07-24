/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import {
  StateProps,
} from "../../store";
import * as S from "./styles";

import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import CompleteBox from "../../components/CompleteBox";

const Complete = () => {
  const location = useLocation();
  const { complete } = location.state || {};

  return (
    <CompleteBox complete={complete}/>
  );
};

export default Complete;