import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

export default function AddPin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const onClick = () => {
    console.log("submitted");
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Username" {...register("Username", {required: true})} />
      <input type="text" placeholder="Title" {...register("Title", {required: true})} />
      <textarea {...register("Description", {required: true})} />
      <input type="range" placeholder="Rating" {...register("Rating", {required: true, max: 5, min: 0})} />
      <input type="number" placeholder="Latitude" {...register("Latitude", {required: true, max: 90, min: -90})} />
      <input type="number" placeholder="Longitude" {...register("Longitude", {required: true, max: 180, min: -180})} />

      <input type="submit" />
    </form>
  );
}