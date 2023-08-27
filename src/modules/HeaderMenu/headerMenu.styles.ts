import styled from 'styled-components';

export const HeaderMenuContainer = styled.div`
  display: flex;
  background: ${props => props.theme.background.secondary};
  max-width: 1024px;
  min-width: 500px;
  height: 3.75rem;
  width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  align-items: center;
  box-shadow: 0 4px 8px ${props => props.theme.shadows.full};
  margin-top: 2.5rem;
  justify-content: space-between;
`;
