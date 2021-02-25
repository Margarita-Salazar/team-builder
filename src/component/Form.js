import React from 'react';
import styled from 'styled-components';
const FormContianer = styled.div`
    border: 1px solid darkgrey;
    border-radius: 5px;
    color: #0e2923;
    margin: 2rem auto 0 auto;
    padding: 2rem;
    text-align: center;
    max-width: 800px;
`;
const InputContianer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 4rem;
`;
const Input = styled.input`
    border: 2px solid darkgrey;
    border-radius: 3px;
    font-size: 1em;
    margin: 1rem 0;
    padding: 14px;
`;
const Button = styled.button`
    background-color: #1e90ff;
    border: 0;
    border-radius: 5px;
    color: white;
    height: 3rem;
    letter-spacing: 0.175em;
    line-height: 3rem;
    margin: 2rem auto;
    padding: 0 2rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
`;

export default function Form(props) {
    const { value, change, submit } = props;

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }
    return (
        <FormContianer onSubmit={onSubmit}>
            <InputContianer>
                <Input 
                    type='text'
                    name='name'
                    placeholder='name'
                    value={value.name}
                    onChange={onChange}
                />
                <Input 
                    type='text'
                    name='email'
                    placeholder='e-mail'
                    value={value.email}
                    onChange={onChange}
                />
                <label>Role: 
                <select
                name='role'
                value={value.role}
                onChange={onChange}>
                    <option value="">Select</option>
                    <option value='backend engineer'>backend engineer</option>
                    <option value='frontend engineer'>frontend engineer</option>
                    <option value='designer'>designer</option>
                </select>
                </label>
                <Button>Submit</Button>
            </InputContianer>
        </FormContianer>
    )
}