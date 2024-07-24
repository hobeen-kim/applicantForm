/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import PreviewCard from "../../components/PreviewCard";
import {
  CardProps,
  initCards,
  InputTypes,
  ItemTypeProps,
  removeRequiredCardId,
  setRequiredCardId,
  StateProps,
} from "../../store";
import * as S from "./styles";
import result from "../Result";

interface ResultCardDataProps {
  id: string;
  title: string;
  inputType: string;
  answer: string;
  isRequired: boolean;
}

const Applicant = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cards } = useSelector((state: StateProps) => state);



  const { programId } = useParams();

  const sendData = async () => {
    console.log("send data");

    console.log(cards);
    const originalCardsArr = [] as CardProps[];
    cards.forEach(item => {
      if (item.inputType !== InputTypes.TITLE) {
        originalCardsArr.push(item);
      }
    });
    //
    const resultCardsDataArr: ResultCardDataProps[] = [];

    for (let i = 0; i < originalCardsArr.length; i++) {
      const resultCardData: ResultCardDataProps = {
        id: originalCardsArr[i].id,
        title: originalCardsArr[i].cardTitle,
        inputType: originalCardsArr[i].inputType,
        answer: methods.getValues()[originalCardsArr[i].id],
        isRequired: originalCardsArr[i].isRequired,
      };

      resultCardsDataArr.push(resultCardData);
    }

    console.log('데이터를 보냈습니다', resultCardsDataArr);
  }

  const getCardProps = () => {

    console.log("질문을 받아옵니다.")

    const newCustomCards: CardProps[] = [
      {
        id: "TitleCard",
        cardTitle: "설문지 제목",
        inputType: InputTypes.TITLE, // Ensure InputTypes.TEXT is correctly imported and used
        contents: "제목의 contents 항목 입니다.",
        isFocused: false,
        isRequired: false
      },
      {
        id: "1",
        cardTitle: "Sample Card 1",
        inputType: InputTypes.TEXTAREA, // Ensure InputTypes.TEXT is correctly imported and used
        contents: "",
        isFocused: false,
        isRequired: true
      },
      {
        id: "2",
        cardTitle: "Sample Card 2",
        inputType: InputTypes.RADIO, // Ensure InputTypes.RADIO is correctly imported and used
        contents: [{ id: "1", text: "Option 1" }, { id: "2", text: "Option 2", isEtc: true }],
        isFocused: false,
        isRequired: false
      }
    ];

    return newCustomCards
  }

  useEffect(() => {
      if (programId) {
        // Fetch data from the server
        console.log("fetch data from the server")

        const newCards = getCardProps()

        dispatch(initCards(newCards))
      }
  }, []);

  const handleClick = () => {
    const CardIdArr = Object.keys(methods.getValues());
    for (let i = 0; i < CardIdArr.length; i++) {
      for (let j = 1; j < cards.length; j++) {
        if (CardIdArr[i] === cards[j].id && cards[j].isRequired) {
          if (typeof cards[j].contents === "object" && cards[j].inputType !== InputTypes.RADIO) {
            const isRequiredComplete = Object.values(methods.getValues()[cards[j].id]).some(
              (value) => !!value,
            );
            if (isRequiredComplete) {
              dispatch(removeRequiredCardId());
              continue;
            } else {
              dispatch(setRequiredCardId({ cardId: cards[j].id }));
              throw new Error("필수값 입력 필요");
            }
          } else {
            const isRequiredComplete = !!methods.getValues()[cards[j].id];

            if (isRequiredComplete) {
              dispatch(removeRequiredCardId());
              continue;
            } else {
              dispatch(setRequiredCardId({ cardId: cards[j].id }));
              throw new Error("필수값 입력 필요");
            }
          }
        }
      }
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(() => {
          try {
            handleClick();
            // navigate("/preview/result", { state: methods.getValues() });
            sendData();
          } catch (e) {
            console.dir(e);
          }
        })}
      >
        {cards.map((card) => (
          <PreviewCard key={card.id} id={card.id} />
        ))}
        <S.PreviewSubmitSection>
          <S.SubmitButton type="submit">제출</S.SubmitButton>
          <S.ClearButton
            type="button"
            onClick={() => {
              window.location.reload();
            }}
          >
            양식 지우기
          </S.ClearButton>
        </S.PreviewSubmitSection>
      </form>
    </FormProvider>
  );
};

export default Applicant;
