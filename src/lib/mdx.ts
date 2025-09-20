import { promises as fs } from "fs";
import path from "path";

export const getMdxFiles = async (dir: string[]) => {
    const entries = await fs.readdir(path.join(process.cwd(), ...dir), {
        recursive: true,
        withFileTypes: true,
    });

    return entries.filter(entry => entry.isFile() && entry.name.endsWith(".mdx"));
};
