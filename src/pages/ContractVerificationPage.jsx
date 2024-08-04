import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";

import AnalysisResult from "@/components/display/AnalysisResult";
import dummyData from "@/components/display/dummyData.json";
import { Button } from "@/components/forms/Button";
import { Paragraph } from "@/components/typograph/Paragraph";
import { Text } from "@/components/typograph/Text";

import useAutoNextStep from "@/hooks/useAutoNextStep";
import useButtonEnabled from "@/hooks/useButtonEnabled";

import analyzing from "@/assets/analyzing.png";
import iconCheck from "@/assets/icon_check.png";
import iconClip from "@/assets/icon_clip.png";
import iconQuestion from "@/assets/icon_question.png";

import {
    ContractVerificationPageContainer,
    PageInform,
    Form,
    FormElement,
    SelectBox,
    HiddenInput,
    TextBox,
    ClipImg,
    StyledTextArea,
    ButtonWrapper,
    PageThreeWrapper,
    BoxWithImg,
} from "./ContractVerificationPage.styled";
import { nextStep, prevStep, setFile, setAnalysisResult } from "@/store/contractVerification.slice";

const contractTypeMap = {
    employment: "표준근로계약서",
    lease: "임대차계약서",
    realestate: "부동산매매개약서",
    iou: "차용증",
};

export default function ContractVerificationPage() {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.contractVerification.step);
    const fileUrl = useSelector((state) => state.contractVerification.fileUrl);
    const fileName = useSelector((state) => state.contractVerification.fileName);
    const analysisResult = useSelector((state) => state.contractVerification.analysisResult);
    const { register, handleSubmit, watch } = useForm();
    const selectedFile = watch("file");
    const selectedContractType = watch("contractType");
    const description = watch("description");
    const isButtonEnabled = useButtonEnabled(selectedFile, selectedContractType, description);
    useAutoNextStep(step, dispatch, nextStep);

    useEffect(() => {
        setAnalysisResult(dummyData);
    }, []);

    const onSubmit = (data) => {
        const file = data.file[0];
        const fileUrl = URL.createObjectURL(file);
        const fileName = file.name;
        dispatch(setFile({ fileUrl, fileName }));
        dispatch(nextStep());
    };

    return (
        <>
            {step === 1 && (
                <ContractVerificationPageContainer>
                    <PageInform>
                        <img src={iconQuestion} width="100px" alt="question" />
                        <Paragraph size="xl" weight="bold">
                            어떤 계약서를
                        </Paragraph>
                        <Paragraph size="xl" weight="bold">
                            검토할까요?
                        </Paragraph>
                    </PageInform>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <FormElement>
                            <Paragraph size="m" variant="gray" htmlFor="contractType">
                                계약서 종류
                            </Paragraph>
                            <SelectBox id="contractType" {...register("contractType")}>
                                <option value="employment">표준근로계약서</option>
                                <option value="lease">임대차계약서</option>
                                <option value="realestate">부동산매매개약서</option>
                                <option value="iou">차용증</option>
                            </SelectBox>
                        </FormElement>
                        <FormElement>
                            <HiddenInput type="file" id="file" {...register("file")} />
                            <TextBox onClick={() => document.getElementById("file").click()}>
                                <ClipImg src={iconClip} width="20px" alt="clip icon" />
                                <Paragraph size="m" variant="gray">
                                    {selectedFile && selectedFile[0]
                                        ? selectedFile[0].name
                                        : "여기를 눌러 이미지를 선택해주세요."}
                                </Paragraph>
                            </TextBox>
                        </FormElement>
                        <FormElement>
                            <Paragraph size="m" variant="gray" htmlFor="description">
                                계약서에 대한 추가 설명
                            </Paragraph>
                            <TextBox>
                                <StyledTextArea
                                    id="description"
                                    placeholder="ex) 최저시급, 고용 기간 등"
                                    {...register("description")}
                                />
                            </TextBox>
                        </FormElement>
                        <ButtonWrapper>
                            <Button
                                type="submit"
                                size="l"
                                variant={isButtonEnabled ? "navy" : "gray"}
                                disabled={!isButtonEnabled}
                            >
                                다음 단계
                            </Button>
                        </ButtonWrapper>
                    </Form>
                </ContractVerificationPageContainer>
            )}
            {step === 2 && (
                <ContractVerificationPageContainer>
                    <PageInform>
                        <img src={iconCheck} width="100px" alt="check" />
                        <Paragraph size="xl" weight="bold">
                            아래 계약서가
                        </Paragraph>
                        <Paragraph size="xl" weight="bold">
                            올바른지 확인할게요
                        </Paragraph>
                    </PageInform>
                    <Form>
                        <FormElement>
                            <Paragraph size="m" variant="gray" htmlFor="contractType">
                                계약서 종류
                            </Paragraph>
                            <TextBox>
                                <Paragraph size="m" variant="black">
                                    {contractTypeMap[selectedContractType]}
                                </Paragraph>
                            </TextBox>
                        </FormElement>
                        <FormElement>
                            <TextBox>
                                <BoxWithImg>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <ClipImg src={iconClip} alt="clip icon" />
                                        <Paragraph size="m" variant="gray">
                                            {fileName}
                                        </Paragraph>
                                    </div>
                                    <img src={fileUrl} alt={fileName} width="100%" />
                                </BoxWithImg>
                            </TextBox>
                        </FormElement>
                        <ButtonWrapper>
                            <Button size="l" variant="navy" onClick={() => dispatch(nextStep())}>
                                분석 시작
                            </Button>
                        </ButtonWrapper>
                    </Form>
                </ContractVerificationPageContainer>
            )}
            {step === 3 && (
                <>
                    <PageInform>
                        <Paragraph size="xl" weight="bold">
                            AI가
                        </Paragraph>
                        <Paragraph size="xl" weight="bold">
                            꼼꼼하게
                        </Paragraph>
                        <Paragraph size="xl" weight="bold">
                            계약서를 분석중이에요!
                        </Paragraph>
                    </PageInform>
                    <img src={analyzing} width="348px" alt="analyzing" />
                </>
            )}
            {step === 4 && (
                <ContractVerificationPageContainer>
                    {console.log(analysisResult)}
                    <AnalysisResult score={dummyData.score} results={dummyData.results} />
                </ContractVerificationPageContainer>
            )}
        </>
    );
}
