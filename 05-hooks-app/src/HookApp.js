import CounterApp from "./components/01-useState/CounterApp";
import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
import FormWithCustomHook from "./components/02-useEffect/FormWithCustomHook";
import SimpleForm from "./components/02-useEffect/SimpleForm";

const HookApp = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <hr />
      <FormWithCustomHook />
      <hr />
      <SimpleForm />
      <hr />
      <CounterWithCustomHook />
      <hr />
      <CounterApp />
    </div>
  );
};

export default HookApp;
