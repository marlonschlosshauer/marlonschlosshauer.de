import { metadata as signingAndReactNative } from "@/app/(md)/blog/signing-and-react-native/page.mdx";
import { metadata as rtkGraphql } from "@/app/(md)/blog/rtk-graphql/page.mdx";
import { metadata as comparingUI } from "@/app/(md)/blog/comparing-ui-frameworks/page.mdx";
import { metadata as cljsMacro } from "@/app/(md)/blog/clojurescript-in-macros/page.mdx";
import { metadata as cljError } from "@/app/(md)/blog/clojure-error-handling/page.mdx";

export const getPosts = () => [
  signingAndReactNative,
  rtkGraphql,
  comparingUI,
  cljsMacro,
  cljError,
];
