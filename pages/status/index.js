import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  console.log(responseBody);
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <h1>Database</h1>
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }
  return (
    <div>
      <p>Última atualização: {updatedAtText}</p>
    </div>
  );
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let maxConnectionsText = "Carregando...";
  let openedConnectionText = "Carregando...";
  let postgresVersionText = "Carregando...";

  if (!isLoading && data) {
    postgresVersionText = data.dependencies.database.version;
    maxConnectionsText = data.dependencies.database.max_connections;
    openedConnectionText = data.dependencies.database.opened_connections;
  }
  return (
    <div>
      <p>Versão do Postgres: {postgresVersionText}</p>
      <p>Número máximo de conexões: {maxConnectionsText}</p>
      <p>Quantidade de conexões abertas: {openedConnectionText}</p>
    </div>
  );
}
