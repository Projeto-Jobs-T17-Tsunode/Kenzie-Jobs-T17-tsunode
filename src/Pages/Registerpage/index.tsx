import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Header } from "../../components/Header/index";
import { registerFormSchema } from "../../Schema/RegisterSchema";
import { CompanyContext } from "../../providers/CompanyContext/index";
import { ICompanyRegister } from "../../providers/CompanyContext/@types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Title1 } from './../../Styles/Typography';
import { StyledForm, StyledFormSection } from './style';
import { Input } from './../../components/Input/index';

interface FormData extends ICompanyRegister {
  password: string;
}

export const RegisterPage = () => {
  const { registerCompany } = useContext(CompanyContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      console.log(formData);
      await registerCompany(formData);
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section>
        <button>Voltar</button>
      </section>

      <StyledFormSection>
      <Title1 font="var(--color-blue)">Cadastrar-se</Title1>

        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" {...register("name")} placeholder="Nome da empresa" error={errors.name} />

          <Input type="email" {...register("email")} placeholder="E-mail" error={errors.email}/>

          <Input type="password" {...register("password")} placeholder="Senha" error={errors.password}/>

          <Input type="password" {...register("confirm")} placeholder="Confirmar senha" error={errors.confirm}/>
         
          <button type="submit">Cadastrar-se</button>
        </StyledForm>
      </StyledFormSection>

      <section></section>
      <ToastContainer />
    </>
  );
};
