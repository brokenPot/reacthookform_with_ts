import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes } from 'react';
import {
    FieldErrors,
    FieldValues,
    RegisterOptions,
    UseControllerProps,
    UseFormRegister,
} from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styled from "styled-components";

export const TextInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const enterEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && props.enterEvent) {
            props.enterEvent();
        }
    };

    return (
        <TextInputWrap>
            <label htmlFor={props.id}>{props.label}</label>
            <input type="text" {...props} ref={ref} onKeyDown={e => enterEvent(e)} />
        </TextInputWrap>
    );
});

TextInput.displayName = 'TextInput';

const TextInputWrap = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  & label {
    font-size: 14px;
    display: flex;
    gap: 5px;
  }
`;

export default TextInput;

export const DataListInput = forwardRef(
    (props: InputHTMLAttributes<HTMLInputElement>, ref: React.Ref<HTMLInputElement>) => {
        return (
            <TextInputWrap>
                <label htmlFor={props.id}>{props.name}</label>
                <input type="text" ref={ref} {...props} />
            </TextInputWrap>
        );
    },
);

DataListInput.displayName = 'DataListInput';

interface InputProps
    extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    id?: string;
    name?: string;
    label?: string;
    className?: string;
    enterEvent?: () => void;
}

interface FormInputProps<T extends FieldValues>
    extends Omit<UseControllerProps<T>, 'defaultValue' | 'name'>,
        InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
    value?: string;
    readOnly?: boolean;
    errors?: FieldErrors;
    rules?: RegisterOptions;
    register?: UseFormRegister<FieldValues>;
}
export const FormRef = <T extends FieldValues>({
                                                     name,
                                                     register,
                                                     rules,
                                                     errors,
                                                     ...props
                                                 }: FormInputProps<T>) => {
    if (!name) {
        throw new Error('FormInput Must Have Name Parameter');
    }
    return (
        <TextInputWrap>
            <label htmlFor={props.id}>
                {props.label}
                {errors && (
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => (
                            <p className="error-text" role="alert">
                                {message}
                            </p>
                        )}
                    />
                )}
            </label>
            <input type="text" {...props} {...(register && register(name, rules))} />
        </TextInputWrap>
    );
};