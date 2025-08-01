type Metrics = {
    sucessRequest: number;
    failedRequest: number;
    responseTime: number;
    totalRequest: number;
};

const metrics: Metrics = {
    sucessRequest: 0,
    failedRequest: 0,
    responseTime: 0,
    totalRequest: 0,
};

export function logRequest(success: boolean, responseTime: number) {
    metrics.totalRequest++;
    metrics.responseTime += responseTime;

    if (success) {
        metrics.sucessRequest++;
    } else {
        metrics.failedRequest++;
    }
}

export function getMetrics() {
    return {
        ...metrics,
        averageResponseTime:
            metrics.totalRequest === 0
                ? 0
                : Math.floor(metrics.responseTime / metrics.totalRequest),
    };
}
