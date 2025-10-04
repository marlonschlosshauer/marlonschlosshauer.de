import { FC, Suspense } from "react";
import { Teaser } from "./Teaser";

export const SuspendedTeaser: FC = () => (
    <Suspense fallback={<p>Loading...</p>}>
        <Teaser />
    </Suspense>
);
