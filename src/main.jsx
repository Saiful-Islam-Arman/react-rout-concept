import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Users from './Component/Users/Users.jsx'
import UserDetails from './Component/UserDetails/UserDetails.jsx'
import Posts from './Component/Posts/Posts.jsx'
import ShowPost from './Component/ShowPost/ShowPost.jsx'
import NotFoundPage from './Component/NotFoundPage/NotFoundPage.jsx'


const routePath = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        path: '/users',
        element: <Users></Users>,
        loader: async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if(!response.ok) throw new Error('data loading error');
          return response.json();
        } 
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: async () => {
          const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
          if(!postsRes.ok) throw new Error('Post loading error');
          return postsRes.json();
        },
        element: <Posts></Posts>

      },
      {
        path: 'posts/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <ShowPost></ShowPost>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ]
  }, 
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routePath}></RouterProvider>
  </StrictMode>,
)
