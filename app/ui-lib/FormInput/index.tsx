import clsx from 'clsx';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type FormInputType = {
  error?: FieldError;
  type: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  className?: string;
};

function FormInput({ error, type, register, placeholder, className }: FormInputType) {
  return (
    <div className="mb-5 flex flex-col">
      {type === 'textarea' ? (
        <textarea
          {...register}
          className={clsx(
            'textarea textarea-bordered resize-none bg-purple-950 p-4 placeholder:text-gray-400',
            className && className,
          )}
          placeholder={placeholder}
          rows={5}
        ></textarea>
      ) : (
        <input
          type={type}
          {...register}
          className={clsx(
            'input input-bordered bg-purple-950 placeholder:text-gray-400',
            className && className,
          )}
          placeholder={placeholder}
        />
      )}
      {error && <small className="mt-2 text-red-700">{error.message}</small>}
    </div>
  );
}

export default FormInput;
