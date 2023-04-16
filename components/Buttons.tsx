import clsx from 'clsx';

interface ButtonProps {
  children: string;
  className?: string;
  type?: 'button' | 'submit';
  onClickHandler?: () => void;
}

const baseStyle =
  'group inline-flex items-center justify-center rounded py-2 px-7 font-semibold focus:outline-none';

export function ButtonSolid({
  children,
  className,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        baseStyle,
        className,
        'bg-slate-800 text-slate-50 hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 '
      )}
    >
      {children}
    </button>
  );
}

export function ButtonOutline({
  children,
  className,
  type = 'button',
  onClickHandler,
}: ButtonProps) {
  return (
    <button
      onClick={onClickHandler}
      type={type}
      className={clsx(
        baseStyle,
        className,
        'ring-1 ring-slate-300 text-slate-700 hover:text-slate-800 hover:ring-slate-500 active:bg-slate-100 active:text-slate-600 focus-visible:outline-emerald-500 focus-visible:ring-slate-300'
      )}
    >
      {children}
    </button>
  );
}
