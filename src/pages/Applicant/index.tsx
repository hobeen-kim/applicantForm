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
  ItemTypeProps, removeLengthMinCardId,
  removeRequiredCardId, setLengthMinCardId,
  setRequiredCardId,
  StateProps,
} from "../../store";
import * as S from "./styles";
import result from "../Result";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;

interface ResultCardDataProps {
  id: string;
  answer: string;
}

const Applicant = () => {
  const methods = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { cards } = useSelector((state: StateProps) => state);
  const { programId } = useParams();

  const sendData = async () => {
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
        answer: methods.getValues()[originalCardsArr[i].id],
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
        subText: "",
        placeholder: "",
        isFocused: false,
        isRequired: false
      },
      {
        id: "1",
        cardTitle: "Sample Card 1",
        inputType: InputTypes.TEXT, // Ensure InputTypes.TEXT is correctly imported and used
        contents: "card 1 contents 항목",
        subText: "card 1 subText",
        placeholder: "card 1 placeholder text",
        isFocused: false,
        isRequired: true
      },
      {
        id: "2",
        cardTitle: "Sample Card 2",
        inputType: InputTypes.RADIO, // Ensure InputTypes.RADIO is correctly imported and used
        contents: [{ id: "1", text: "Option 1" }, { id: "2", text: "Option 2", isEtc: true }],
        subText: "card 1 subText",
        placeholder: "card 1 placeholder text",
        isFocused: false,
        isRequired: false
      },
      {
        id: "3",
        cardTitle: "Sample Card 3",
        inputType: InputTypes.SELECT, // Ensure InputTypes.RADIO is correctly imported and used
        contents: [{ id: "3", text: "Option 1" }, { id: "4", text: "Option 2" }],
        subText: "card 1 subText",
        placeholder: "card 1 placeholder text",
        isFocused: false,
        isRequired: false
      },
      {
        id: "4",
        cardTitle: "Sample Card 4",
        inputType: InputTypes.CHECKBOX, // Ensure InputTypes.RADIO is correctly imported and used
        contents: [{ id: "5", text: "Option 1" }, { id: "6", text: "Option 2" }],
        subText: "card 1 subText",
        placeholder: "card 1 placeholder text",
        isFocused: false,
        isRequired: false
      },
      {
        id: "5",
        cardTitle: "Sample Card 5 - 장문형",
        inputType: InputTypes.TEXTAREA, // Ensure InputTypes.RADIO is correctly imported and used
        contents: "",
        subText: "300자 이상 작성해주세요.",
        placeholder: "card 1 placeholder text",
        isFocused: false,
        isRequired: true,
        lengthMin: 20
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
    let errorCount = 0;
    const CardIdArr = Object.keys(methods.getValues());
    for (let i = 0; i < CardIdArr.length; i++) {
      for (let j = 1; j < cards.length; j++) {
        if (CardIdArr[i] === cards[j].id && cards[j].isRequired) {
          if (typeof cards[j].contents === "object" && cards[j].inputType !== InputTypes.RADIO) {
            const isRequiredComplete = Object.values(methods.getValues()[cards[j].id]).some(
              (value) => !!value,
            );
            if (!isRequiredComplete) {
              dispatch(setRequiredCardId({ cardId: cards[j].id }));
              errorCount++;
            } else {
              dispatch(removeRequiredCardId( { cardId: cards[j].id }));
            }
          } else {
            const isRequiredComplete = !!methods.getValues()[cards[j].id];

            if (!isRequiredComplete) {
              dispatch(setRequiredCardId({ cardId: cards[j].id }));
              errorCount++;
            } else {
              dispatch(removeRequiredCardId( { cardId: cards[j].id }));
            }
          }
        }
        if (CardIdArr[i] === cards[j].id && cards[j].lengthMin !== undefined) {

          const length = cards[j].lengthMin ?? 0;

          if(length === 0 || methods.getValues()[cards[j].id] === undefined) continue;

          if (methods.getValues()[cards[j].id].length < length) {
            dispatch(setLengthMinCardId({ cardId: cards[j].id }));
            errorCount++;
          } else {
            dispatch(removeLengthMinCardId({ cardId: cards[j].id }));
          }
        }
      }
    }
    if(errorCount > 0) {
      throw new Error("입력값 확인");
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
        </S.PreviewSubmitSection>
      </form>
    </FormProvider>
  );
};

export default Applicant;
