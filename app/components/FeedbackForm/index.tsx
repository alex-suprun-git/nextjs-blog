import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { sendFeedbackEmail } from '@/app/actions/sendFeedbackForm';
import { FeedbackFormData } from '@/app/types';
import { Form, FormInput } from '@/app/ui-lib';
import { feedbackFormSchema } from '@/app/formSchemas';

export default function FeedbackForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: FeedbackFormData) => {
    await sendFeedbackEmail(data);
    reset();
    setIsSubmitted(true);
  };

  return (
    <>
      {isSubmitted ? (
        <h3 className="py-16 text-center text-3xl text-gray-200">Thank you for your feedback!</h3>
      ) : (
        <Form action={handleSubmit(onSubmit)}>
          <h2 className="mb-10 mt-4 text-center text-2xl">Please leave your feedback</h2>
          <FormInput
            register={register('name')}
            type={'text'}
            placeholder={'Your Name *'}
            error={errors.name}
            className="text-sm"
          />
          <FormInput
            register={register('email')}
            type={'email'}
            placeholder={'Your Email *'}
            error={errors.email}
            className="text-sm"
          />
          <FormInput
            register={register('message')}
            type={'textarea'}
            placeholder={'Your Feedback *'}
            error={errors.message}
          />
          <button
            className="btn ml-auto mt-4 bg-brand-pink text-stone-900 hover:bg-brand-light-pink"
            type="submit"
            disabled={!isValid}
          >
            Submit
          </button>
        </Form>
      )}
    </>
  );
}
