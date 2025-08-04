export type ToneOfVoice =
    | 'friendly'
    | 'technical'
    | 'casual'
    | 'motivational';

export interface GeneratedContent {
    mainContent: string; // O texto principal do microblog
    hashtags: string[]; // Array de hashtags sugeridas
    insights: string[]; // Insights e dicas relacionadas ao conteúdo
}

// Interface para o estado do formulário de geração
export interface FormState {
    topic: string; // Tópico sobre o qual gerar conteúdo
    toneOfVoice: ToneOfVoice | string; // Tom de voz selecionado
    keywords: string; // Palavras-chave opcionais
}

// Interface genérica para respostas da API
export interface ApiResponse<T> {
    success: boolean; // Indica se a operação foi bem-sucedida
    data?: T; // Dados retornados (quando success = true)
    error?: string; // Mensagem de erro (quando success = false)
}

// Interface específica para requisições de geração
export interface GenerateApiRequest {
    topic: string; // Tópico obrigatório
    tone: string; // Tom de voz
    keywords?: string; // Palavras-chave opcionais
}

// Interface específica para respostas de geração
export interface GenerateApiResponse {
    success: boolean;
    content?: GeneratedContent; // Conteúdo gerado pela IA
    error?: string;
}
