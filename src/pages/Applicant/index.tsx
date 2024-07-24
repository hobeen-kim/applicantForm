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
  const [ complete, setComplete ] = useState("");

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

    const isRequire = false;

    console.log("질문을 받아옵니다.")

    setComplete("<h2>광양 청춘스케치마을 청년 한달살기 신청이 완료되었습니다💙</h2>\n" +
      "소중한 지원 감사합니다!<br>" +
      "선정결과 발표는 <b>1차 8월 2일, 추가발표 8월 9일에 개별 문자로 발송</b>됩니다. <br>문의는 언제든 하단의 번호 및 메일로 연락주세요.<br>" +
      "<br>" +
      "* 청춘스케치마을 PD (010-5523-6630)<br>" +
      "* YouthSketch92@gmail.com")

    const newCustomCards: CardProps[] = [
      {
        id: "TitleCard",
        cardTitle: "광양 청년청춘스케치마을 청년 한달살기 8~9월 참가신청서",
        inputType: InputTypes.TITLE, // Ensure InputTypes.TEXT is correctly imported and used
        contents: "https://form.monthler.kr/youth-sketch/title_img.jpg",
        subText: "<b>\n" +
          "                        갑갑한 빌딩 숲과 매연에서 벗어나 푸른 산과 맑은 물이 흐르는 곳에서 내가 원하는 마을을 직접 그려보는 건 어떨까요?<br><br>\n" +
          "                        8월 프로그램에서는 광양만의 특색을 담은 디자인 테마 상품 제작을 진행할 예정입니다. 상품 개발 및 실무 경험을 쌓고 지역 특성을 반영한 창의적인 디자인 상품 개발을 진행하려합니다. 지역 테마 디자인 상품 제작에 관심 있는 분들의 많은 참여 바랍니다.\n" +
          "                    </b>" +
          "<img src='https://form.monthler.kr/youth-sketch/local1.jpg'/>" +
          "<img src='https://form.monthler.kr/youth-sketch/local2.jpg'/>" +
          "<p style=\"font-size: 13px;\"> * 필요에 따라 프로그램기간은 조정이 있을 수 있습니다.<br>\n" +
          "                    * 궁금하신 점은 메일로 보내주시면 감사하겠습니다.</p>" +
          "<p style=\"color: #939393;font-size: 12px;\">\n" +
          "                    <br>* 저희 마을에서는\n" +
          "                    로컬에서 삶을 바라는 청년 디자이너와 창업가를 모집하고 있습니다.<br>\n" +
          "                    * 광양 한달살이 프로그램 청춘스케치 마을은 포스코와 지역소상공민 및 주민들과 함께 합니다.\n" +
          "                    <br><br>\n" +
          "                </p>",
        placeholder: "",
        isFocused: false,
        isRequired: false
      },
      {
        id: "1",
        cardTitle: "이름(실명)",
        inputType: InputTypes.TEXT, // Ensure InputTypes.TEXT is correctly imported and used
        contents: "",
        subText: "",
        placeholder: "이름을 입력하세요",
        isFocused: false,
        isRequired: isRequire
      },
      {
        id: "2",
        cardTitle: "성별",
        inputType: InputTypes.RADIO, // Ensure InputTypes.RADIO is correctly imported and used
        contents: [{ id: "21", text: "남자" }, { id: "22", text: "여자" }],
        subText: "",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "3",
        cardTitle: "출생연도",
        inputType: InputTypes.TEXT, // Ensure InputTypes.RADIO is correctly imported and used
        contents: "",
        subText: "<p style='color: blue'>* 자격사항: 2004년생 이상 (만 20세)<br>* 주민등록 등본 제출 (필수)</p>",
        placeholder: "19881018",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "4",
        cardTitle: "휴대폰 전화번호",
        inputType: InputTypes.TEXT,
        contents: "",
        subText: "",
        placeholder: "01012341234",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "5",
        cardTitle: "거주지 주소",
        inputType: InputTypes.TEXT,
        contents: "",
        subText: "",
        placeholder: "서울시 용산구",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "6",
        cardTitle: "이메일 주소",
        inputType: InputTypes.TEXT,
        contents: "",
        subText: "",
        placeholder: "nomadc.monthler@gmail.com",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "7",
        cardTitle: "인스타그램 링크 주소",
        inputType: InputTypes.TEXT,
        contents: "",
        subText: "",
        placeholder: "https://instagram.com/nomadc.anna",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "8",
        cardTitle: "블로그 링크 주소",
        inputType: InputTypes.TEXT,
        contents: "",
        subText: "",
        placeholder: "https://blog.naver.com/snsrrkfdk34",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "9",
        cardTitle: "선정기준 우대사항에 속하는 것에 체크해주세요.",
        inputType: InputTypes.CHECKBOX,
        contents: [
          { id: "91", text: "홍보효과가 높은 청년" }, { id: "92", text: "여행작가" }, { id: "93", text: "유튜버" }, { id: "94", text: "블로거 등 SNS 활동이 활발한 자" },
          { id: "95", text: "디자인 경험이 있는 청년" }, { id: "96", text: "일자리에 관심있는 청년" },
        ],
        subText: "",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "10",
        cardTitle: "희망회차",
        inputType: InputTypes.CHECKBOX,
        contents: [
          { id: "101", text: "2회차: (8월) 지역 테마 디자인 상품 만들기" }, { id: "102", text: "3회차: (9월) 팝업스토어 준비 및 운영" }
        ],
        subText: "",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "11",
        cardTitle: "지원동기",
        inputType: InputTypes.TEXTAREA,
        contents: "",
        subText: "최대한 자세하게 작성해주세요.",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "12",
        cardTitle: "지금 하고 있는 일",
        inputType: InputTypes.TEXTAREA,
        contents: "",
        subText: "<span style='color: blue'>직장인이면 하고 있는 업무, 학생이면 어떤 과, 그 외 어떤 분야에 관심을 두고 있는지 작성해주세요</span>",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "13",
        cardTitle: "광양에 가고 싶거나 해보고 싶은 것이 있다면?",
        inputType: InputTypes.TEXTAREA,
        contents: "",
        subText: "",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "14",
        cardTitle: "내가 잘하는 것을 모두 적어주세요.",
        inputType: InputTypes.TEXTAREA,
        contents: "",
        subText: "<span style='color: blue'>디자인과 관련되지 않아도 작성해주세요.\n" +
          "요리, 청소, 댄스, 유머, 노래, 소통 등 모두 환영합니다</span>",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "15",
        cardTitle: "청춘스케치마을에서 이루고 싶은 일이 있다면?",
        inputType: InputTypes.TEXTAREA,
        contents: "",
        subText: "",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "16",
        cardTitle: "최근 3년 내 한달살기 체험 경험이 있나요?",
        inputType: InputTypes.TEXTAREA,
        contents: "",
        subText: "",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "17",
        cardTitle: "포트폴리오 첨부 (링크 또는 파일)",
        inputType: InputTypes.TEXT,
        contents: "",
        subText: "<span style='color: blue'>- 간단한거라도 좋으니 내가 만든 작업물을 올려주세요!(장수 제한 없음)\n" +
          "- 첨부파일로 제출시 신청서폰 맨 아래에 있는 [자료첨부]에 첨부해주세요.</span>",
        placeholder: "포트폴리오 링크 주소",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "18",
        cardTitle: "개인정보 수집 및 이용 동의서",
        inputType: InputTypes.CHECKBOX,
        contents: [{ id: "181", text: "동의합니다" }],
        subText: "신청서에 작성한 본인은 광양시, 청춘스케치마을이 「개인정보보호법」제15조(개인정보의 수집·이용) 및 제17조(개인정보의 제공) 규정에 의거하여 다음과 같은 목적으로 개인정보를 수집·이용 및 제3자에 제공하는데 동의합니다." +
                  "<img src='https://form.monthler.kr/youth-sketch/p1.png'/>",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "19",
        cardTitle: "초상권 사용 동의서",
        inputType: InputTypes.CHECKBOX,
        contents: [{ id: "191", text: "동의합니다" }],
        subText: "우리의 청춘을 추억으로 남길 수 있도록 활동 사진 및 영상을 촬영할 계획입니다.",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "20",
        cardTitle: "보증금 안내",
        inputType: InputTypes.CHECKBOX,
        contents: [{ id: "201", text: "동의합니다" }],
        subText: "청춘스케치마을에서 살아갈 우리의 최소한의 다짐이자 안전 장치! 보증금은 활동 종료 후 사용 시설 확인을 거쳐 돌려드려요.<br><br>" +
          "* <b>보증금 10만원</b> 교육 완료 이후 돌려드립니다.<br>" +
          "* 합격자에 한하여 보증금 계좌 안내",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
      },
      {
        id: "21",
        cardTitle: "파일첨부 3개 (필수)",
        inputType: InputTypes.FILE,
        contents: [{ id: "201", text: "동의합니다" }],
        subText: "<span style='color: blue'>(1) 주민등록등본 1부 (필수, 주민번호 나와야해요)<br>" +
          "(2) 자필로 쓴 서명 (필수)<br>" +
          "(3) 포트폴리오 (필수)</span>",
        placeholder: "",
        isFocused: false,
        isRequired: isRequire,
        lengthMin: 3
      },
    ];

    return newCustomCards
  }

  useEffect(() => {
      // Fetch data from the server
      console.log("fetch data from the server")

      const newCards = getCardProps()

      dispatch(initCards(newCards))

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
            sendData();
            navigate(`/form/complete/${programId}`, { state: { complete } });
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
