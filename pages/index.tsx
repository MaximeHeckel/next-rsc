const Index = () => {
  return (
    <div>
      <section>
        <a href="/ssr" target="_blank">
          🐌 SSR with API Delays
        </a>
        <br />
        <a href="/rsc" target="_blank">
          🤯 RSC
        </a>
      </section>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html {
          height: 100%;
        }
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          margin: 0;
          padding: 20px 20px 80px;
          box-sizing: border-box;
          color: #333;
          -webkit-font-smoothing: antialiased;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
        }
        h1 {
          font-size: 2em;
        }
        h2 {
          font-size: 1.4em;
          margin-top: 2em;
        }
        .container {
          font-size: 20px;
          text-align: center;
        }
        small {
          font-size: .8em;
        }
        p {
          margin: 10px;
        }
        section {
          display: block;
          margin: 5px 0;
          text-underline-position: from-font;
        }
        section a {
          color: #1386ff;
        }`,
        }}
      />
    </div>
  );
};

export default Index;
