import axios from "axios";
import { baseURL } from "@/config";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

//

class HttpRequest {
  constructor(baseUrl = baseURL) {
    //这个this指代我们要创建的实例
    this.baseUrl = baseURL;
    this.queue = {};
  }
  getInsideConfig() {
    const config = {
      //
      baseUrl: this.baseUrl,
      headers: {}
    };
    return;
  }
  //拦截器
  interceptors(instance, url) {
    //请求拦截器
    instance.interceptors.request.use(
      config => {
        //添加一个全局的loading
        if (!Object.keys(this.queue).length) {
          //Spin.show()
        }
        this.queue[url] = true;
        console.log(config);
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );
    //响应拦截器
    instance.interceptors.response.use(
      res => {
        delete this.queue[url];
        console.log(res);
        return res;
      },
      error => {
        delete this.queue[url];
        return Promise.reject(error);
      }
    );
  }
  request(options) {
    const instance = axios.create();
    //参数合并
    options = Object.assign(this.getInsideConfig(), options);
    this.interceptors(instance);
    return instance(options, options.url);
  }
}

export default HttpRequest;
