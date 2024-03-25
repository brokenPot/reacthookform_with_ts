import { useForm, SubmitHandler } from "react-hook-form"

interface IFormInput {
    firstName: string
    email: string
    age: number
}

// 다양한 방법으로 유효성 검사가 가능하다.
// required
// min
// max
// minLength
// maxLength
// pattern (정규 표현식으로 필터링이 가능하다.)
// validate
export default function Form3() {
    const { register, handleSubmit,formState:{errors}  } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register("firstName", {required: true, maxLength: 20})} />
                {errors?.firstName && <span>This field is required</span>}
            </div>
            <div>
                <input {...register("email", {required: true,pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message:"이메일 형식이 아닙니다."}})} />
            </div>
            {errors?.email?.message}
            <input type="number" {...register("age", {min: 18, max: 99})} />
            <input type="submit" />
        </form>
    )
}