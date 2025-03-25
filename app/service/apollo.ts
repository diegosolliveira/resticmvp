import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

// Obtém a URL do GraphQL
const GRAPHQL_URL = process.env.NEXT_PUBLIC_GRAPHQL_URI || 'http://localhost:4000/graphql';

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

// Adicionar o link de autenticação (token JWT)
const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("accessToken"); // Ou de onde você estiver armazenando o token JWT
  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return forward(operation);
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
    authLink,  // Link de autenticação que adiciona o token
    httpLink,  // Conecta à API real
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
