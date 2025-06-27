import { Outlet } from 'react-router'

function App() {
  return (
    <div>
      <div className="block m-auto px-10 py-5">
        <h1 className="text-7xl text-center">Task Manager</h1>
      </div>
      <Outlet />
    </div>
  )
}

export default App
