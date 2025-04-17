import { Response } from "../models/response.models.js";
import ApiError from "../utils/ApiError.js";
import { asynchandler } from "../utils/asynchandeler.js";
import { Servey } from "../models/servey.models.js";
import { Question } from "../models/questions.models.js";

const addResponse = asynchandler(async (req, res, next) => {});
export { addResponse };
