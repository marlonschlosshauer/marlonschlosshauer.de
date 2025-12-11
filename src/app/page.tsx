import { Metadata } from "next";
import { Posts } from "@/components/posts/Posts";
import { Link } from "@/components/shared/link/Link";
import { buildMetadata } from "@/lib/meta";

export const metadata: Metadata = buildMetadata({
    title: "Optimise into existence",
    description:
        "Fullstack Developer from Germany who loves to build, design and optimize products into reality.",
});

export default async function Page() {
    return (
        <div className="flex flex-col gap-8">
            <h1 className="font-semibold text-xl">
                Design Engineering + Pareto Principle ={" "}
                <Link href="https://github.com/marlonschlosshauer">Marlon</Link>
            </h1>
            <p className="text-white-alt">
                I&lsquo;m a full-stack developer that loves to code, design and optimise products
                into reality. I&lsquo;m a firm believer in compromise. Time is limited and ideas are
                infinite. We can get a lot done if we&lsquo;re brave enough to focus, narrow scope
                and ship incrementally.
            </p>
            <p className="text-white-alt">
                After finishing my{" "}
                <Link href="https://github.com/marlonschlosshauer/thesis">bachelors thesis</Link> in
                applied computer science I joined{" "}
                <Link href="https://www.figma.com/design/Wg2c9sk6nqbeWrydDOxCMg/Portfolio--Tippinho?node-id=0-1&t=euCBXXiFDOqdV9dh-1">
                    Tippinho
                </Link>{" "}
                as their app developer and designer. During my time there I also worked on{" "}
                <Link href="https://www.figma.com/design/vbdX85EQ4ALcO1Txeeu4do/Portfolio--Neo-Strom?node-id=0-1&t=qyTLYo9BRQ5HifD8-1">
                    Neo Strom
                </Link>
                , filling a technical and design role. I later took on a full-time position as a
                frontend developer at <Link href="https://becklyn.com">Becklyn</Link>, building CMS
                powered websites. While working full-time I also worked on{" "}
                <Link href="https://www.figma.com/design/KgLQExaQWOnNiDD7zsw6e9/Portfolio--Secondwave?node-id=0-1&t=jy94MQDD9AeEXfUE-1">
                    Secondwave
                </Link>{" "}
                as a designer and developer on the side. Afterwards I did a redesign of Tippinho,
                called{" "}
                <Link href="https://www.figma.com/design/Wg2c9sk6nqbeWrydDOxCMg/Portfolio--Tippinho?node-id=6-5924&t=VgC4hyVQZblLkrTo-4">
                    Golero
                </Link>
                .
            </p>
            <h2 className="font-semibold text-xl">Writing</h2>
            <Posts />
        </div>
    );
}
