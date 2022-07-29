/**
 * This is the entry point to the Phoenix engine.
 * 
 * alias go="run /runtimes/launcher.ts"
 * 
 */
import { NS } from "Bitburner";
import { MOTD } from "lib/Motd";

export async function main(ns: NS) {
    MOTD.banner(ns);
}
