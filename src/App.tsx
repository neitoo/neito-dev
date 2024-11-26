import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '@pages/home'
import { ProjectDetails } from '@pages/project'
import { Projects } from '@pages/projects'
import { NotFound } from '@pages/notfound'
import { Layout } from '@components/layout'

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
