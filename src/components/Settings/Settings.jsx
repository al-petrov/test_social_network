import React from 'react';
import m from './Settings.module.css';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators';
import { Input } from '../Common/FormsControls/FormsControl';
import { Image } from 'antd';
import SettingsImageUploader from './SettingsImageUploader';

let maxLengthCreator25 = maxLengthCreator(25);
let maxLengthCreator255 = maxLengthCreator(255);

const SettingsForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={m.loginComponent}>
        <div className={m.loginBlock}>
          {/* <div className={m.}> */}
          <div className={m.textLogin}>login:</div>
          <Field
            className={m.inputLogin}
            placeholder={'login'}
            name={'login'}
            component={Input}
            validate={[required, maxLengthCreator25]}
          />
          <div className={m.textLogin}>username:</div>
          <Field
            className={m.inputLogin}
            placeholder={'user name'}
            name={'username'}
            component={Input}
            validate={[required, maxLengthCreator255]}
          />
          <div className={m.textLogin}>country:</div>
          <Field
            className={m.inputLogin}
            placeholder={'country'}
            name={'country'}
            component={Input}
            validate={[maxLengthCreator255]}
          />
          <div className={m.textLogin}>status:</div>
          <Field
            className={m.inputLogin}
            placeholder={'status'}
            name={'status'}
            component={Input}
            validate={maxLengthCreator255}
          />
          <div className={m.textLogin}>image:</div>
          <div>
            <Image width={200} src={props.initialValues.image} />
            <Field
              className={m.inputLogin}
              placeholder={'image'}
              name={'image'}
              component={Input}
              validate={[maxLengthCreator255]}
            />
            <SettingsImageUploader uploadImage={props.uploadImage} />
          </div>
          <button className={m.buttonSend}>ENTER</button>
        </div>
      </div>
    </form>
  );
};

const SettingsReduxForm = reduxForm({ form: 'settings' })(SettingsForm);

const Settings = props => {
  const onSubmit = formData => {
    if (formData.image && formData.image.length > 255) {
      alert('cant set fields over 255 symbols!');
    } else {
      props.updateUserData(
        props.myID,
        // formData.login || null,
        formData.country || null,
        formData.username || null,
        formData.image || null,
        formData.status || null,
      );
    }
  };
  return (
    <div>
      <SettingsReduxForm
        onSubmit={onSubmit}
        uploadImage={props.uploadImage}
        initialValues={{
          login: props.login,
          username: props.userName,
          status: props.userStatus,
          image: props.userImg,
        }}
      />
    </div>
  );
};

export default Settings;
