import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from "react-router-dom";
import { Root } from './Root.page';
import { Home } from './Home.page';
import { Contact } from './Contact.page';
import { Data } from './Data.page';
function App() {
  /**
   * con esta función podemos seguir manteniendo la estructura de árbol 
   * a la que estamos acostumbrados en react 6, tambien unicamente necesitamos usar el Componente Route 
   */
  const elements = createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/data' element={<Data />} />
    </Route>
  )
  /**
   * Ya no es necesario importar el provider de las rutas
   * para eso funciona el create browser router  
   */
  const routes = createBrowserRouter(elements)
  /**
   * Para poder inicair el roputer debemos usar el elemento routerProvider
   */
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
