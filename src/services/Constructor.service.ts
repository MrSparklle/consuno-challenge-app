import { Constructor } from "models";
import axios from "axios";

export const findAllConstructors = async (): Promise<Constructor[]> => {
  const constructorsData = await axios.get<Constructor[]>("/constructors");
  return constructorsData.data;
};
