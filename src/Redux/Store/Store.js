import { rootRuducers } from "../ruducers/rootRuducers";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
export const store = createStore(rootRuducers, applyMiddleware(thunk, logger));
