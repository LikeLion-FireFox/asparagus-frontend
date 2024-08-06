import styled from "styled-components"

import { Paragraph } from "../typograph/Paragraph"
import { Chip } from "../forms/Chip"


const ContractReviewBox = styled.div`
    & > span {
        margin-left: 8px;
    }

    display: flex;
    flex-direction: column;
    gap: 13px;

    margin-top: 40px;
`

const ChipBox = styled.div`
    display: flex;
    gap: 14px;
`

export const ContractReview = ({ safeCount, warningCount }) => {
    return (
        <ContractReviewBox>
            <Paragraph size="s" weight="bold" variant="#1A365D">최근 1개월 계약서 검토 결과</Paragraph>
            <ChipBox>
                <Chip variant="#E3F9EA"><Paragraph size="xs" weight="bold" variant="#579f6e">이상없음: {safeCount ?? 0}건</Paragraph></Chip>
                <Chip variant="#FEEFE6"><Paragraph size="xs" weight="bold" variant="#cf7135">위법 계약서 의심: {warningCount ?? 0}건</Paragraph></Chip>
            </ChipBox>
        </ContractReviewBox>
    )
}