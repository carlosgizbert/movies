import { hexToRgba } from '@/ui/utils';
import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.rounded.large};
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;

  cursor: pointer;
`;

export const BackgroundImage = styled.div<{ imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: inherit;
  transition: all 1s ease;
  

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0.3) 1%,
      rgba(0, 0, 0, 0.3) 50%, 
      rgba(0, 0, 0, 0.5) 100%
    );
    transition: all 0.5s ease;
    border-radius: inherit;
  }

  ${Card}:hover &::before {
    transition: all 0.5s ease;
    background: linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0.5) 1%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }

  ${Card}:hover & {
    transition: all 0.5s ease;
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.3);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};

  padding: 48px;
`;

export const Header = styled.header`
  display: flex;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const RatingStar = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  background-color: ${({ theme }) => hexToRgba(theme.colors.text20, 0.3)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: ${({ theme }) => theme.rounded.xsmall};
  padding: 4px 6px;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    background-color: ${({ theme }) => hexToRgba(theme.colors.text20, 0.2)};
  }
`;

export const Emphasis = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  width: fit-content;
  background-color: ${({ theme }) => hexToRgba(theme.colors.text20, 0.3)};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  border-radius: ${({ theme }) => theme.rounded.xsmall};
  padding: ${({ theme }) => theme.spacing.small};
  font-size: 20px;
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  transition: all 0.5s ease;
`;

export const ButtonFavorite = styled.span`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  background-color: ${({ theme }) => hexToRgba(theme.colors.text20, 0.3)};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  border-radius: ${({ theme }) => theme.rounded.xsmall};
  padding: 4px 6px;
  transition: all 0.5s ease;

  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);

  &:hover {
    transition: all 0.5s ease;
    background-color: ${({ theme }) => hexToRgba(theme.colors.text20, 0.2)};
  }
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSize.title.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ButtonLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: 20px;
  cursor: pointer;
`
