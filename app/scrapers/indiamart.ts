import puppeteer from 'puppeteer';

interface ProductData {
  title: string;
  price: string;
  description: string;
  images: string[];
}

export async function scrapeIndiaMart(url: string): Promise<ProductData> {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });

    // Update these selectors based on IndiaMART's actual structure
    const productData = await page.evaluate(() => ({
      title: document.querySelector('.product-title')?.textContent?.trim() || '',
      price: document.querySelector('.price-value')?.textContent?.trim() || '',
      description: document.querySelector('.product-description')?.textContent?.trim() || '',
      images: Array.from(document.querySelectorAll('.product-image img'))
        .map(img => (img as HTMLImageElement).src)
    }));

    return productData;
  } finally {
    await browser.close();
  }
}