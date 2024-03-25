import { useForm, SubmitHandler } from "react-hook-form"


enum ColorEnum {
    red = "red",
    blue = "blue",
    purple = "purple",
}


interface IFormInput {
    User: string
    color: ColorEnum
}


export default function Form2() {
    const { register, handleSubmit, formState } = useForm<IFormInput>(
        {
            defaultValues: {
                User:"John Doe",
                color: ColorEnum["red"],
            },
        }
    )
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>User</label>
                <input {...register("User",{required:true})} />
                <p>{formState.isValid ? "Valid" : "InValid"}</p>
                <p>{formState.isDirty && "Used Input"}</p>
            </div>
            <div>
                <label>Gender Selection</label>
                <select {...register("color")}>
                    {["red","blue","purple"].map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <input type="submit"/>
            </div>

        </form>
    )
}