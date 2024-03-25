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
    // useForm의 옵션들
    // mode	            Validation strategy before submitting behaviour.
    // reValidateMode	Validation strategy after submitting behaviour.
    // defaultValues	Default values for the form.
    // values	        Reactive values to update the form values.
    // errors	        Reactive errors to update the form errors.
    // resetOptions	    Option to reset form state update while updating new form values.
    // criteriaMode	    Display all validation errors or one at a time.
    // shouldFocusError	Enable or disable built-in focus management.
    // delayError	    Delay error from appearing instantly.
    // shouldUnregister	Enable and disable input unregister after unmount.
    // shouldUseNativeValidation	Use browser built-in form constraint API.


    const { register, handleSubmit, formState,getValues  } = useForm<IFormInput>(
        {
            defaultValues: {
                User:"John Doe",
                color: ColorEnum["red"],
            },
        }
    )
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

    const handleValueCheck = ()=>{
        const user =getValues('User')
        const color =getValues('color')

        console.log(user)
        console.log(color)

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>User</label>
                    <input {...register("User", {required: true})} />
                    <p>{formState.isValid ? "Valid" : "InValid"}</p>
                    <p>{formState.isDirty && "Used Input"}</p>
                </div>
                <div>
                    <label>Gender Selection</label>
                    <select {...register("color")}>
                        {["red", "blue", "purple"].map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <input type="submit"/>
                </div>
            </form>
            <button onClick={handleValueCheck}>값 확인</button>

        </>

    )
}