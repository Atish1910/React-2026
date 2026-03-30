import React from "react";
import SimpleUserForm from "./SimpleUserForm";
import FormReactHookFormOne from "./React-Hook-Form/FormReactHookFormOne";
import FormReactHookFormTwo from "./React-Hook-Form/FormReactHookFormTwo";
import FormReactHookFormCrudThree from "./React-Hook-Form/FormReactHookFormCrudThree";
import FormWithLocalStorage from "./React-Hook-Form/FormWithLocalStorage";

const FormsPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <h4>Here are all form questions</h4>
          </div>
          <SimpleUserForm></SimpleUserForm>
          <FormReactHookFormOne></FormReactHookFormOne>
          <FormReactHookFormTwo></FormReactHookFormTwo>
          <FormReactHookFormCrudThree></FormReactHookFormCrudThree>
          <FormWithLocalStorage></FormWithLocalStorage>
        </div>
      </section>
    </>
  );
};

export default FormsPage;
