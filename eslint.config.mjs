import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url))
})

const config = [
  // Generated or local-only files: never lint these.
  { ignores: [".next/**", "out/**", "node_modules/**", "next-env.d.ts", "uploadables/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-console": ["warn", { allow: ["error"] }]
    }
  }
]

export default config
