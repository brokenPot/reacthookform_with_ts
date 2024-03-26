import {SubmitHandler, useForm} from "react-hook-form"
import {useEffect} from "react";
import {
    BtnsBox,
    CustomAlertText,
    CustomBtn,
    CustomForm,
    CustomInput,
    FormLower,
    InputsBox, LightBulb, LightBulbAndSubWrapper, LightBulbsWrapper,
    Title
} from "../comps/Comps.tsx";

type FormInputs = {
    firstName: string
    lastName?: string
}

export default function Form1() {
    const {
        register,
        handleSubmit,
        setError, // 특정 인풋에 에러를 할당시키는 상태 함수
        clearErrors, // 에러 상태 함수
        setValue, // 특정 인풋에 값을 설정한다.
        setFocus, // 특정 인풋에 Focus 가 생기게끔 만들 수 있다.
        getValues, // 특정 키를 가져오면 string, 여러개를 가져오면 특정 키의 값을 배열로 받을수 있다.
        getFieldState, // 각 인풋의 상태(에러 여부, 유효 여부, 입력 여부, 포커스 이벤트 여부 등)
        resetField, // 각 필드를 비워준다. 인풋에 보이는것 뿐만 아닌 각 필드들의 값 자체를 지워준다.
        formState: { isDirty, isValid,errors,touchedFields,isSubmitted,isSubmitSuccessful,isSubmitting,submitCount },
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

    const handleResetBtn = () => {
        resetField("firstName")
        resetField("lastName")
        setValue('firstName', 'John');
        setValue('lastName', 'Doe');
    }


    const onSubmit : SubmitHandler<FormInputs> = (data) => {
        setFocus('firstName')
        const singleValue = getValues("lastName")
        const multipleValues = getValues(["firstName", "lastName"])
        const fn = getFieldState ( "firstName" )
        const ln = getFieldState ( "lastName" )
        console.log(fn)
        console.log(ln)
        console.log(singleValue) // 'Doe'
        console.log(multipleValues) // ['John', 'Doe']
        console.log(data) // {firstName: 'John', lastName: 'Doe'}
        console.log(touchedFields) // 직접 조작하지 않은 경우 빈 오브젝트를 반환한다. {firstName:true}
        console.log(isSubmitted)
        console.log(isSubmitSuccessful)
        console.log(isSubmitting)
        console.log(submitCount)
    }


    return (
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <Title>reactHookFormTutorial</Title>
            <FormLower>
                <InputsBox>
                    <CustomInput {...register("firstName", {required: true, minLength: 4})} placeholder={'firstName'}/>
                    {errors.firstName && <CustomAlertText>{errors.firstName.message}</CustomAlertText>}
                    <LightBulbsWrapper>
                        <LightBulbAndSubWrapper>
                            <LightBulb $ok={isDirty ? 'true' : 'false'} />
                            <p>used</p>
                        </LightBulbAndSubWrapper>
                        <LightBulbAndSubWrapper>
                            <LightBulb $ok={isValid ? 'true' : 'false'} />
                            <p>over 4 letters</p>
                        </LightBulbAndSubWrapper>
                    </LightBulbsWrapper>
                    <CustomInput {...register("lastName")} placeholder={'lastName'}/>
                </InputsBox>
                <BtnsBox>
                    <CustomBtn type="button" onClick={() => clearErrors("firstName")}>
                        remove firstName error
                    </CustomBtn>
                    <CustomBtn type="button" onClick={handleResetBtn}>
                        Reset
                    </CustomBtn>
                    <CustomBtn type="submit">제출</CustomBtn>
                </BtnsBox>
            </FormLower>
        </CustomForm>
    )
}