import Joi from 'joi';
import { PureRestRequest } from "@mihanizm56/fetch-api";

const BASE_URL = 'http://localhost:3000';

export const getAllItems = () => {
    return new PureRestRequest().getRequest({
        endpoint: `${BASE_URL}/items`,
        responseSchema: Joi.array().items(
            Joi.object({
                id: Joi.number(),
                name: Joi.string(),
                checked: Joi.boolean()
            })
        )
    });
}

export const postNewItem = (item) => {
   return new PureRestRequest().postRequest({
        endpoint: `${BASE_URL}/items`,
        body: {
            item: item
        },
        responseSchema: Joi.array().items(
            Joi.object({
                id: Joi.number(),
                name: Joi.string(),
                checked: Joi.boolean()
            })
        )
    })
}

export const deleteItem = (id) => {
    return new PureRestRequest().deleteRequest({
        endpoint: `${BASE_URL}/items/${id}`,
        responseSchema: Joi.array().items(
            Joi.object({
                id: Joi.number(),
                name: Joi.string(),
                checked: Joi.boolean()
            })
        )
    })
}

export const checkItem = (id) => {
    return new PureRestRequest().putRequest({
        endpoint: `${BASE_URL}/items/${id}/check`,
        responseSchema: Joi.array().items(
            Joi.object({
                id: Joi.number(),
                name: Joi.string(),
                checked: Joi.boolean()
            })
        )
    })
}

export const uncheckItem = (id) => {
    return new PureRestRequest().deleteRequest({
        endpoint: `${BASE_URL}/items/${id}/check`,
        responseSchema: Joi.array().items(
            Joi.object({
                id: Joi.number(),
                name: Joi.string(),
                checked: Joi.boolean()
            })
        )
    })
}
