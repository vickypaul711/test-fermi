'use client';

import clsx from 'clsx';
import styles from './input.module.css';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix'> {
  label: string;
  error?: string;
  helperText?: string;
  maxLength?: number;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export default function Input({
  label,
  error,
  helperText,
  maxLength,
  prefix,
  suffix,
  value = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${label.replace(/\s+/g, '-')}`;

  return (
    <div className={styles.wrapper}>
      <div
        className={clsx(styles.inputContainer, {
          [styles.hasError]: error,
          [styles.disabled]: props.disabled,
        })}
      >
        {prefix && value && <span className={styles.prefix}>{prefix}</span>}

        <input
          id={inputId}
          value={value}
          maxLength={maxLength}
          placeholder=" "
          className={styles.input}
          {...props}
        />

        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>

        {suffix && value && <span className={styles.suffix}>{suffix}</span>}
      </div>

      <div className={styles.meta}>
        <span
          className={clsx(styles.helper, {
            [styles.errorText]: error,
          })}
        >
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