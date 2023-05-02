import path from "path";
import fs from "fs";
import { ZIP_FOLDER } from "../constants";

export default function formZipFilePath(zipFileName: string) {
    return path.resolve(ZIP_FOLDER, zipFileName);
}