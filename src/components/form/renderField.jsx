import React from 'react';

const RenderField = ({input,className, label, type, meta={error:null}}) => {
    return (
        <div className="col-md-4 form-group">
            <label className="bmd-label-floating">{label}</label>
            <input
                {...input}
                type={type}
                className={className}
            />
        </div>
    );
};

export default RenderField;
