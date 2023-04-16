import { Field } from 'formik';

import convertToId from '@/utils/convertToId';

interface LabelProps {
  label: string;
}

interface TextInput {
  placeholder: string;
  label: string;
  error: string;
  type?: 'email' | 'password' | 'text';
}

const baseStyles =
  'block w-full bg-inherit py-2.5 px-4 rounded border border-slate-300 text-slate-800 focus:outline-none focus:border-slate-600 focus:ring-1 focus:ring-slate-600 placeholder:text-slate-400';

export function Label({ label }: LabelProps) {
  return (
    <label htmlFor={convertToId(label)} className='block font-semibold'>
      {label}
    </label>
  );
}

export function TextInput({
  placeholder,
  label,
  error,
  type = 'text',
}: TextInput) {
  const id = convertToId(label);

  return (
    <div>
      <Label label={label} />
      <div className='mt-1'>
        <Field
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          className={`${baseStyles} ${error ? 'border-red-600' : ''}`}
        />
      </div>
      {error && <div className='mt-1 text-sm text-red-600'>{error}</div>}
    </div>
  );
}
