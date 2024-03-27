import {FormRef} from "./FormRef.tsx";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import {CustomBtn} from "../comps/Comps.tsx";


function Form3() {
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onChange' });

    const onSubmit: SubmitHandler<FieldValues> = data => {
        console.log(data)
    };
    console.log(errors)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormRef
                id="userId"
                name="userId"
                label="아이디"
                placeholder="2 ~ 12자 영문 + 숫자"
                rules={{
                    required: '아이디는 필수 입력입니다.',
                    minLength: 2,
                    maxLength: 12,
                    pattern: {
                        value: /^[a-z0-9]{2,12}$/g,
                        message: '아이디는 2 ~ 12자 영문과 숫자를 사용해 주세요.',
                    },
                }}
                errors={errors}
                register={register}
            />
            <FormRef
                id="password"
                type="password"
                name="password"
                label="비밀번호"
                placeholder="8자 이상 영어 + 숫자"
                rules={{
                    required: '비밀번호는 필수 입력입니다.',
                    minLength: 8,
                    pattern: {
                        value: /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,100}$/,
                        message: '비밀번호는 8자 이상 영어 + 숫자로 입력해 주세요.',
                    },
                }}
                errors={errors}
                register={register}
            />
            <FormRef
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                label="비밀번호 확인"
                placeholder="8자 이상 영어 + 숫자"
                rules={{
                    required: '비밀번호는 필수 입력입니다.',
                    minLength: 8,
                    validate: {
                        passWordCheck: (value: string) => {
                            if (getValues().password !== value) {
                                return '비밀번호가 일치하지 않습니다.';
                            }
                        },
                    },
                }}
                errors={errors}
                register={register}
            />
            <CustomBtn type="submit" >
                제출
            </CustomBtn>
        </form>
    );
}

export default Form3;