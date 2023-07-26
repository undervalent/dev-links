import React from 'react'
import { generateFormErrors } from '@/app/lib/utils';

interface State {
  errors: Record<string, string>
}

interface Handlers {
  handleSubmit(e:React.SyntheticEvent<HTMLFormElement>): Promise<void>
}

export function useFormValidator(formValidator: any): [State,Handlers] {
  const [errors, setErrors] = React.useState<any>(null)

  const handlers = {
    handleSubmit: async (e:React.SyntheticEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const data = new FormData(e.target);
    const error = await generateFormErrors(data, formValidator);
    setErrors(error)
     },
  }

  const state = {
    errors,
  }
  return [state, handlers];
}
