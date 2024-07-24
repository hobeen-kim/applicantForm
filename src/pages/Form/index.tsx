import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Tooltip } from "@mui/material";

import * as S from "./styles";
import Card from "../../components/Card";
import AddCardButton from "../../components/AddCardButton";
import { CardProps, initCards, InputTypes, moveCard, moveContent, StateProps } from "../../store";
import { useParams } from "react-router-dom";

const Form = () => {
  const { cards } = useSelector((state: StateProps) => state);
  const dispatch = useDispatch();
  const { programId } = useParams();

  const openPreviewTab = () => {
    window.open("/preview", "_blank");
  };

  useEffect(() => {
    if (programId) {
      // Fetch data from the server
      console.log("fetch data from the server")

      const newCards = getCardProps()

      dispatch(initCards(newCards))
    }
  }, []);

  const getCardProps = () => {

    console.log("질문을 받아옵니다.")

    const newCustomCards: CardProps[] = [
      {
        id: "TitleCard",
        cardTitle: "설문지 제목",
        inputType: InputTypes.TITLE, // Ensure InputTypes.TEXT is correctly imported and used
        contents: "제목의 contents 항목 입니다.",
        subText: "card 1 subText",
        placeholder: "card 1 placeholder text",
        isFocused: false,
        isRequired: false
      },
      {
        id: "1",
        cardTitle: "Sample Card 1",
        inputType: InputTypes.TEXTAREA, // Ensure InputTypes.TEXT is correctly imported and used
        contents: "",
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
      }
    ];

    return newCustomCards
  }

  const onDragEnd = ({ destination, source }: DropResult) => {
    if (!destination) {
      return;
    }
    if (source.droppableId === "card" && destination.index === 0) {
      return;
    }
    if (source.droppableId === "card") {
      dispatch(
        moveCard({
          sourceIndex: String(source.index),
          destinationIndex: String(destination.index),
        }),
      );
    } else if (destination.droppableId === source.droppableId) {
      dispatch(
        moveContent({
          cardId: source.droppableId,
          sourceIndex: String(source.index),
          destinationIndex: String(destination.index),
        }),
      );
    }
  };

  return (
    <>
      <S.Header>
        <Tooltip title="미리보기">
          <S.Eye onClick={openPreviewTab} />
        </Tooltip>
      </S.Header>
      <DragDropContext onDragEnd={onDragEnd}>
        <S.Container>
          <Droppable droppableId="card" type="card" direction="vertical">
            {(provided) => (
              <div>
                <S.CardList {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, idx) => (
                    <Card
                      key={card.id}
                      idx={idx}
                      isTitle={card.inputType === InputTypes.TITLE}
                      {...card}
                    />
                  ))}
                </S.CardList>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <AddCardButton />
        </S.Container>
      </DragDropContext>
    </>
  );
};

export default Form;
