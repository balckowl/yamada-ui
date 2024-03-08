import type { MetaFunction } from "@remix-run/node"
import { Layout } from "~/components/layouts"

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App - Yamada UI" },
    { name: "description", content: "Remix App - Yamada UI" },
  ]
}

export default function Index() {
  return <Layout />
}
