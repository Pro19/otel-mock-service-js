const CHALK = require('chalk');

try{
    console.log(`${CHALK.yellow(">")} Initializing OpenTelemetry tracing.`)
            
    // OpenTelemetry Config
    const { NodeTracerProvider } = require('@opentelemetry/node');
    const { CollectorTraceExporter } = require('@opentelemetry/exporter-collector-grpc');
    const { registerInstrumentations } = require('@opentelemetry/instrumentation');
    const { SimpleSpanProcessor } = require('@opentelemetry/tracing');

    // Instrumentation libraries
    const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');

    // OpenTelemetry resources
    const { ResourceAttributes } = require('@opentelemetry/semantic-conventions');
    const { Resource, SERVICE_RESOURCE } = require('@opentelemetry/resources');
    const { diag, DiagConsoleLogger, DiagLogLevel } = require('@opentelemetry/api');

    // OpenTelemetry API logging
    diag.setLogger(new DiagConsoleLogger, DiagLogLevel.DEBUG);

    // Service related resource configuration
    const serviceResource = new Resource({
        [ResourceAttributes.DEPLOYMENT_ENVIRONMENT]: 'local - test',
        [SERVICE_RESOURCE.NAME]: 'Mock Service',
        [SERVICE_RESOURCE.VERSION]: '1.0.0',
    });

    const nodeTraceProvider = new NodeTracerProvider({
        resource: serviceResource,
    });

    // Exporter configuration
    const traceExporter = new CollectorTraceExporter({
        url: 'http://localhost:4317'
    });

    // Batch span processer configuration
    nodeTraceProvider.addSpanProcessor(new SimpleSpanProcessor(traceExporter));

    nodeTraceProvider.register();

    // Automatic instrumentation library registration & configuration
    registerInstrumentations({
        tracerProvider: nodeTraceProvider,
        instrumentations: [
            getNodeAutoInstrumentations({
                "@opentelemetry/instrumentation-express":{
                    ignoreLayersType: ['request_handler','middleware']
                },
            }),
        ],
    });

    console.log(`${CHALK.yellow(">")} OpenTelemetry tracing initialized.`);
} catch(err) {
    console.log(`${CHALK.yellow(">")} ${CHALK.red("OpenTelemetry tracing initialization failed!")}`);
    console.error(err);
}