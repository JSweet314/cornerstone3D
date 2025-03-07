import deepFreeze from '../utilities/deepFreeze';

const MPR_CAMERA_VALUES = {
  axial: {
    viewPlaneNormal: [0, 0, -1],
    viewUp: [0, -1, 0],
    viewRight: [1, 0, 0],
  },
  sagittal: {
    viewPlaneNormal: [1, 0, 0],
    viewUp: [0, 0, 1],
    viewRight: [0, 1, 0],
  },
  coronal: {
    viewPlaneNormal: [0, -1, 0],
    viewUp: [0, 0, 1],
    viewRight: [1, 0, 0],
  },
};

// Note: Object.freeze is only shallow, so we need to deepFreeze
const mprCameraValues = deepFreeze(MPR_CAMERA_VALUES);
export default mprCameraValues;
