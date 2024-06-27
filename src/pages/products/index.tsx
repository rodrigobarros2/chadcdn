import React from "react";
import { useForm } from "react-hook-form";
import { backendClient } from "@/services/api";

export const Products = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("pdf", data.pdf[0]);
    formData.append("clientNumber", data.clientNumber);

    try {
      const response = await backendClient.post("/faturas", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading the PDF:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="file"
        accept="application/pdf"
        {...register("pdf", { required: true })}
      />
      {errors.pdf && <p>PDF file is required.</p>}

      <input
        type="text"
        placeholder="Client Number"
        {...register("clientNumber", { required: true })}
      />
      {errors.clientNumber && <p>Client number is required.</p>}

      <button type="submit">Upload</button>
    </form>
  );
};
