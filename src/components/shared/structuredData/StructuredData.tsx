import { Thing, WithContext } from "schema-dts";

export interface StructuredDataProps<T extends Thing> {
    data: WithContext<T>;
}

export const StructuredData = <T extends Thing>({ data }: StructuredDataProps<T>) => (
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
        }}
    />
);
