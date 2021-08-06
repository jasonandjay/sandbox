import request from '../utils/request';

// 获取左侧界面数据请求
export const getLeftPageData = async () => {
  return request('https://www.fastmock.site/mock/501cc679d21dd9b5b72e155c068e0b75/bigscreen/api/leftPageData').then(response => {
    return response.data;
  });
};

// 获取中间界面数据请求
export const getCenterPageData = async () => {
  return request('https://www.fastmock.site/mock/501cc679d21dd9b5b72e155c068e0b75/bigscreen/api/centerPageData').then(response => {
    return response.data;
  });
};

// 获取右侧界面数据请求
export const getRightPageData = async () => {
  return request('https://www.fastmock.site/mock/501cc679d21dd9b5b72e155c068e0b75/bigscreen/api/rightPageData').then(response => {
    return response.data;
  });
};
