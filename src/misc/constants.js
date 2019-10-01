"use struct";

// 画像の元の場所
export const ImageSourceType = {
  FromLocal: 0,
  FromUrl:   1,
};

// 処理のステップの状態
export const Step = {
  UploadImage:   0,
  SelectArea:    1,
  DownloadImage: 2,
};
