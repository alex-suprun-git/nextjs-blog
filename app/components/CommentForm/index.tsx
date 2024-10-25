'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CommentFormData } from '@/app/types';
import { formSchema } from '@/app/formSchema';
import { Form, FormInput } from '@/app/ui-lib';

export default function CommentForm() {
  const [_isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CommentFormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const onSubmit = (_data: CommentFormData) => {
    reset();
    setIsSubmitted(true);
  };

  return (
    <>
      <h2 className="mb-6 text-2xl font-semibold">Share your thoughts</h2>
      <Form action={handleSubmit(onSubmit)}>
        <FormInput
          register={register('comment')}
          type={'textarea'}
          placeholder={'Add to the discussion'}
          error={errors.comment}
        />
        <button
          className="btn ml-auto bg-brand-pink text-stone-900 hover:bg-brand-light-pink"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </Form>
    </>
  );
}
