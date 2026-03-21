import { FC } from "react";
import { Note } from "@/components/shared/note/server";

export const Disclaimer: FC = () => (
    <Note.Frame variant="primary">
        <Note.Header>
            <Note.Headline>Disclaimer</Note.Headline>
        </Note.Header>
        <Note.Body>
            This approach ended up not shipping as it had many issues with navigation in Next.js. We
            decided to abandon <code>react-instantsearch-nextjs</code> entirely, as it was unfit to
            be used in any but one single way.
        </Note.Body>
    </Note.Frame>
);
