import {Form, useForm} from "react-hook-form"

export default function FormAction() {
    const { register, control } = useForm()

    return (
        <Form
            action="/api/save" // Send post request with the FormData
            // encType={'application/json'} you can also switch to json object
            onSuccess={() => {
                alert("Your application is updated.")
            }}
            onError={() => {
                alert("Submission has failed.")
            }}
            control={control}
        >
            <input {...register("firstName", { required: true })} />
            <input {...register("lastName", { required: true })} />
            <button>Submit</button>
        </Form>
    )
}