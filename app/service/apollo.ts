import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Obtém a URL do GraphQL
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URI || 'https://ce80-45-169-219-116.ngrok-free.app/graphql';

console.log('Apollo GraphQL URL:', GRAPHQL_URL);

// Link de log para depuração
const logLink = new ApolloLink((operation, forward) => {
  console.log(`[GraphQL Operação]: ${operation.operationName}`);

  return forward(operation).map((result) => {
    console.log(`[GraphQL Resultado]:`, result);
    return result;
  });
});

// Tratamento de erros
const errorLink = onError(({ graphQLErrors, networkError, operation }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[Erro GraphQL]: Operação: ${operation.operationName}, Mensagem: ${message}, Localização: ${locations}, Caminho: ${path}`
      )
    );
  }

  if (networkError) {
    console.error(`[Erro de Rede para ${operation.operationName}]:`, networkError);
  }
});

// Configuração do HTTP Link para API real
const httpLink = new HttpLink({
  uri: GRAPHQL_URL,
  credentials: 'omit', // 'include' se a API requer cookies de autenticação
  fetchOptions: {
    mode: 'cors',
  },
});

// Configuração do cliente Apollo
export const client = new ApolloClient({
  link: from([
    logLink,   // Primeiro registra a operação
    errorLink, // Depois captura erros
    httpLink   // Conecta à API real
  ]),
  cache: new InMemoryCache(),
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
}); 