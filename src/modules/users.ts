import { AxiosError } from "axios";
import { backendClient } from "../services/api";
import "react-toastify/dist/ReactToastify.css";

function isAxiosError(error: unknown): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

interface ElectricityData {
  quantity: string;
  price: string;
  value: string;
  tariff: string;
}

interface Document {
  id: string;
  fileName: string;
  filePath: string;
  createdAt: string;
  userId: string;
}

export interface IUser {
  id: string;
  customerNumber: string;
  referenceMonth: string;
  electricity: ElectricityData[];
  injectedEnergy: ElectricityData[];
  compensatedEnergy: ElectricityData[];
  contributionPublicLighting: string;
  documents: Document[];
}

export const fetchUser = async (filter?: string) => {
  const { data } = await backendClient.get("/user", { params: { filter } });
  return data;
};

export const uploadPdf = async (event) => {};
