import React from "react";
import SimpleUserForm from "./SimpleUserForm";
import FormReactHookFormOne from "./React-Hook-Form/FormReactHookFormOne";

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
        </div>
      </section>
    </>
  );
};

export default FormsPage;
