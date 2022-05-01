import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

// const buttonProps = {
//   name: 'file',
//   action: file => props.uploadImage(file),
//   // action: 'https://barabulka.site/webdav/IMG_0340.JPG',
//   onChange(info) {
//     if (info.file.status !== 'uploading') {
//       console.log(info.file, info.fileList);
//     }
//     if (info.file.status === 'done') {
//       message.success(`${info.file.name} file uploaded successfully`);
//     } else if (info.file.status === 'error') {
//       message.error(`${info.file.name} file upload failed.`);
//     }
//   },
// };

export default props => (
  <Upload
    {...{
      name: 'file',
      action: file => props.uploadImage(file),
      // action: 'https://barabulka.site/webdav/test1234.JPG',
      // crossOrigin: 'anonymous',
      headers: {
        Authorization: 'Basic d2VidXNlcjoxMjM0NTZ5dHJld3E=',
      },
      method: 'put',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }}
  >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
