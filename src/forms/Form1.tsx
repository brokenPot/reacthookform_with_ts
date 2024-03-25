import { useForm } from "react-hook-form"
import {useEffect} from "react";


type FormInputs = {
    username: string
    firstName: string
}


export default function Form1() {
    const {
        register,
        unregister,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm<FormInputs>()


    const onSubmit = (data: FormInputs) => {
        console.log(data)
    }
    useEffect(() => {
        register("username")
    }, [register])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Username</label>
            <input {...register("username" as const)} />
            {errors.username && <p>{errors.username.message}</p>}
            <label>First Name</label>
            <input {...register("firstName" as const)} />
            {errors.firstName && <p>{errors.firstName.message}</p>}
            <button
                type="button"
                onClick={() => {
                    const inputs = [
                        {
                            type: "manual",
                            name: "username",
                            message: "Double Check This",
                        },
                        {
                            type: "manual",
                            name: "firstName",
                            message: "Triple Check This",
                        },
                    ]
                    inputs.forEach(({name, type, message}:{name:"username" | "firstName" | "root" | any, type:string, message:string}) => {
                        setError(name, {type, message})
                    })
                }}
            >
                Trigger Name Errors
            </button>
            <input type="submit"/>
            <button type="button" onClick={() => unregister("username")}>
                unregister
            </button>
        </form>
    )
}