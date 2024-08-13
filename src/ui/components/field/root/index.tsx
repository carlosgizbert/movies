import { forwardRef, ChangeEventHandler, ComponentProps, InputHTMLAttributes, ReactNode } from 'react';
import { Wrapper } from '../wrapper';
import { Label } from '../label';
import { Input } from '../input';

import * as S from './styles';

interface RootProps extends InputHTMLAttributes<HTMLInputElement> {
  endElement?: ReactNode;
  wrapperProps?: ComponentProps<typeof Wrapper>;
  isRequired?: boolean;
  label?: string;
  labelProps?: ComponentProps<typeof Label>;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  startElement?: ReactNode;
  value?: string | number | readonly string[];
}

export const Root = forwardRef<HTMLInputElement, RootProps>(function Root(
  {
    label,
    wrapperProps,
    labelProps,
    placeholder,
    isRequired,
    startElement,
    endElement,
    onChange,
    value,
    ...props
  }: Readonly<RootProps>,
  ref
) {
  return (
    <Wrapper {...wrapperProps} className="rater-field-wrapper">
      {label && (
        <Label {...labelProps} className="rater-field-label">
          {label} {isRequired && <S.Asterisk>*</S.Asterisk>}
        </Label>
      )}
      <Input
        ref={ref}
        className="rater-field-input"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        startElement={startElement}
        endElement={endElement}
        {...props}
      />
    </Wrapper>
  );
});
