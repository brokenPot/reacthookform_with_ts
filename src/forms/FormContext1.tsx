import { useForm, FormProvider, useFormContext } from "react-hook-form"


export default function FormContext1() {
    const methods = useForm()

    const onSubmit = (data:any) => console.log(data)

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <NestedInput />
                <input type="submit" />
            </form>
        </FormProvider>
    )
}


function NestedInput() {
    const { register } = useFormContext() // retrieve all hook methods


    return <input {...register("test")} />
}