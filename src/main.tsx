import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import {QuestionProvider} from "./Context/QuestionContext.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
          <BrowserRouter>
              <QuestionProvider>
                  <App />
              </QuestionProvider>
          </BrowserRouter>


  </StrictMode>
);
