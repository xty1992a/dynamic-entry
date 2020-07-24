# dynamic-entry

一个动态添加entry的webpack项目
## run
1. 启动`npm run serve`
2. 访问 http://localhost:port
3. 选择链接点击进入
4. 页面第一次进入需要初始化编译,有一定耗时

## 实现
启动一个服务器,扫描指定文件夹下的所有入口,将入口设置为服务器的路由.  
第一次访问该路由时,将该入口加入webpack编译中.  
