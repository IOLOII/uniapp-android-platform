
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/samples/ucharts/ucharts","pages/login/login","pages/user/person/person","pages/user/setting/avatar/avatar","pages/user/setting/password/password","pages/samples/basics/home","pages/samples/component/home","pages/samples/plugin/home","pages/samples/basics/layout","pages/samples/basics/background","pages/samples/basics/text","pages/samples/basics/icon","pages/samples/basics/button","pages/samples/basics/design","pages/samples/basics/tag","pages/samples/basics/avatar","pages/samples/basics/progress","pages/samples/basics/shadow","pages/samples/basics/loading","pages/samples/component/bar","pages/samples/component/nav","pages/samples/component/list","pages/samples/component/card","pages/samples/component/form","pages/samples/component/timeline","pages/samples/component/chat","pages/samples/component/swiper","pages/samples/component/modal","pages/samples/component/steps","pages/samples/plugin/indexes","pages/samples/plugin/animation","pages/samples/plugin/drawer","pages/samples/plugin/verticalnav","pages/message/message","pages/workbench/workbench","pages/apps/apps","pages/home/home","pages/addressbook/addressbook","pages/samples/ucharts/ucharts","pages/apps/notification/notification","pages/apps/mail/mail","pages/apps/notification/notificationDetail","pages/apps/notification/oaNotifyForm","pages/apps/mail/inbox","pages/apps/mail/outbox","pages/apps/mail/draft","pages/apps/mail/trash","pages/apps/mail/sendEmailForm","pages/apps/mail/sendEmailDetail","pages/apps/mail/ReceivedMailDetail","pages/apps/mail/TrashMailDetail","pages/workbench/task/ApplyList","pages/workbench/task/TodoList","pages/workbench/task/HistoryList","pages/workbench/task/FlowCopyList","pages/workbench/task/TaskForm","pages/test/activiti/TestActivitiLeaveForm","pages/workbench/task/TaskFormDetail","pages/test/mobile/TestMobileForm","pages/test/mobile/TestMobileList"],"window":{"navigationBarBackgroundColor":"#0081ff","navigationBarTitleText":"Jeeplus 移动审批","navigationStyle":"custom","navigationBarTextStyle":"white"},"darkmode":false,"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"jeeplus","compilerVersion":"3.7.9","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{}},{"path":"/pages/samples/ucharts/ucharts","meta":{},"window":{}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录"}},{"path":"/pages/user/person/person","meta":{},"window":{}},{"path":"/pages/user/setting/avatar/avatar","meta":{},"window":{}},{"path":"/pages/user/setting/password/password","meta":{},"window":{}},{"path":"/pages/samples/basics/home","meta":{},"window":{}},{"path":"/pages/samples/component/home","meta":{},"window":{}},{"path":"/pages/samples/plugin/home","meta":{},"window":{}},{"path":"/pages/samples/basics/layout","meta":{},"window":{}},{"path":"/pages/samples/basics/background","meta":{},"window":{}},{"path":"/pages/samples/basics/text","meta":{},"window":{}},{"path":"/pages/samples/basics/icon","meta":{},"window":{}},{"path":"/pages/samples/basics/button","meta":{},"window":{}},{"path":"/pages/samples/basics/design","meta":{},"window":{}},{"path":"/pages/samples/basics/tag","meta":{},"window":{}},{"path":"/pages/samples/basics/avatar","meta":{},"window":{}},{"path":"/pages/samples/basics/progress","meta":{},"window":{}},{"path":"/pages/samples/basics/shadow","meta":{},"window":{}},{"path":"/pages/samples/basics/loading","meta":{},"window":{}},{"path":"/pages/samples/component/bar","meta":{},"window":{}},{"path":"/pages/samples/component/nav","meta":{},"window":{}},{"path":"/pages/samples/component/list","meta":{},"window":{}},{"path":"/pages/samples/component/card","meta":{},"window":{}},{"path":"/pages/samples/component/form","meta":{},"window":{}},{"path":"/pages/samples/component/timeline","meta":{},"window":{}},{"path":"/pages/samples/component/chat","meta":{},"window":{}},{"path":"/pages/samples/component/swiper","meta":{},"window":{}},{"path":"/pages/samples/component/modal","meta":{},"window":{}},{"path":"/pages/samples/component/steps","meta":{},"window":{}},{"path":"/pages/samples/plugin/indexes","meta":{},"window":{}},{"path":"/pages/samples/plugin/animation","meta":{},"window":{}},{"path":"/pages/samples/plugin/drawer","meta":{},"window":{}},{"path":"/pages/samples/plugin/verticalnav","meta":{},"window":{}},{"path":"/pages/message/message","meta":{},"window":{}},{"path":"/pages/workbench/workbench","meta":{},"window":{}},{"path":"/pages/apps/apps","meta":{},"window":{}},{"path":"/pages/home/home","meta":{},"window":{}},{"path":"/pages/addressbook/addressbook","meta":{},"window":{}},{"path":"/pages/apps/notification/notification","meta":{},"window":{}},{"path":"/pages/apps/mail/mail","meta":{},"window":{}},{"path":"/pages/apps/notification/notificationDetail","meta":{},"window":{}},{"path":"/pages/apps/notification/oaNotifyForm","meta":{},"window":{}},{"path":"/pages/apps/mail/inbox","meta":{},"window":{}},{"path":"/pages/apps/mail/outbox","meta":{},"window":{}},{"path":"/pages/apps/mail/draft","meta":{},"window":{}},{"path":"/pages/apps/mail/trash","meta":{},"window":{}},{"path":"/pages/apps/mail/sendEmailForm","meta":{},"window":{}},{"path":"/pages/apps/mail/sendEmailDetail","meta":{},"window":{}},{"path":"/pages/apps/mail/ReceivedMailDetail","meta":{},"window":{}},{"path":"/pages/apps/mail/TrashMailDetail","meta":{},"window":{}},{"path":"/pages/workbench/task/ApplyList","meta":{},"window":{}},{"path":"/pages/workbench/task/TodoList","meta":{},"window":{}},{"path":"/pages/workbench/task/HistoryList","meta":{},"window":{}},{"path":"/pages/workbench/task/FlowCopyList","meta":{},"window":{}},{"path":"/pages/workbench/task/TaskForm","meta":{},"window":{}},{"path":"/pages/test/activiti/TestActivitiLeaveForm","meta":{},"window":{}},{"path":"/pages/workbench/task/TaskFormDetail","meta":{},"window":{}},{"path":"/pages/test/mobile/TestMobileForm","meta":{},"window":{}},{"path":"/pages/test/mobile/TestMobileList","meta":{},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
