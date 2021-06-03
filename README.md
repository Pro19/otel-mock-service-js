## Mock Service with OTel

This is a simple service to demonstrate OpenTelemetry auto instrumentation for Express. It's only purpose is to serve different kinds of REST APIs so as to see what traces & spans are exported.

The APIs are documented in swagger which can be accessed on `http://localhost:1234` or `http://localhost:1234/api/mockservice` after starting the service.

It has two npm scripts:
- `start` : Starts the service with OpenTelemetry instrumentation **disabled**.
- `test` : Starts the service with OpenTelemetry instrumentation **enabled**.

My advice is to run `npm start` first, then load the swagger page and then restart the service again with `npm test` so that the traces for html, css, favicon, etc. and the extra stuff required to load swagger are not exported.

By default, the instrumentation ignores the following Express layers: `request_handler` & `middleware`. This can be changed in `tracing.js` though.

This service uses a gRPC exporter so make sure a port is exposed to collect the data via gRPC on the OTel Collector or any other service of your choice which accepts data in OTLP.