import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field } from "@/ui/components/field";
import { Button } from "@/ui/components";
import { Modal } from "@/ui/components/modal";
import { registerFormSchema, RegisterFormType } from "./schema";
import { ErrorMessage } from "@/ui/components/errorMessage";
import { FieldWrapper } from "@/ui/components/fieldWrapper";
import { EyeClosed, EyeOpened } from "@/ui/components/icons";
import { ButtonEye } from "../styles";
import { Link } from "@/ui/components/link";

import * as S from "./styles";

interface ModalRegisterProps {
  onClickLogin: () => void;
  onFakeRegister: () => void;
}

export const ModalRegister = ({ onClickLogin, onFakeRegister }: ModalRegisterProps) => {
  const [passIsVisible, setPassIsVisible] = useState<boolean>(false);

  const togglePassVisibility = () => setPassIsVisible(!passIsVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>({
    mode: "onChange",
    resolver: zodResolver(registerFormSchema),
  });

  function handleRegister(formData: RegisterFormType) {
    onFakeRegister()
  }

  return (
    <Modal
      type="unclosable"
      padding={48}
      open
      width={481}
      title={
        <S.Header>
          <S.Title>Crie sua conta</S.Title>
          <S.Subtitle>Insira seus dados para completar o cadastro.</S.Subtitle>
        </S.Header>
      }
    >
      <S.Container>
        <form onSubmit={handleSubmit(handleRegister)}>
          <FieldWrapper>
            <Field
              {...register("username")}
              label="Nome completo"
              placeholder="Digite seu nome"
              isRequired
            />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Field
              {...register("email")}
              label="E-mail"
              placeholder="Digite seu e-mail"
              isRequired
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Field
              {...register("password")}
              type={passIsVisible ? 'text' : 'password'}
              label="Senha"
              placeholder="Digite sua senha"
              isRequired
              endElement={
                <ButtonEye
                  type="button"
                  onClick={togglePassVisibility}
                >
                  {passIsVisible ? (
                    <EyeClosed />
                  ) : (
                    <EyeOpened />
                  )}
                </ButtonEye>
              }
            />
            {errors.password?.message && (
              <ErrorMessage>{errors.password?.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <FieldWrapper>
            <Field
              {...register("confirmPassword")}
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              type="password"
              isRequired
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </FieldWrapper>
          <Button fullWidth type="submit">
            Registrar
          </Button>
        </form>
        <S.Text>
          Já tem uma conta?{" "}
          <Link onClick={onClickLogin}>Fazer login</Link>
        </S.Text>
      </S.Container>
    </Modal>
  );
};
