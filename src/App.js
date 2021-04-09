
import { data } from "./data";
import { Card } from "./Card";
import { Titolo } from "./Titolo";
import { Container } from "./styled";
import { useForm } from "react-hook-form";


function App() {
  let arr= data;
  const { register, handleSubmit } = useForm();

  const onSubmit = (form) =>  {
    console.log(form);
    arr=data.filter((elemento , form) => {
      return elemento.pointOfInterest===10
    })
    //aggiornarna lo stato Usestate
    console.log(arr);
  }

  return (
    <>
      <Titolo />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("ricerca")} />
        <input type="submit" />
      </form>
      <Container>
        {arr.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </Container>
    </>
  );
}

export default App;

