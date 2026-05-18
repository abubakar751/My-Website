import { motion } from "framer-motion";

const lines = [
  { label: "01", text: "// services/order-service" },
  { label: "02", text: "@RestController" },
  { label: "03", text: "public class OrderApi {" },
  { label: "04", text: "  @GetMapping(\"/orders/{id}\")" },
  { label: "05", text: "  public Order get(@PathVariable Long id) {" },
  { label: "06", text: "    return repo.findById(id).orElseThrow();" },
  { label: "07", text: "  }" },
  { label: "08", text: "}" },
  { label: "09", text: "" },
  { label: "10", text: "// web/src/pages/Dashboard.jsx" },
  { label: "11", text: "export default function Dashboard() {" },
  { label: "12", text: "  const { data } = useQuery(['orders'], fetchOrders)" },
  { label: "13", text: "  return <Grid items={data} />" },
  { label: "14", text: "}" },
];

export default function CodeBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-[0.18]">
        <motion.pre
          initial={{ y: 0 }}
          animate={{ y: -120 }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="font-mono text-[11px] leading-7 text-white/90 whitespace-pre p-10"
        >
{lines
  .concat(lines)
  .map((l) => `${l.label}   ${l.text}`)
  .join("\n")}
        </motion.pre>
      </div>
    </div>
  );
}
