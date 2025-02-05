function Home() {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          html, body {
            height: 100%;
            overflow-x: hidden;
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          background: "linear-gradient(to bottom, #f4c4ca, #d8a9b2)",
          color: "#333",
          minHeight: "100vh",
        }}
      >
        <header
          style={{
            textAlign: "center",
            padding: "1.2rem",
            backgroundColor: "#800020",
            color: "white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "2.5rem" }}>Obrigado, Mãe</h1>
        </header>

        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            textAlign: "center",
            flex: "1 0 auto",
            minHeight: 0,
            width: "90%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              lineHeight: 1.8,
              marginBottom: "1rem",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            Desde sempre, sinto o seu amor e a sua dedicação. Tudo o que
            alcancei, em qualquer momento da minha vida, teve a sua influência.
            Ora me orientando, ora me apoiando, ora me oferecendo suporte.
          </p>
          <p
            style={{
              lineHeight: 1.8,
              marginBottom: "1rem",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            Mais uma vez, tenho motivos para agradecer, pois esta página web que
            você está lendo foi desenvolvida e hospedada na internet através do
            conhecimento que adquiri no curso que você está me ajudando a pagar.
            Obrigado!
          </p>
          <p
            style={{
              lineHeight: 1.8,
              marginBottom: "1rem",
              fontSize: "1.1rem",
              textAlign: "justify",
            }}
          >
            A conclusão da faculdade se aproxima, e confio que o futuro me
            reserva um emprego remoto, um bom salário e uma vida com conforto,
            saúde e maturidade financeira. E você terá feito parte disso. É uma
            benção ser seu filho e portanto eu repito: obrigado!
          </p>
        </main>

        <footer
          style={{
            textAlign: "center",
            padding: "0.8rem",
            backgroundColor: "#800020",
            color: "white",
            borderTop: "4px solid #d8a9b2",
            marginTop: "auto",
            fontSize: "0.9rem",
          }}
        >
          <p style={{ margin: 0 }}>Escrito com amor e gratidão, ass. RODRIGO</p>
        </footer>
      </div>
    </>
  );
}

export default Home;
