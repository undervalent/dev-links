"use client";
import * as React from 'react'
import Image from "next/image";
import * as Styled from "../styles";
import Link from "next/link";
import LogoLarge from "../../../assets/images/logo-devlinks-large.svg";
import { AppProvider } from "../../../lib/styles/theme-provider";
import { Button, Input } from "@/app/components";
import { z } from 'zod';

import { useFormValidator } from '@/app/hooks';

const formValidator = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
  confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"], // path of error
  });


export default function CreateAccount() {
  const [{ errors }, { handleSubmit }] = useFormValidator(formValidator);

  return (
    <AppProvider>
      <Styled.PageContainer>
        <h1>
          <Link href="/">
            <Image src={LogoLarge} alt="dev links logo" />
          </Link>
        </h1>
        <Styled.FormContainer onSubmit={handleSubmit}>
          <Styled.Title>Create account</Styled.Title>
          <Styled.SubTitle>
            Let’s get you started sharing your links!
          </Styled.SubTitle>
          <Styled.FormRoot>
            <Input
              label="Email address"
              name="email"
              placeholder="e.g. alex@email.com"
              type="email"
              error={errors?.email}
            />
            <Input
              label="Create Password"
              name="password"
              placeholder="At least 8 characters"
              type="password"
              error={errors?.password}
            />
            <Input
              label="Confirm Password"
              name="confirm"
              placeholder="At least 8 characters"
              type="password"
              error={errors?.confirm}
            />
            <Styled.FooterSubTitle>
              Password must contain 8 characters
            </Styled.FooterSubTitle>
            <Button fullWidth>Create new account</Button>
          </Styled.FormRoot>
          <Styled.Footer>
            <Styled.Message>Already have an account?</Styled.Message>{" "}
            <Styled.Url href="/">Login</Styled.Url>
          </Styled.Footer>
        </Styled.FormContainer>
      </Styled.PageContainer>
    </AppProvider>
  );
}
