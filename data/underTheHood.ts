export const UNDER_THE_HOOD: Record<string, Record<string, string[]>> = {
  "ecommerce-platform": {
    COMPONENTS: [
      "export const ProductCard = ({ product }) => {",
      "  return <Card data={product} />;",
      "};",
    ],
    API: [
      "export async function getProducts() {",
      "  return await db.product.findMany();",
      "}",
    ],
    STATE: [
      "const [cart, setCart] = useState<CartItem[]>([]);",
      "const addToCart = (item) => setCart([...cart, item]);",
    ],
  },
  "ai-dashboard": {
    COMPONENTS: [
      "export const ChartWidget = ({ data }) => {",
      "  return <D3Chart data={data} />;",
      "};",
    ],
    API: [
      "export async function fetchInsights() {",
      "  return await ml.predict(data);",
      "}",
    ],
    STATE: [
      "const [metrics, setMetrics] = useState<Metric[]>([]);",
      "useEffect(() => { subscribe(setMetrics); }, []);",
    ],
  },
};