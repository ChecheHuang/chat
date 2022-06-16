import './app.scss'
import Center from '../src/components/Center'
import TopBar from '../src/components/TopBar'

function App() {
  return (
    <>
      <TopBar />
      <div style={{ display: 'flex' }}>
        <Center />
      </div>
    </>
  )
}
export default App
