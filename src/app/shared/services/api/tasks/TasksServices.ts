import { Api } from "../ApiConfig";
import { ApiException } from "../ErrorException";

interface ITasks {
  id: number;
  title: string;
  isCompleted: boolean;
}

const getAll = async (): Promise<ITasks[] | ApiException> => {
  try {
    const { data } = await Api().get("/tasks");
		return data;
  } catch (error: any) {
		return new ApiException(error.message || "Erro ao consultar as tarefas")
	}
};

const getById = async (id: number): Promise<ITasks[] | ApiException> => {
  try {
    const { data } = await Api().get(`/tasks/${id}`);
		return data;
  } catch (error: any) {
		return new ApiException(error.message || "Erro ao pesquisar essa tarefa")
	}
};

const create = async (dataCreate: Omit<ITasks, 'id'>): Promise<ITasks[] | ApiException> => {
  try {
    const { data } = await Api().post("/tasks", dataCreate);
		return data;
  } catch (error: any) {
		return new ApiException(error.message || "Erro ao criar uma nova tarefa")
	}
};


const updateById = async (id: number, dataUpdate: ITasks): Promise<ITasks[] | ApiException> => {
  try {
    const { data } = await Api().put(`/tasks/${id}`, dataUpdate);
		return data;
  } catch (error: any) {
		return new ApiException(error.message || "Erro ao atualizar a tarefa")
	}
};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
  try {
    await Api().get(`/tasks/${id}`);
		return undefined;
  } catch (error: any) {
		return new ApiException(error.message || "Erro ao deletar essa tarefa")
	}
};

export const TasksServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
