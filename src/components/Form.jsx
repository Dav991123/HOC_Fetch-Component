import React from 'react';
const Form = (props) => {
    let input
    const { sendTo } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        sendTo({title: input.value})   
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={'input-group'}>
                <input
                    type="text"
                    className={'form-control form-control-sm'}
                    placeholder="Add todo"
                    ref={(e) => input = e}
                />
                <button className={'btn btn-secondary'}>
                    Add
                </button>
            </div>
        </form>
    )
}
export default Form;