const express = require("express");
const redis = require("redis");

// OpenTelemetry
const { NodeSDK } = require("@opentelemetry/sdk-node");
const { getNodeAutoInstrumentations } = require("@opentelemetry/auto-instrumentations-node");

const sdk = new NodeSDK({
instrumentations: [getNodeAutoInstrumentations()]
   });

   sdk.start();

const app = express();
const client = redis.createClient({
     url: "redis://redis:6379"
     });

     client.connect();

     app.get("/", async (req, res) => {
       await client.set("visits", (await client.get("visits") || 0) + 1);
         const visits = await client.get("visits");

           res.send(`Hello from Backend. Visits: ${visits}`);
           });

           app.listen(3000, () => {
             console.log("Backend running on port 3000");
             });
