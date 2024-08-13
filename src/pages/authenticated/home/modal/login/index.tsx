import { Field } from "@/ui/components/field";
import { Button } from "@/ui/components";
import { Modal } from "@/ui/components/modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormType } from "./schema";
import { ErrorMessage } from "@/ui/components/errorMessage";
import { FieldWrapper } from "../register/styles";
import * as S from "./styles";
import { useState } from "react";
import { EyeClosed, EyeOpened } from "@/ui/components/icons";
import { ButtonEye } from "../styles";

interface ModalLoginProps {
  onClickRegister: () => void;
}

export const ModalLogin = ({ onClickRegister }: ModalLoginProps) => {
  const [passIsVisible, setPassIsVisible] = useState<boolean>(false);

  const togglePassVisibility = () => setPassIsVisible(!passIsVisible);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>({
    mode: "onChange",
    resolver: zodResolver(loginFormSchema),
  });

  function handleLogin(formData: LoginFormType) {}

  return (
    <Modal
      type="unclosable"
      padding={48}
      width={481}
      open
      title={
        <S.Header>
          <S.Title>Acesse sua conta</S.Title>
          <S.Subtitle>Bem vindo de volta! Entre com seus dados.</S.Subtitle>
        </S.Header>
      }
    >
      <S.Container>
        <form onSubmit={handleSubmit(handleLogin)}>
          <FieldWrapper>
            <Field
              {...register("email")}
              label="E-mail"
              placeholder="Digite seu e-mail"
              isRequired
            />
            {errors.email?.message && (
              <ErrorMessage>{errors.email?.message}</ErrorMessage>
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
          <Button fullWidth>Fazer login</Button>
        </form>
        <S.Text>
          Não tem uma conta ainda?{" "}
          <S.Redirect onClick={() => onClickRegister()}>
            Criar uma conta
          </S.Redirect>
        </S.Text>
      </S.Container>
    </Modal>
  );
};
