import React, { useState } from "react";
import { useForm } from 'react-hook-form'





export default function PlayerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
<div>
    <h1>Create Team Form</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="submit" value="Add"/>
    </form>
</div>
  );
}
