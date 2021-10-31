import React from 'react';
import { useForm } from "react-hook-form";

const AddNewService = () => {

    const { register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        fetch(`https://lit-wildwood-88545.herokuapp.com/addServices`, {
            method: "post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then(res => res.json())


            .then(result => {
                if (result.insertedId) {
                    alert(' Successfully added servs');
                    reset()

                }
            })


    }

    return (
        <div>
            <h1>Add new services</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="m-2"  {...register("img")} placeholder="Img url" />
                <br />
                <input className="m-2" {...register("name")} placeholder="name" />
                <br />
                <input className="m-2" {...register("price")} type="number" placeholder="Price" />
                <br />
                <input className="m-2 py-4" {...register("des")} type="text" placeholder="des" />
                <br />



                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input className=" btn-primary p-2" type="submit" />
            </form>

        </div>
    );
};

export default AddNewService;