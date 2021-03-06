/**
 * 
 * @authors sam
 * @date    2016-10-13 11:59:57
 * @version 1.0
 */
import Home from './components/Home/Index.vue'
import Shop from './components/Shop/Index.vue'
import Shopcount from './components/Shop/Count.vue'
import Sign from './components/Sign/Index.vue'
import Signup from './components/Sign/Signup.vue'
import Usercenter from './components/Sign/Usercenter.vue'
import Liveindex from './components/Live/Index.vue'
import Livedetail from './components/Live/Livedetail.vue'
import Videoindex from './components/Video/Index.vue'
import Videodetail from './components/Video/Videodetail.vue'
export default router => {
    router.map({
        '/home': {
            name:'home',
            title:'首页',
            component: Home
        },
        '/live':{
            name:'live',
            title:'直播',
            component:{
                template:'<router-view></router-view>'
            },
            subRoutes:{
                '/':{
                    name:'live',
                    title:'直播',
                    component:Liveindex 
                },
                '/livedetail/:id':{
                    name:'liveDetail',
                    title:'直播间',
                    component:Livedetail 
                }
            }
        },
        '/video':{
            name:'video',
            title:'视频',
            component:{
                template:'<router-view></router-view>'
            },
            subRoutes:{
                '/':{
                    name:'video',
                    title:'视频',
                    component:Videoindex 
                },
                '/videodetail/:id':{
                    name:'videoDetail',
                    title:'视频详情',
                    component:Videodetail 
                }
            }
        },
        '/shop': {
            name:'shop',
            title:'商店',
            component: {
                template:'<router-view></router-view>'
            },
            subRoutes:{
                '/':{
                    name:'shop',
                    title:'商店',
                    component:Shop
                },
                '/cart':{
                    name:'cart',
                    title:'商店',
                    component:Shop
                },
                '/count':{
                    name:'count',
                    title:'结算',
                    component:Shopcount
                }

            }
        },
        '/sign': {
            name:'sign',
            title:'登录',
            component: {
                template: '<router-view></router-view>'
            },
            subRoutes: {
                '/signin': {
                    name:'signin',
                    title:'登录',
                    component: Sign
                },
                '/signup': {
                    name:'signup',
                    title:'注册',
                    component: Signup
                }
            }
        },
        '/user':{
            name:'userinfo',
            title:'用户中心',
            component:{
                template: '<router-view></router-view>'
            },
            subRoutes:{
                '/':{
                    name:'userinfo',
                    title:'用户信息',
                    component:Usercenter
                },
                '/userinfo':{
                    name:'userinfo',
                    title:'用户信息',
                    component:Usercenter
                }
            }
        }
    });
    router.redirect({
        '/live/livedetail':'/live/livedetail/1',
        '*': '/home'
    })
    router.afterEach((transition)=>{
        let title = transition.to.title || '3wycmedia'
    })
    /**
       * fix ios title刷新不了的bug
       * @iframeLoad
       * @author hiluluke
       */
      const iframeLoad = function (src) {
        let iframe = document.createElement('iframe')
        iframe.style.display = 'none'
        iframe.src = src
        document.body.appendChild(iframe)
        iframe.addEventListener('load', function () {
          setTimeout(function () {
            iframe.remove()
          }, 0)
        })
      }
      // document title change
      router.afterEach((transition) => {
        document.title = transition.to.title || 'CNode.js'
        if (navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
          let src = './assets/fixrouter.html?r=' + Math.random()
          iframeLoad(src)
        }
      })
}