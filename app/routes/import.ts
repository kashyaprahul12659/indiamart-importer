import { ActionFunctionArgs, json } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import { scrapeIndiaMart } from "../scrapers/indiamart";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const productUrl = formData.get("productUrl") as string;

  try {
    // Scrape product data
    const productData = await scrapeIndiaMart(productUrl);

    // Create Shopify product
    const product = new admin.rest.resources.Product({
      title: productData.title,
      body_html: productData.description,
      vendor: "IndiaMART",
      images: productData.images.map(src => ({ src })),
      variants: [{ price: productData.price }]
    });
    await product.save();

    return json({ success: true, productId: product.id });
  } catch (error) {
    return json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error"
    });
  }
};