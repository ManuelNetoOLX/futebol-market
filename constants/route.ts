export type ValidPathname =
  | "/"
  | "/(tabs)"
  | "/(tabs)/"
  | "/(tabs)/account"
  | "/_sitemap"
  | "/account"
  | "/profile"
  | "/register"
  | "/address"
  | "/orders"
  | `./${string}`
  | `../${string}`
  | ".."
  | `${string}:${string}`;
