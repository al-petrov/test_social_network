import { fileAPI } from '../api/api';

const ADD_FILE = 'ADD-FILE';
const SET_USER_FILES = 'SET-USER-FILES';

let initialState = {
  currentFiles: [],
  filesCount: 0,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILE:
      let newFile = {
        id: action.id,
        ownerId: action.ownerId,
        dataType: action.dataType,
        fileName: action.fileName,
        fileDesc: action.fileDesc,
        uploadDate: action.uploadDate,
        fileUrl: action.fileUrl,
        previewUrl: action.previewUrl,
        lastModified: action.lastModified,
        fileSize: action.fileSize,
      };
      return {
        ...state,
        filesCount: state.filesCount + 1,
        currentFiles: [newFile, ...state.currentFiles],
      };
    case SET_USER_FILES:
      return {
        ...state,
        filesCount: action.count,
        currentFiles: action.files,
      };
    default:
      return state;
  }
};

export const addFileAC = fileObj => {
  return {
    type: ADD_FILE,
    ...fileObj,
  };
};

export const setCurrentFilesAC = (files, count) => ({ type: SET_USER_FILES, files, count });

export const setCurrentFiles = (userId, currentPage, pageSize, dataType) => {
  return dispatch => {
    fileAPI.getFiles(userId, currentPage, pageSize, dataType).then(data => {
      dispatch(setCurrentFilesAC(data.files, data.count));
    });
  };
};

export const addFile = (ownerId, type, fileName, fileDesc, uploadDate, fileUrl, previewUrl, lastModified, fileSize) => {
  return dispatch => {
    fileAPI
      .addFile(ownerId, type, fileName, fileDesc, uploadDate, fileUrl, previewUrl, lastModified, fileSize)
      .then(response => {
        let fileOBj = {
          ownerId: response.owner_id,
          dataType: response.data_type,
          fileName: response.file_name,
          fileDesc: response.file_description,
          uploadDate: response.upload_date,
          fileUrl: response.file_url,
          previewUrl: response.preview_url,
          lastModified: response.last_modified,
          fileSize: response.file_size,
        };
        dispatch(addFileAC(fileOBj));
      });
  };
};

export default fileReducer;
