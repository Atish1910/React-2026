import React from 'react';
import SimpleUserForm from './SimpleUserForm';

const FormsPage = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <h4>Here are all form questions</h4>
                    </div>
                    <SimpleUserForm></SimpleUserForm>
                </div>    
            </section>   
        </>
    );
};

export default FormsPage;