import { logRequest } from '@/lib/metrics/metrics';
import { getGitHubModelsService } from '@/lib/services/github-models.service';
import { NextResponse } from 'next/server';

export async function GET() {
    const start = Date.now();

    try {
        const service = getGitHubModelsService();

        const result = await service.generateMicroblogContent(
            'The future of web development',
            'professional',
            'React, TypeScript, AI'
        );
        console.log('✅ Teste bem-sucedido:', result);

        const duration = Date.now() - start;
        logRequest(true, duration);

        return NextResponse.json({
            success: true,
            data: result,
            message: 'Teste executado com sucesso!',
        });
    } catch (error) {
        console.error('❌ Teste falhou:', error);
        const duration = Date.now() - start;
        logRequest(false, duration);

        return NextResponse.json(
            {
                success: false,
                error:
                    error instanceof Error
                        ? error.message
                        : 'Erro desconhecido',
                message: 'Teste falhou',
            },
            { status: 500 }
        );
    }
}
