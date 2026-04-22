'use client';

import styles from './input.module.css';
import clsx from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
}

export default function Input({
  label,
  error,
  helperText,
  maxLength,
  value = '',
  ...props
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputContainer}>
        <input
          className={clsx(styles.input, {
            [styles.error]: error,
          })}
          value={value}
          maxLength={maxLength}
          {...props}
          placeholder=" "
        />
        <label className={styles.label}>{label}</label>
      </div>

      <div className={styles.meta}>
        <span className={styles.helper}>
          {error ? error : helperText}
        </span>
        {maxLength && (
          <span className={styles.counter}>
            {String(value).length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}