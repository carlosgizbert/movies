import { hexToRgba } from '@/ui/utils';
import styled from 'styled-components'

export const Container = styled('div')<{ open: boolean }>`
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.open ? 1 : 0)};
  pointer-events: ${(props) => (props.open ? 'all' : 'none')};
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
`

export const Overlay = styled('div')`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  background-color: ${(props) => hexToRgba(props.theme.colors.background10, 0.4)};
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 100;
`;

export const ModalBox = styled('div')<{ width?: number, padding?: number }>`
  display: flex;
  position: absolute;
  flex-direction: column;
  max-height: 95vh;
  width: ${(props) => (props.width ? props.width + 'px' : 'auto')};
  max-width: 95vw;
  padding: ${(props) => props.padding ? `${props.padding + 'px'}` : props.theme.spacing.medium};
  background-color: ${(props) => props.theme.colors.background10};
  color: ${(props) => props.theme.colors.text20};
  border-radius: ${(props) => props.theme.rounded.medium};
  transition: 0.1s;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 3px 7px rgb(0 0 0 / 30%);
  background-clip: padding-box;
  z-index: 102;

  @media screen and (max-width: 1024px) {
    min-width: 92vw;
  }
`

export const Header = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleBox = styled('div')<{ align: string }>`
  text-align: ${(props) => props.align};
  display: block;
  width: 100%;
  margin-bottom: ${(props) => props.theme.spacing.medium};
  flex: 1;
`

export const CloseButton = styled('button')`
  border: 0;
  outline: none;
  background: transparent;
  cursor: pointer;
  align-self: flex-start;
  width: 24px;
  height: 24px;
`

export const Content = styled('div')`
  &::-webkit-scrollbar {
    background-color: ${(props) => props.theme.colors.background20};
    border-bottom-right-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.background20};
    border-radius: 0.5rem;
    border: 4px solid ${(props) => props.theme.colors.background10};
    background-clip: content-box;
    width: 0.5rem;
  }
`