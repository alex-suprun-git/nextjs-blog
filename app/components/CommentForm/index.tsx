'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CommentFormData } from '@/app/types';
import { Form, FormInput } from '@/app/ui-lib';
import { commentFormSchema } from '@/app/formSchemas';

export default function CommentForm() {
  const [_isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<CommentFormData>({
    resolver: zodResolver(commentFormSchema),
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
        <div className="flex flex-wrap">
          <FormInput
            register={register('commentName')}
            type="text"
            placeholder="Your Name *"
            className="mr-6 text-sm"
            error={errors.commentName}
          />
          <FormInput
            register={register('commentEmail')}
            type="email"
            placeholder="Your E-Mail *"
            className="text-sm"
            error={errors.commentEmail}
          />
        </div>
        <FormInput
          register={register('commentText')}
          type={'textarea'}
          placeholder={'Add to the discussion *'}
          error={errors.commentText}
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
