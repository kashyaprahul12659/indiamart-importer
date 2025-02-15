import { Form } from "@remix-run/react";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>🚀 IndiaMART to Shopify Importer</h1>
      <Form method="post" action="/import" style={{ marginTop: "20px" }}>
        <input
          type="url"
          name="productUrl"
          placeholder="https://www.indiamart.com/your-product"
          required
          style={{ width: "400px", padding: "8px", marginRight: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            backgroundColor: "#008060",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}
        >
          Import Product
        </button>
      </Form>
    </div>
  );
}