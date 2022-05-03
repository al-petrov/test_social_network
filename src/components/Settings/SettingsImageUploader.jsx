import { Upload, message, Button, Progress } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from 'react';
import axios from 'axios';
import { instance } from '../../api/api';
import { v4 as uuidv4 } from 'uuid';

const MyUploader = props => {
  const [defaultFileList, setDefaultFileList] = useState([]);
  // const [progress, setProgress] = useState(0);

  const uploadImage = async options => {
    const { onSuccess, onError, file, onProgress } = options;
    const config = {
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        // setProgress(percent);
        if (percent === 100) {
          // setTimeout(() => setProgress(0), 1000);
          // onSuccess('ok');
          //setTimeout(() => onProgress({ percent: 0 }), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    const baseURL = instance.defaults.baseURL;
    const fileName = uuidv4() + file.name.substring(file.name.lastIndexOf('.'), file.name.length);
    try {
      await instance.put('redirect/' + fileName, file, config);
      console.log('image upload success');
      props.newProfileImage(baseURL + '/redirect/' + fileName);
      props.addFile(
        props.myID,
        file.type,
        file.name,
        'user avatar',
        new Date(),
        baseURL + '/redirect/' + fileName,
        '',
        file.lastModifiedDate,
        file.size,
      );
      onSuccess('ok');
    } catch (err) {
      console.log('image upload error');
      props.newProfileImage(baseURL + '/redirect/' + fileName);
      props.addFile(
        props.myID,
        file.type,
        file.name,
        'user avatar',
        new Date(),
        baseURL + '/redirect/' + fileName,
        '',
        file.lastModifiedDate,
        file.size,
      );
      onSuccess('ok');
    }
  };

  const handleOnChange = ({ file, fileList, event }) => {
    setDefaultFileList(fileList);
    if (file.status === 'done') {
      console.log(file, fileList);
      message.success(`${file.name} file uploaded successfully`);
    } else if (file.status === 'error') {
      message.error(`${file.name} file upload failed.`);
    }
  };

  return (
    <div>
      <Upload
        name={'file'}
        customRequest={uploadImage}
        onChange={handleOnChange}
        defaultFileList={defaultFileList}
        multiple={true}
      >
        <Button icon={<UploadOutlined />}>Click to Upload</Button>
      </Upload>
      {/* {progress > 0 ? <Progress percent={progress} /> : null} */}
    </div>
  );
};

export default MyUploader;
