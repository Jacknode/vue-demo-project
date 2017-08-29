/**
 * Created by leibo on 17/8/21.
 */
import Home from './components/Home.vue'
import List from './components/List.vue'
import Detail from './components/Detail.vue'
import Search from './components/Search.vue'
import Book from './components/Book.vue'
import NewList from './components/newList.vue'
import BookDetail from './components/BookDetail.vue'
import Login from './components/Login.vue'
import  Registration from './components/Registration.vue'
import MusicInfo from './components/MusicInfo.vue'
import MusicDetail from './components/MusicDetail.vue'
import Movie from './components/Movie.vue'
import MovieDetail from './components/MovieDetail.vue'
import BookList from './components/BookList.vue'
import Game from './components/Game.vue'



export default [
    {
        path:'/',
        component:Home
    },
    {
        path:'/movie',
        component:Movie
    },
    {
        path:'/list/:title',
        component:List
    },
    {
        path:'/newList/detail/movie/:id',
        component:Detail
    },
    {
        path:'/detail/movie/:name/:id',
        component:Detail
    },
    {
        path:'/list/detail/:id',
        component:Detail
    },
    {
        path:'/list/all',
        component:List
    },
    {
        path:'/search',
        component:Search
    },
    {
        path:'/detail/search/:id',
        component:Detail
    },
    {
        path:'/detail/movie/:id',
        component:Detail
    },
    {
        path:'/book',
        component:Book
    },
    {
        path:'/newList/:name',
        name:'newList',
        component:NewList
    },
    {
        path:'/newList/detail/:id',
        name:'newListDetail',
        component:Detail
    },
    {
        path:'/detail/book/:id',
        name:'BookDetail',
        component:BookDetail
    },
    {
        path:'/newList/detail/book/:id',
        name:'newListBookDetail',
        component:BookDetail
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/Registration',
        name:'Registration',
        component:Registration
    },
    {
        path:'/music',
        name:'MusicInfo',
        component:MusicInfo
    },
    {
        path:'/detail/music/:id',
        name:'MusicDetail',
        component:MusicDetail
    },
    {
        path:'/home/detail',
        name:'MovieDetail',
        component:MovieDetail
    },
    {
        path:'/booklist/:name',
        component:BookList
    },
    {
        path:'/booklist/detail/book/:id',
        component:BookDetail
    },
    {
        path:'/game',
        name:'Game',
        component:Game
    }
]
