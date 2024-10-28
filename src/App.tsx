import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './features/home'
import { ProjectDetails } from './features/project'
import { Projects } from './features/projects'
import { NotFound } from './features/notfound'
import { Layout } from './components/layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='projects/:id' element={<ProjectDetails/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
