import { Image, Pagination } from 'antd';
import React, { useEffect, useState } from 'react';

const FotoComp = props => {
  let [currentPage, setCurrentPage] = useState(1);
  let pageSize = 20;

  let pageChange = pageNumber => {
    props.setCurrentFiles(props.myID, pageNumber, pageSize, 'image/jpeg');
  };

  useEffect(() => {
    if (props.myID) {
      props.setCurrentFiles(props.myID, currentPage, pageSize, 'image/jpeg');
    }
  }, [props.myID]);

  let allImages = props.currentFiles.map(p => <Image width={300} height={300} src={p.file_url} align={'bottom'} />);

  return (
    <div>
      <Image.PreviewGroup>{allImages}</Image.PreviewGroup>;
      <Pagination
        size="small"
        defaultCurrent={1}
        total={props.filesCount}
        onChange={pageChange}
        defaultPageSize={pageSize}
      />
    </div>
  );
};

export default FotoComp;
