import React, { useState } from "react";
import { FormControl } from '@mui/material'
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useForm } from 'react-hook-form'





export default function PlayerForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="number" placeholder="Jersey" {...register("Jersey", {required: true, maxLength: 100})} />

      <input type="submit" />
    </form>
  );
}