import { drizzle } from "drizzle-orm/xata-http";
import { getXataClient } from "~/lib/xata";

const xata = getXataClient();

export const db = drizzle(xata);
