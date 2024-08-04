import React, { useState } from "react";
import GaugeComponent from "react-gauge-component";

import { Paragraph } from "@/components/typograph/Paragraph";
import { Text } from "@/components/typograph/Text";

import {
    ResultContainer,
    GaugeWrapper,
    ScoreWrapper,
    ResultList,
    ResultItem,
    ResultItemDetails,
    Divider,
} from "./AnalysisResult.styled";

const AnalysisResult = ({ score, results }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const handleItemClick = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <ResultContainer>
            <GaugeWrapper>
                <GaugeComponent
                    value={score}
                    minValue={400}
                    maxValue={850}
                    type="radial"
                    labels={{
                        tickLabels: {
                            type: "inner",
                            ticks: [{ value: 400 }, { value: 550 }, { value: 620 }, { value: 750 }, { value: 850 }],
                        },
                        valueLabel: {
                            formatTextValue: () => "",
                        },
                    }}
                    arc={{
                        colorArray: ["#7AADF4", "#3D78CA", "#2062BE", "#1A509C", "#0E2B56"],
                        subArcs: [{ limit: 400 }, { limit: 550 }, { limit: 620 }, { limit: 750 }, { limit: 850 }],
                        padding: 0.04,
                        width: 0.1,
                    }}
                    pointer={{
                        elastic: true,
                        animationDelay: 0,
                    }}
                />
                <ScoreWrapper>
                    <Paragraph size="l" variant="gray">
                        Good
                    </Paragraph>
                    <Paragraph size="xxl" weight="bold">
                        {score}
                    </Paragraph>
                </ScoreWrapper>
            </GaugeWrapper>

            <ResultList>
                {results.map((item, index) => (
                    <React.Fragment key={index}>
                        <ResultItem key={index} onClick={() => handleItemClick(index)}>
                            <Text size="l" variant="navy" weight="bold">
                                {item.description}
                            </Text>
                            <Text
                                size="l"
                                weight="bold"
                                variant={
                                    item.status === "안전"
                                        ? "success"
                                        : item.status === "주의"
                                          ? "warning"
                                          : item.status === "위험"
                                            ? "danger"
                                            : ""
                                }
                                style={{ whiteSpace: "nowrap" }}
                            >
                                {item.status}
                            </Text>
                        </ResultItem>
                        {expandedIndex === index && (
                            <ResultItemDetails>
                                {item.details.map((detail, index) => (
                                    <Paragraph variant="secondary" key={index}>
                                        {detail}
                                    </Paragraph>
                                ))}
                            </ResultItemDetails>
                        )}
                        {index < results.length - 1 && <Divider />}
                    </React.Fragment>
                ))}
            </ResultList>
        </ResultContainer>
    );
};

export default AnalysisResult;
