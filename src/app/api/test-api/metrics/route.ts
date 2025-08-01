import { getMetrics } from '@/lib/metrics/metrics';

export async function GET() {
    const stats = getMetrics();

    return Response.json({
        success: true,
        metrics: stats,
    });
}
