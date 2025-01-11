import { Issues } from "@/constants/issues";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

// Crea una instancia de mock
const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });

mock.onGet("/issues").reply(200, Issues);

export default mock;
