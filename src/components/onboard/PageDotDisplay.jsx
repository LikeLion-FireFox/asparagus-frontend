import styled from 'styled-components';

const DotContainer = styled.div`
  position: absolute;
  bottom: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => (props.$active ? '#1a365d' : '#D9D9D9')};
  transition: background-color 0.3s;
`;

export const PageDotDisplay = ({ totalPages, currentPage }) => {
  return (
    <DotContainer>
      {Array.from({ length: totalPages }).map((_, index) => (
        <Dot key={index} $active={index === currentPage} />
      ))}
    </DotContainer>
  );
};
