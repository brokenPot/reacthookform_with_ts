import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    example: string
    exampleRequired: string
}


export default function Form1() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input defaultValue="test" {...register("example")} />
            </div>
            <input {...register("exampleRequired", {required: true})} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type="submit"/>
        </form>
)
}