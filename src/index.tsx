import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website",
          type: "deposit",
          amount: 6000,
          category: "Trabalho",
          createdAt: new Date("2022-02-23 17:01:58"),
        },
        {
          id: 2,
          title: "Carro",
          type: "withdraw",
          amount: 1500,
          category: "Aluguel",
          createdAt: new Date("2022-02-19 10:37:07"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
