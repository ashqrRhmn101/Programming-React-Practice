import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FamilyTree from "./components/FamilyTree/FamilyTree";
import FormAction from "./components/FormAction/FormAction";
import HookForm from "./components/HookForm/HookForm";
import ProductForm from "./components/ProductManagement/ProductForm";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UnControlledField from "./components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <h1>Explore React Form</h1>
      {/* <SimpleForm/> */}
      {/* <FormAction/> */}
      {/* <ControlledField/> */}
      {/* <UnControlledField/> */}
      {/* <HookForm/> */}
      {/* <ProductManagement/> */}
      <FamilyTree />
    </>
  );
}

export default App;
