/* eslint-disable no-continue */
/* eslint-disable no-plusplus */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import PreviewCard from "../../components/PreviewCard";
import { CardProps, InputTypes, removeRequiredCardId, setRequiredCardId, StateProps } from "../../store";
import * as S from "./styles";

const Preview = () => {
  const { cards } = useSelector((state: StateProps) => state);
  const methods = useForm();
  const navigate = useNavigate();
  const [customCards, setCustomCards] = useState<CardProps[]>([]);

  const dispatch = useDispatch();

  const { programId } = useParams();

  const sendData = async () => {
    console.log("send data")
    console.log(programId)
    console.log(cards)
  };

  useEffect(() => {
    if (programId) {
        const newCustomCards: CardProps[] = [
          {
            id: "1",
            cardTitle: "Sample Card 1",
            inputType: InputTypes.TEXT, // Ensure InputTypes.TEXT is correctly imported and used
            contents: "Sample content",
            isFocused: false,
            isRequired: true
          },
          {
            id: "2",
            cardTitle: "Sample Card 2",
            inputType: InputTypes.RADIO, // Ensure InputTypes.RADIO is correctly imported and used
            contents: [{ id: "2-1", text: "Option 1" }, { id: "2-2", text: "Option 2", isEtc: true }],
            isFocused: false,
            isRequired: false
          }
        ];
        setCustomCards(newCustomCards);
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
            navigate("/preview/result", { state: methods.getValues() });
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

export default Preview;
