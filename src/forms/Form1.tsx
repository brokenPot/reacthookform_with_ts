import { useForm } from "react-hook-form"
import {useEffect} from "react";
import {BtnsBox, CustomBtn, CustomForm, CustomInput, InputsBox} from "../comps/Comps.tsx";

type FormInputs = {
    firstName: string
    lastName?: string
}


export default function Form1() {
    const {
        register,
        handleSubmit,
        setError, // 2
        clearErrors,// 3
        setValue,// 4
        setFocus,// 5
        getValues,// 6
        getFieldState,// 7
        trigger,// 8 잘 모르겠다
        resetField, // 각 필드를 비워준다. 인풋에 보이는것 뿐만 아닌 각 필드들의 값 자체를 지워준다.
        formState: { isDirty, isValid,errors },
    } = useForm<FormInputs>({
        mode: "onChange",
        defaultValues: {
            firstName:"",
            lastName: "",
        },
    })

    useEffect(() => {

        setError("firstName", {
            type: "manual",
            message: "firstName Have to text over 4 letter ",
        })
    }, [setError])


    const handleClick = () => {
        resetField("firstName")
        resetField("lastName")
        setValue('firstName', 'John');
        setValue('lastName', 'Doe');
    }


    const onSubmit = (data: FormInputs) => {
        setFocus('firstName')
        const multipleValues = getValues(["firstName", "lastName"])
        const fn = getFieldState ( "firstName" ) // 각 인풋의 상태(에러 여부, 유효 여부, 입력 여부, 포커스 이벤트 여부 등)
        const ln = getFieldState ( "lastName" )
        console.log(fn)
        console.log(ln)
        console.log(multipleValues) // ['John', 'Doe']
        console.log(data) // {firstName: 'John', lastName: 'Doe'}
    }


    return (
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <InputsBox>
                <CustomInput {...register("firstName", {required: true, minLength: 4})} placeholder={'firstName'}/>
                {errors.firstName && <p>{errors.firstName.message}</p>}
                <CustomInput {...register("lastName")} placeholder={'lastName'}/>
                <p>{isDirty && "dirty"}</p>
                <p>{isValid && "valid"}</p>
            </InputsBox>
            <BtnsBox>
                <CustomBtn type="button" onClick={() => clearErrors("firstName")}>
                    Clear firstname
                </CustomBtn>
                <CustomBtn type="button" onClick={handleClick}>
                    Reset
                </CustomBtn>
                <CustomBtn
                    type="button"
                    onClick={() => {
                        trigger("firstName")
                    }}
                >
                    Trigger firstName
                </CustomBtn>
                <CustomBtn type="submit">버튼</CustomBtn>

            </BtnsBox>
        </CustomForm>
    )
}