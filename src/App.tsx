import Layout from "./components/common/layout";

function App() {
  return (
    <Layout leftSide={<h1>Left</h1>} rightSide={<h1>Right</h1>}>
      <h1>Content</h1>
    </Layout>
  );
}

export default App;
