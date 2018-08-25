import Home from './components/Home.vue';
import Header from './components/Header.vue';

const User = () => import ('./components/user/User.vue');
const UserStart = () => import ('./components/user/UserStart.vue');
const UserEdit = () => import ('./components/user/UserEdit.vue');
const UserDetail = () => import ('./components/user/UserDetail.vue');

export const routes = [
  {
    path: '',
    name: 'home',
    components: {
      default: Home,
      'header-top': Header,
    },
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header,
    },
    children: [
      {
        path: '',
        component: UserStart,
        name: 'UserStart'
      },
      {
        path: ':id',
        component: UserDetail,
        props: route => ({ id: route.params.id }),
        name:'UserDetail',
        beforeEnter: (to, from, next) => {
          next();
        }
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'UserEdit',
        props: route => ({ locale: route.query.locale, q: route.query.q })
      }
    ]
  },
  { path: '/redirect-me', redirect: { name: 'home'} },
  { path: '*', redirect:{ name: 'home'}}
];
