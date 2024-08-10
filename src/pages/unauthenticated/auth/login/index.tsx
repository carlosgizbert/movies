import { Button } from "@/ui/components";
import { Field } from "@/ui/components/field";
import Navbar from "@/ui/components/navbar";

export default function Login() {
  return (
    <div>
      <Navbar />
      <Button>Fazer login</Button>
      <Field
        label='Ola'
        placeholder='Placeholder'
        isRequired
        startElement={<div>Ola</div>}
        endElement={<div>Ola</div>}
      />
    </div>
  )
}
