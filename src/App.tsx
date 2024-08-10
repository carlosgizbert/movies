import './App.css'
import { Button } from './ui/components/button'
import { Field } from './ui/components/field'
import Navbar from './ui/components/navbar'

function App() {

  return (
    <>
      <Navbar />
      <Button>Fazer login</Button>
      <Field
        label='Ola'
        placeholder='Placeholder'
        isRequired
        startElement={<div>Ola</div>}
        endElement={<div>Ola</div>}
      />
    </>
  )
}

export default App
