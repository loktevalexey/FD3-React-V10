import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

export async function GET() {
    const filePath = path.join(process.cwd(), "data", "mobile_company.json");
    const fileContents = await readFile(filePath, "utf-8");
    const data = JSON.parse(fileContents);
    return NextResponse.json(data);
}
