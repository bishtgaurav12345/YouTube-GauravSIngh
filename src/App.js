import './App.css';
import Head from './components/Head';
import Sidebar from './components/Sidebar';
import { Provider } from 'react-redux';
import store from './utils/store';
import Body from './components/Body';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import WatchPage from './components/WatchPage';

const AppRouter= createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element: <Main/>
      },
      {
        path:"watchPage",
        element:<WatchPage/>
      }
    ]
  }
]
)


function App() {
  return (
    <Provider store={store}>
    <div >
      <Head/>
      <RouterProvider router={AppRouter}/>
    </div>
    </Provider>
  );
}

export default App;
