import { Link } from "../shared/link/Link";

export const Designs = () => {
    const metadatas = [
        {
            label: "Golero",
            date: "2025",
            href: "https://www.figma.com/design/Wg2c9sk6nqbeWrydDOxCMg/Portfolio--Tippinho?node-id=6-5924&t=VgC4hyVQZblLkrTo-4",
        },
        {
            label: "Secondwave",
            date: "2024",
            href: "https://www.figma.com/design/KgLQExaQWOnNiDD7zsw6e9/Portfolio--Secondwave?node-id=0-1&t=jy94MQDD9AeEXfUE-1",
        },
        {
            label: "Tippinho",
            date: "2023",
            href: "https://www.figma.com/design/Wg2c9sk6nqbeWrydDOxCMg/Portfolio--Tippinho?node-id=0-1&t=euCBXXiFDOqdV9dh-1",
        },
        {
            label: "Neo Strom",
            date: "2022",
            href: "https://www.figma.com/design/vbdX85EQ4ALcO1Txeeu4do/Portfolio--Neo-Strom?node-id=0-1&t=qyTLYo9BRQ5HifD8-1",
        },
    ];

    return (
        <ul>
            {metadatas.map(({ label, date, href }, key) => (
                <li key={key} className="flex">
                    <Link href={href} className="flex flex-row items-center gap-1" inNewTab>
                        {date} {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
