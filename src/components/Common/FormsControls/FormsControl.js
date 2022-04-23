import { Button, Input as InputAntd } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React from 'react';
import styles from './FormsControl.module.css';

export const Textarea = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControlTextarea + ' ' + (hasError ? styles.error : '')}>
      <textarea {...input} {...props} />
      {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
    </div>
  );
};

export const Input = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <InputAntd {...input} {...props} />
      {hasError && <span className={styles.errorSpan}>{meta.error}</span>}
    </div>
  );
};
